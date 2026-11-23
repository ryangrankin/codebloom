
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { getLesson } from "../data/lessonRegistry";
import { completeLesson } from "../data/progressStorage";
import type { CodeLanguage } from "../data/types";

export default function LessonScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id?: string }>();

  const lessonId = typeof id === "string" ? id : "what-is-programming";
  const lesson = getLesson(lessonId);
  
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(
    null
  );
  const [selectedOrder, setSelectedOrder] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);
  const [language, setLanguage] = useState<CodeLanguage>("pseudo");

  const isComplete = stepIndex >= (lesson?.steps.length ?? 0);
  useEffect(() => {
  if (!isComplete || !lesson) return;

  completeLesson(lesson.id)
    .then(() => {
      console.log("Lesson progress saved:", lesson.id);
    })
    .catch((error) => {
      console.error("Failed to save lesson progress:", error);
    });
}, [isComplete, lesson?.id]);
  const step = lesson?.steps[stepIndex];

  const progress = lesson
  ? isComplete
    ? 100
    : (stepIndex / lesson.steps.length) * 100
  : 0;

  function resetLesson() {
    setStepIndex(0);
    setSelectedAnswer(null);
    setSelectedOrder([]);
    setChecked(false);
  }

  function nextStep() {
    setStepIndex((previous) => previous + 1);
    setSelectedAnswer(null);
    setSelectedOrder([]);
    setChecked(false);
  }

  function exitLesson() {
    resetLesson();
    router.replace("/learn");
  }

  const isOrdering = step?.type === "ordering";
  const isQuiz = step?.type === "quiz";

  const currentOrderingOptions =
    lesson?.orderingOptions?.[language] ?? step?.options ?? [];

  const orderingIsCorrect =
    JSON.stringify(selectedOrder) ===
    JSON.stringify(step?.correctOrder);

  const answerIsCorrect =
    selectedAnswer === step?.correctAnswer;

