
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const lessonSteps = [
  {
    type: "explanation",
    title: "Welcome to Coding! 💻",
    description:
      "Programming is the process of giving a computer instructions to complete a task.\n\n" +
      "These instructions are written using programming languages such as C and C++.\n\n" +
      "Before writing code, programmers break problems into smaller steps.",
  },
  {
    type: "quiz",
    title: "Quick Check!",
    question: "What is programming?",
    options: [
      "Giving a computer instructions",
      "Building computers",
      "Using the internet",
      "Designing websites only",
    ],
    correctAnswer: 0,
    explanation:
      "Programming means writing instructions that tell a computer what to do.",
  },
  {
    type: "quiz",
    title: "Think Like a Programmer",
    question: "Why do programmers break problems into smaller steps?",
    options: [
      "To make programs longer",
      "To make problems easier to solve",
      "Because computers cannot run large programs",
      "To avoid using programming languages",
    ],
    correctAnswer: 1,
    explanation:
      "Breaking a problem into smaller steps makes it easier to understand, solve, and debug.",
  },
  {
    type: "quiz",
    title: "Knowledge Check",
    question: "Which of these is a programming language?",
    options: ["Google", "Wi-Fi", "C++", "Keyboard"],
    correctAnswer: 2,
    explanation:
      "C++ is a programming language used to write instructions for computers.",
  },
];

export default function LessonScreen() {
  const router = useRouter();

  const [stepIndex, setStepIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(
    null
  );
  const [checked, setChecked] = useState(false);

  const isComplete = stepIndex >= lessonSteps.length;
  const step = lessonSteps[stepIndex];

  const progress = isComplete
    ? 100
    : (stepIndex / lessonSteps.length) * 100;

  function nextStep() {
    setStepIndex((previous) => previous + 1);
    setSelectedAnswer(null);
    setChecked(false);
  }

  if (isComplete) {
    return (
      <View style={styles.completeContainer}>
        <Text style={styles.completeEmoji}>🌸</Text>
        <Text style={styles.completeTitle}>Lesson Complete!</Text>
        <Text style={styles.completeDescription}>
          You finished your first CodeBloom lesson!
        </Text>
        <Text style={styles.xpReward}>⚡ +15 XP</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/learn")}
        >
          <Text style={styles.buttonText}>Back to Learning Path</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const isQuiz = step.type === "quiz";

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.backButton}>← Exit Lesson</Text>
      </TouchableOpacity>

      <Text style={styles.chapterLabel}>
        WORLD 01 · CHAPTER 01 · LESSON 01
      </Text>

      <View style={styles.progressTrack}>
        <View
          style={[styles.progressFill, { width: `${progress}%` }]}
        />
      </View>

      <Text style={styles.stepCounter}>
        Step {stepIndex + 1} of {lessonSteps.length}
      </Text>

      <Text style={styles.title}>{step.title}</Text>

      {step.type === "explanation" && (
        <View style={styles.card}>
          <Text style={styles.description}>{step.description}</Text>
        </View>
      )}

      {isQuiz && (
        <View>
          <Text style={styles.question}>{step.question}</Text>

          {step.options?.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = step.correctAnswer === index;

            return (
              <TouchableOpacity
                key={index}
                disabled={checked}
                style={[
                  styles.option,
                  isSelected && styles.selectedOption,
                  checked && isCorrect && styles.correctOption,
                  checked &&
                    isSelected &&
                    !isCorrect &&
                    styles.incorrectOption,
                ]}
                onPress={() => setSelectedAnswer(index)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            );
          })}

          {checked && (
            <View style={styles.feedback}>
              <Text style={styles.feedbackTitle}>
                {selectedAnswer === step.correctAnswer
                  ? "Correct! 🎉"
                  : "Not quite! 💡"}
              </Text>
              <Text style={styles.feedbackText}>
                {step.explanation}
              </Text>
            </View>
          )}
        </View>
      )}

      {step.type === "explanation" ? (
        <TouchableOpacity style={styles.button} onPress={nextStep}>
          <Text style={styles.buttonText}>Continue →</Text>
        </TouchableOpacity>
      ) : !checked ? (
        <TouchableOpacity
          style={[
            styles.button,
            selectedAnswer === null && styles.disabledButton,
          ]}
          disabled={selectedAnswer === null}
          onPress={() => setChecked(true)}
        >
          <Text style={styles.buttonText}>Check Answer</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={nextStep}>
          <Text style={styles.buttonText}>Continue →</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9FD",
  },
  content: {
    padding: 24,
    paddingTop: 65,
    paddingBottom: 60,
  },
  backButton: {
    fontSize: 16,
    fontWeight: "700",
    color: "#9162E4",
    marginBottom: 25,
  },
  chapterLabel: {
    fontSize: 11,
    fontWeight: "800",
    color: "#9162E4",
    letterSpacing: 1,
    marginBottom: 18,
  },
  progressTrack: {
    height: 9,
    backgroundColor: "#E9DDF8",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#9162E4",
  },
  stepCounter: {
    fontSize: 13,
    color: "#847A91",
    marginTop: 14,
    marginBottom: 25,
  },
  title: {
    fontSize: 27,
    fontWeight: "800",
    color: "#332748",
    marginBottom: 25,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 24,
    borderWidth: 1,
    borderColor: "#F0E8F5",
  },
  description: {
    fontSize: 16,
    color: "#685779",
    lineHeight: 26,
  },
  question: {
    fontSize: 19,
    fontWeight: "700",
    color: "#392653",
    marginBottom: 20,
  },
  option: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#E9DDF8",
    padding: 17,
    marginBottom: 12,
  },
  selectedOption: {
    borderColor: "#9162E4",
    backgroundColor: "#F3EAFF",
  },
  correctOption: {
    borderColor: "#43B581",
    backgroundColor: "#E6F8EF",
  },
  incorrectOption: {
    borderColor: "#E57373",
    backgroundColor: "#FDECEC",
  },
  optionText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#392653",
  },
  feedback: {
    backgroundColor: "#F0E8FF",
    padding: 18,
    borderRadius: 16,
    marginTop: 12,
  },
  feedbackTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#392653",
    marginBottom: 8,
  },
  feedbackText: {
    fontSize: 14,
    color: "#685779",
    lineHeight: 21,
  },
  button: {
    backgroundColor: "#9162E4",
    borderRadius: 16,
    padding: 18,
    alignItems: "center",
    marginTop: 30,
  },
  disabledButton: {
    opacity: 0.45,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
  completeContainer: {
    flex: 1,
    backgroundColor: "#FFF9FD",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  completeEmoji: {
    fontSize: 65,
    marginBottom: 20,
  },
  completeTitle: {
    fontSize: 30,
    fontWeight: "800",
    color: "#392653",
    textAlign: "center",
  },
  completeDescription: {
    fontSize: 16,
    color: "#847A91",
    textAlign: "center",
    marginTop: 12,
  },
  xpReward: {
    fontSize: 25,
    fontWeight: "800",
    color: "#9162E4",
    marginTop: 30,
  },
});
