
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import CodeBuilder from "../components/CodeBuilder";
import { validateCode } from "../data/codeValidator";
import { getLesson } from "../data/lessonRegistry";
import {
    completeLesson,
    getCompletedLessons,
} from "../data/progressStorage";
import type { CodeLanguage } from "../data/types";


const languages: { label: string; value: CodeLanguage }[] = [
  { label: "Pseudocode", value: "pseudo" },
  { label: "C", value: "c" },
  { label: "C++", value: "cpp" },
];

function normalizeCode(
  code: string,
  language: CodeLanguage
): string {
  const cleaned = code
    .trim()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\r\n?/g, "\n");

  if (language === "pseudo") {
    return cleaned
      .replace(/\s+/g, " ")
      .toLowerCase()
      .replace(/\s*([=+*/()-])\s*/g, "$1");
  }

  // Ignore formatting whitespace outside quoted text.
  // This is not a compiler or a full syntax validator.
  let result = "";
  let quote: '"' | "'" | null = null;
  let escaped = false;

  for (const char of cleaned) {
    if (quote) {
      result += char;

      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
    } else if (char === '"' || char === "'") {
      quote = char;
      result += char;
    } else if (!/\s/.test(char)) {
      result += char;
    }
  }

  return result;
}

export default function LessonScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id?: string }>();

  const lessonId =
    typeof id === "string" ? id : "what-is-programming";

  const lesson = getLesson(lessonId);

  const [stepIndex, setStepIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<
    number | null
  >(null);
  const [selectedOrder, setSelectedOrder] = useState<number[]>(
    []
  );
  const [checked, setChecked] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

const [language, setLanguage] =
  useState<CodeLanguage>("pseudo");

const [codeDrafts, setCodeDrafts] = useState<
  Record<CodeLanguage, string>
>({
  pseudo: "",
  c: "",
  cpp: "",
});

const codeAnswer = codeDrafts[language];

function setCodeAnswer(value: string) {
  setCodeDrafts((previous) => ({
    ...previous,
    [language]: value,
  }));
}

  const [wasCompletedBefore, setWasCompletedBefore] =
    useState(false);

  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const isComplete =
    !!lesson && stepIndex >= lesson.steps.length;

  useEffect(() => {
    let active = true;

    getCompletedLessons()
      .then((completed) => {
        if (active) {
          setWasCompletedBefore(completed.includes(lessonId));
        }
      })
      .catch((error) => {
        console.error("Failed to load progress:", error);
      });

    return () => {
      active = false;
    };
  }, [lessonId]);

  useEffect(() => {
    if (!isComplete || !lesson) return;

    completeLesson(lesson.id).catch((error) => {
      console.error("Failed to save progress:", error);
    });
  }, [isComplete, lesson?.id]);

  const step = lesson?.steps[stepIndex];

  const progress = lesson
    ? isComplete
      ? 100
      : (stepIndex / lesson.steps.length) * 100
    : 0;

  const isOrdering = step?.type === "ordering";
  const isQuiz = step?.type === "quiz";
  const isCodeInput = step?.type === "code-input";
  const isCodeBuilder = step?.type === "code-builder";

const currentCodeBlocks = isCodeBuilder
  ? step.codeBlocks?.[language] ?? []
  : [];

const builderIsCorrect =
  isCodeBuilder &&
  selectedOrder.length === step?.correctBlockOrder?.length &&
  selectedOrder.every(
    (blockIndex, position) =>
      currentCodeBlocks[blockIndex] ===
      currentCodeBlocks[step.correctBlockOrder![position]]
  );

  const currentOrderingOptions =
    lesson?.orderingOptions?.[language] ??
    step?.options ??
    [];

  const orderingIsCorrect =
    isOrdering &&
    JSON.stringify(selectedOrder) ===
      JSON.stringify(step?.correctOrder);

  const answerIsCorrect =
    isQuiz && selectedAnswer === step?.correctAnswer;

  const acceptedCodeAnswers = isCodeInput
    ? step.acceptedAnswers?.[language] ?? []
    : [];

const codeValidation = isCodeInput
  ? validateCode(codeAnswer, language, acceptedCodeAnswers)
  : null;

const codeIsCorrect =
  isCodeInput && (codeValidation?.correct ?? false);

const isCorrect = isCodeBuilder
  ? builderIsCorrect
  : isOrdering
    ? orderingIsCorrect
    : isQuiz
      ? answerIsCorrect
      : isCodeInput
        ? codeIsCorrect
        : true;

  const canCheck = isCodeBuilder
  ? currentCodeBlocks.length > 0 &&
    selectedOrder.length === currentCodeBlocks.length
  : isOrdering
    ? currentOrderingOptions.length > 0 &&
      selectedOrder.length === currentOrderingOptions.length
    : isQuiz
      ? selectedAnswer !== null
      : isCodeInput
        ? codeAnswer.trim().length > 0
        : false;

function resetAnswer() {
  setSelectedAnswer(null);
  setSelectedOrder([]);

  setCodeDrafts({
    pseudo: "",
    c: "",
    cpp: "",
  });

  setChecked(false);
  setAttempts(0);
  setShowHint(false);
}

  function nextStep() {
    setStepIndex((previous) => previous + 1);
    resetAnswer();
  }

  function exitLesson() {
    resetAnswer();
    setStepIndex(0);
    router.replace("/learn");
  }

  function checkAnswer() {
    if (!canCheck) return;

    setChecked(true);

    if (!isCorrect) {
      setAttempts((previous) => previous + 1);
    }
  }

  function retryAnswer() {
    if (isCodeInput) {
      // Keep the learner's code so they can debug it.
      setChecked(false);
      setShowHint(false);
    } else {
      setSelectedAnswer(null);
      setSelectedOrder([]);
      setChecked(false);
    }
  }

function changeLanguage(nextLanguage: CodeLanguage) {
  if (nextLanguage === language) return;

  setLanguage(nextLanguage);

  if (isOrdering || isCodeInput || isCodeBuilder) {
    setSelectedOrder([]);
    setChecked(false);
    setAttempts(0);
    setShowHint(false);
  }
}

  function renderFeedback(
    correctMessage: string,
    incorrectMessage: string
  ) {
    if (!checked) return null;

    return (
      <View
        style={[
          styles.feedback,
          isCorrect
            ? styles.correctFeedback
            : styles.incorrectFeedback,
        ]}
      >
        <Text style={styles.feedbackTitle}>
          {isCorrect ? "Correct! 🎉" : "Not quite! 💡"}
        </Text>
        <Text style={styles.feedbackText}>
          {isCorrect
            ? step?.explanation ?? correctMessage
            : incorrectMessage}
        </Text>
      </View>
    );
  }

  if (!lesson) {
    return (
      <View style={styles.completeContainer}>
        <Text style={styles.completeTitle}>
          Lesson Not Found
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/learn")}
        >
          <Text style={styles.buttonText}>
            Back to Learning Path
          </Text>
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
          {wasCompletedBefore
            ? `⚡ ${lesson.xp} XP lesson reviewed`
            : `⚡ +${lesson.xp} XP`}
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

  if (!step) return null;

  return (
    <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        scrollEnabled={!isDragging}
    >
      <TouchableOpacity onPress={exitLesson}>
        <Text style={styles.backButton}>
          ← Exit Lesson
        </Text>
      </TouchableOpacity>

      <Text style={styles.chapterLabel}>
        {lesson.world.toUpperCase()} ·{" "}
        {lesson.chapter.toUpperCase()}
      </Text>

      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${progress}%` as `${number}%`,
            },
          ]}
        />
      </View>

      <Text style={styles.stepCounter}>
        Step {stepIndex + 1} of {lesson.steps.length}
      </Text>

      <Text style={styles.title}>{step.title}</Text>

      {/* Language selector */}
      <View style={styles.languageContainer}>
        <Text style={styles.languageLabel}>
          VIEW CODE AS
        </Text>

        <View style={styles.languageToggle}>
          {languages.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={[
                styles.languageOption,
                language === option.value &&
                  styles.activeLanguageOption,
              ]}
              onPress={() => changeLanguage(option.value)}
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
                Tap the instructions below in the
                correct order.
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

          {renderFeedback(
            "Great job putting the steps in order!",
            "The sequence isn't quite right. Think about what must happen first."
          )}
        </View>
      )}

      {/* Multiple-choice exercise */}
      {isQuiz && (
        <View>
          <Text style={styles.question}>
            {step.question}
          </Text>

          {step.options?.map((option, index) => {
            const isSelected =
              selectedAnswer === index;

            const isCorrectOption =
              step.correctAnswer === index;

            return (
              <TouchableOpacity
                key={index}
                disabled={checked}
                style={[
                  styles.option,
                  isSelected && styles.selectedOption,
                  checked &&
                    isCorrect &&
                    isCorrectOption &&
                    styles.correctOption,
                  checked &&
                    !isCorrect &&
                    isSelected &&
                    styles.incorrectOption,
                ]}
                onPress={() => setSelectedAnswer(index)}
              >
                <Text style={styles.optionText}>
                  {option}
                </Text>
              </TouchableOpacity>
            );
          })}

          {renderFeedback(
            "Great job! You got it right.",
            "Review the question and try another option."
          )}
        </View>
      )}

      {/* Code Builder exercise */}
        {isCodeBuilder && (
            <View>
                <Text style={styles.question}>
                 {step.question}
                </Text>

                 <CodeBuilder
                    blocks={currentCodeBlocks}
                    selectedOrder={selectedOrder}
                    onChange={setSelectedOrder}
                    disabled={checked}
                    onDragStateChange={setIsDragging}
                />

                {renderFeedback(
                 "Great job building your program!",
                 "Not quite! Check the order of your code blocks."
                )}
            </View>
        )}


      {/* Code-writing exercise */}
      {isCodeInput && (
        <View>
          <Text style={styles.question}>
            {step.question}
          </Text>

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
                {step.codePrompt?.[language]}
              </Text>
            </ScrollView>
          </View>

          <Text style={styles.orderLabel}>
            Write your code:
          </Text>

          <View style={styles.editorContainer}>
            <View style={styles.editorHeader}>
              <Text style={styles.editorHeaderText}>
                ✦ CODEBLOOM EDITOR
              </Text>
              <Text style={styles.editorHeaderText}>
                {language === "pseudo"
                  ? "PSEUDO"
                  : language === "c"
                    ? "C"
                    : "C++"}
              </Text>
            </View>

            <TextInput
              style={styles.codeInput}
              value={codeAnswer}
              onChangeText={(text) => setCodeAnswer(text)}
              placeholder={
                step.placeholder ??
                "Write your code here..."
              }
              placeholderTextColor="#9A90A5"
              multiline
              numberOfLines={7}
              scrollEnabled
              autoCapitalize="none"
              autoCorrect={false}
              spellCheck={false}
              editable={!checked}
              selectionColor="#9162E4"
            />
          </View>

          <Text style={styles.editorHelp}>
                Write your answer in the editor.
                Formatting and comments are ignored,
                but programming syntax still matters.
         </Text>

          {attempts > 0 && !checked && (
            <TouchableOpacity
              style={styles.hintButton}
              onPress={() =>
                setShowHint((previous) => !previous)
              }
            >
              <Text style={styles.hintButtonText}>
                {showHint
                  ? "Hide hint"
                  : "💡 Need a hint?"}
              </Text>
            </TouchableOpacity>
          )}

          {showHint && !checked && (
            <View style={styles.hintBox}>
              <Text style={styles.feedbackText}>
                {attempts >= 2
                  ? `One accepted example: ${
                      acceptedCodeAnswers[0] ??
                      "Review the instructions."
                    }`
                  : "Check your variable names, operators, punctuation, and whether you need a declaration or assignment."}
              </Text>
            </View>
          )}

          {renderFeedback(
            "Great job writing your own code!",
            codeValidation?.feedback ??
            "Review your solution and try again."
          )}
        </View>
      )}

      {/* Navigation */}
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
            !canCheck && styles.disabledButton,
          ]}
          disabled={!canCheck}
          onPress={checkAnswer}
        >
          <Text style={styles.buttonText}>
            Check Answer
          </Text>
        </TouchableOpacity>
      ) : isCorrect ? (
        <TouchableOpacity
          style={styles.button}
          onPress={nextStep}
        >
          <Text style={styles.buttonText}>
            Continue →
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.retryButton}
          onPress={retryAnswer}
        >
          <Text style={styles.retryButtonText}>
            ↻ Edit & Try Again
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
    padding: 18,
    borderRadius: 16,
    marginTop: 12,
  },
  correctFeedback: {
    backgroundColor: "#E6F8EF",
  },
  incorrectFeedback: {
    backgroundColor: "#FDECEC",
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
  retryButton: {
    backgroundColor: "#FFFFFF",
    borderColor: "#9162E4",
    borderWidth: 2,
    borderRadius: 16,
    padding: 18,
    alignItems: "center",
    marginTop: 30,
  },
  retryButtonText: {
    color: "#9162E4",
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
  editorContainer: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#9162E4",
    borderRadius: 16,
    overflow: "hidden",
  },
  editorHeader: {
    backgroundColor: "#F3EAFF",
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editorHeaderText: {
    color: "#9162E4",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
  },
  codeInput: {
    padding: 18,
    minHeight: 190,
    fontFamily: "monospace",
    fontSize: 15,
    color: "#392653",
    textAlignVertical: "top",
    lineHeight: 24,
  },
  editorHelp: {
    fontSize: 12,
    color: "#847A91",
    marginTop: 10,
    lineHeight: 18,
  },
  hintButton: {
    marginTop: 12,
    padding: 12,
    alignSelf: "flex-start",
  },
  hintButtonText: {
    color: "#9162E4",
    fontWeight: "700",
  },
  hintBox: {
    padding: 16,
    backgroundColor: "#F3EAFF",
    borderRadius: 14,
    marginTop: 8,
  },
});