if (!lesson) {
  return (
    <View style={styles.completeContainer}>
      <Text style={styles.completeTitle}>Lesson Not Found</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/learn")}
      >
        <Text style={styles.buttonText}>Back to Learning Path</Text>
      </TouchableOpacity>
    </View>
  );
}

  if (isComplete) {
    return (
      <View style={styles.completeContainer}>
        <Text style={styles.completeEmoji}>🌸</Text>

        <Text style={styles.completeTitle}>
          Lesson Complete!
        </Text>

        <Text style={styles.completeDescription}>
          You finished {lesson.title}!
        </Text>

        <Text style={styles.xpReward}>
          ⚡ +{lesson.xp} XP
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={exitLesson}
        >
          <Text style={styles.buttonText}>
            Back to Learning Path
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {/* Exit lesson */}
      <TouchableOpacity onPress={exitLesson}>
        <Text style={styles.backButton}>
          ← Exit Lesson
        </Text>
      </TouchableOpacity>

      {/* Lesson information */}
      <Text style={styles.chapterLabel}>
        {lesson.world.toUpperCase()} · {lesson.chapter.toUpperCase()}
      </Text>

      {/* Progress bar */}
      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            { width: `${progress}%` },
          ]}
        />
      </View>

      <Text style={styles.stepCounter}>
        Step {stepIndex + 1} of {lesson.steps.length}
      </Text>

      <Text style={styles.title}>{step.title}</Text>

      {/* Language toggle */}
      <View style={styles.languageContainer}>
        <Text style={styles.languageLabel}>
          VIEW CODE AS
        </Text>

        <View style={styles.languageToggle}>
          {[
            { label: "Pseudocode", value: "pseudo" },
            { label: "C", value: "c" },
            { label: "C++", value: "cpp" },
          ].map((option) => (
            <TouchableOpacity
              key={option.value}
              style={[
                styles.languageOption,
                language === option.value &&
                  styles.activeLanguageOption,
              ]}
              onPress={() =>
                setLanguage(option.value as CodeLanguage)
              }
            >
              <Text
                style={[
                  styles.languageOptionText,
                  language === option.value &&
                    styles.activeLanguageText,
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Explanation */}
      {step.type === "explanation" && (
        <View style={styles.card}>
          <Text style={styles.description}>
            {step.description}
          </Text>
        </View>
      )}

      {/* Ordering exercise */}
      {isOrdering && (
        <View>
          {/* Code example */}
          {lesson.codeExamples && (
            <View style={styles.codeContainer}>
              <Text style={styles.codeLabel}>
                {language === "pseudo"
                  ? "PSEUDOCODE"
                  : language === "c"
                  ? "C"
                  : "C++"}
              </Text>

              <ScrollView horizontal>
                <Text style={styles.codeText}>
                  {lesson.codeExamples[language]}
                </Text>
              </ScrollView>
            </View>
          )}

          <Text style={styles.question}>
            {step.question}
          </Text>

          <Text style={styles.orderLabel}>
            Your sequence:
          </Text>

          <View style={styles.orderContainer}>
            {selectedOrder.length === 0 ? (
              <Text style={styles.placeholder}>
                Tap the instructions below in the correct order.
              </Text>
            ) : (
              selectedOrder.map((index, position) => (
                <TouchableOpacity
                  key={index}
                  disabled={checked}
                  style={styles.orderItem}
                  onPress={() =>
                    setSelectedOrder((previous) =>
                      previous.filter(
                        (value) => value !== index
                      )
                    )
                  }
                >
                  <Text style={styles.optionText}>
                    {position + 1}.{" "}
                    {currentOrderingOptions[index]} ✕
                  </Text>
                </TouchableOpacity>
              ))
            )}
          </View>

          <Text style={styles.orderLabel}>
            Available instructions:
          </Text>

          {currentOrderingOptions.map((option, index) =>
            selectedOrder.includes(index) ? null : (
              <TouchableOpacity
                key={index}
                disabled={checked}
                style={styles.option}
                onPress={() =>
                  setSelectedOrder((previous) => [
                    ...previous,
                    index,
                  ])
                }
              >
                <Text style={styles.optionText}>
                  {option}
                </Text>
              </TouchableOpacity>
            )
          )}

          {checked && (
            <View style={styles.feedback}>
              <Text style={styles.feedbackTitle}>
                {orderingIsCorrect
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

      {/* Multiple-choice quiz */}
      {isQuiz && (
        <View>
          <Text style={styles.question}>
            {step.question}
          </Text>

          {step.options?.map((option, index) => {
            const isSelected =
              selectedAnswer === index;

            const isCorrect =
              step.correctAnswer === index;

            return (
              <TouchableOpacity
                key={index}
                disabled={checked}
                style={[
                  styles.option,
                  isSelected &&
                    styles.selectedOption,
                  checked &&
                    isCorrect &&
                    styles.correctOption,
                  checked &&
                    isSelected &&
                    !isCorrect &&
                    styles.incorrectOption,
                ]}
                onPress={() =>
                  setSelectedAnswer(index)
                }
              >
                <Text style={styles.optionText}>
                  {option}
                </Text>
              </TouchableOpacity>
            );
          })}

          {checked && (
            <View style={styles.feedback}>
              <Text style={styles.feedbackTitle}>
                {answerIsCorrect
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

      {/* Navigation buttons */}
      {step.type === "explanation" ? (
        <TouchableOpacity
          style={styles.button}
          onPress={nextStep}
        >
          <Text style={styles.buttonText}>
            Continue →
          </Text>
        </TouchableOpacity>
      ) : !checked ? (
        <TouchableOpacity
          style={[
            styles.button,
            (isOrdering
              ? selectedOrder.length !==
                currentOrderingOptions.length ||
                currentOrderingOptions.length === 0
              : selectedAnswer === null) &&
              styles.disabledButton,
          ]}
          disabled={
            isOrdering
              ? selectedOrder.length !==
                  currentOrderingOptions.length ||
                currentOrderingOptions.length === 0
              : selectedAnswer === null
          }
          onPress={() => setChecked(true)}
        >
          <Text style={styles.buttonText}>
            Check Answer
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={nextStep}
        >
          <Text style={styles.buttonText}>
            Continue →
          </Text>
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
  orderLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#685779",
    marginBottom: 12,
    marginTop: 15,
  },
  orderContainer: {
    backgroundColor: "#F3EAFF",
    borderRadius: 16,
    padding: 15,
    minHeight: 85,
    marginBottom: 18,
  },
  orderItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
  },
  placeholder: {
    fontSize: 14,
    color: "#847A91",
    lineHeight: 22,
  },
  languageContainer: {
    marginBottom: 24,
  },
  languageLabel: {
    fontSize: 11,
    fontWeight: "800",
    color: "#9162E4",
    letterSpacing: 1,
    marginBottom: 10,
  },
  languageToggle: {
    flexDirection: "row",
    backgroundColor: "#EDE3F8",
    borderRadius: 14,
    padding: 4,
  },
  languageOption: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 11,
  },
  activeLanguageOption: {
    backgroundColor: "#9162E4",
  },
  languageOptionText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#685779",
  },
  activeLanguageText: {
    color: "#FFFFFF",
  },
  codeContainer: {
    backgroundColor: "#242033",
    borderRadius: 16,
    padding: 18,
    marginBottom: 24,
  },
  codeLabel: {
    fontSize: 11,
    fontWeight: "800",
    color: "#C8B9FA",
    marginBottom: 14,
    letterSpacing: 1,
  },
  codeText: {
    fontFamily: "monospace",
    fontSize: 13,
    color: "#FFFFFF",
    lineHeight: 22,
  },
});
