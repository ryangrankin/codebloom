
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { getLesson } from "../data/lessonRegistry";

const chapters = [
  {
    title: "Thinking Like a Programmer",
    lessons: [
      { id: "what-is-programming", title: "What Is Programming?" },
      { id: "algorithms-in-everyday-life", title: "Algorithms in Everyday Life" },
      { id: "writing-your-first-pseudocode", title: "Writing Your First Pseudocode" },
      { id: "sequencing-instructions", title: "Sequencing Instructions" },
      { id: "finding-logical-errors", title: "Finding Logical Errors" },
      { id: "plan-an-algorithm", title: "Plan an Algorithm" },
    ],
  },
  {
    title: "Variables & Data Types",
    lessons: [
      { id: "what-is-a-variable", title: "What Is a Variable?" },
      { id: "integers-and-decimal-numbers", title: "Integers and Decimal Numbers" },
      { id: "characters-and-strings", title: "Characters and Strings" },
      { id: "boolean-values", title: "Boolean Values" },
      { id: "updating-variables", title: "Updating Variables" },
      { id: "track-a-score", title: "Track a Score" },
    ],
  },
  {
    title: "Input, Output & Operators",
    lessons: [
      { id: "displaying-output", title: "Displaying Output" },
      { id: "reading-user-input", title: "Reading User Input" },
      { id: "arithmetic-operators", title: "Arithmetic Operators" },
      { id: "comparison-operators", title: "Comparison Operators" },
      { id: "logical-operators", title: "Logical Operators" },
      { id: "simple-calculator", title: "Simple Calculator" },
    ],
  },
  {
    title: "Conditions & Decisions",
    lessons: [
      { id: "true-and-false-expressions", title: "True and False Expressions" },
      { id: "if-statements", title: "If Statements" },
      { id: "else-and-else-if", title: "Else and Else If" },
      { id: "nested-conditions", title: "Nested Conditions" },
      { id: "combining-conditions", title: "Combining Conditions" },
      { id: "grade-calculator", title: "Grade Calculator" },
    ],
  },
  {
    title: "Loops & Repetition",
    lessons: [
      { id: "why-we-use-loops", title: "Why We Use Loops" },
      { id: "for-loops", title: "For Loops" },
      { id: "while-loops", title: "While Loops" },
      { id: "loop-counters", title: "Loop Counters" },
      { id: "nested-loops", title: "Nested Loops" },
      { id: "infinite-loops", title: "Infinite Loops" },
      { id: "number-patterns", title: "Number Patterns" },
    ],
  },
  {
    title: "Functions",
    lessons: [
      { id: "why-functions-matter", title: "Why Functions Matter" },
      { id: "defining-functions", title: "Defining Functions" },
      { id: "parameters-and-arguments", title: "Parameters and Arguments" },
      { id: "return-values", title: "Return Values" },
      { id: "variable-scope", title: "Variable Scope" },
      { id: "combining-functions", title: "Combining Functions" },
      { id: "build-a-mini-program", title: "Build a Mini Program" },
    ],
  },
  {
    title: "Putting It Together",
    lessons: [
      { id: "reading-a-full-program", title: "Reading a Full Program" },
      { id: "tracing-code", title: "Tracing Code" },
      { id: "planning-with-pseudocode", title: "Planning with Pseudocode" },
      { id: "debugging", title: "Debugging" },
      { id: "final-project", title: "Final Project" },
      { id: "world-mastery-quiz", title: "World Mastery Quiz" },
    ],
  },
];

const totalLessons = chapters.reduce(
  (total, chapter) => total + chapter.lessons.length,
  0
);

export default function LearnScreen() {
  const router = useRouter();

  const [expandedChapter, setExpandedChapter] =
    useState<number | null>(0);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.worldLabel}>WORLD 01</Text>

      <Text style={styles.title}>🌱 Coding Foundations</Text>

      <Text style={styles.subtitle}>
        Build the skills to think like a programmer.
      </Text>

      <View style={styles.progressCard}>
        <Text style={styles.progressTitle}>Your Progress</Text>

        <Text style={styles.progressText}>
          0 of {totalLessons} lessons completed
        </Text>

        <View style={styles.progressTrack}>
          <View style={styles.progressFill} />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Chapters</Text>

      {chapters.map((chapter, chapterIndex) => {
        const isExpanded = expandedChapter === chapterIndex;

        return (
          <View key={chapterIndex} style={styles.chapterCard}>
            <TouchableOpacity
              style={styles.chapterHeader}
              onPress={() =>
                setExpandedChapter(
                  isExpanded ? null : chapterIndex
                )
              }
            >
              <View style={styles.chapterNumber}>
                <Text style={styles.chapterNumberText}>
                  {chapterIndex + 1}
                </Text>
              </View>

              <View style={styles.chapterInfo}>
                <Text style={styles.chapterTitle}>
                  {chapter.title}
                </Text>

                <Text style={styles.chapterSubtitle}>
                  {chapter.lessons.length} lessons
                </Text>
              </View>

              <Text style={styles.arrow}>
                {isExpanded ? "⌃" : "⌄"}
              </Text>
            </TouchableOpacity>

            {isExpanded && (
              <View style={styles.lessonList}>
                {chapter.lessons.map((lesson, lessonIndex) => {
                  const isAvailable = !!getLesson(lesson.id);

                  return (
                    <TouchableOpacity
                      key={lesson.id}
                      style={[
                        styles.lessonRow,
                        !isAvailable && styles.lockedLessonRow,
                      ]}
                      disabled={!isAvailable}
                      accessibilityRole="button"
                      accessibilityState={{
                        disabled: !isAvailable,
                      }}
                      onPress={() => {
                        router.push({
                          pathname: "/lesson",
                          params: { id: lesson.id },
                        });
                      }}
                    >
                      <View
                        style={[
                          styles.lessonCircle,
                          !isAvailable && styles.lockedCircle,
                        ]}
                      >
                        <Text
                          style={[
                            styles.lessonNumber,
                            !isAvailable && styles.lockedNumber,
                          ]}
                        >
                          {lessonIndex + 1}
                        </Text>
                      </View>

                      <Text
                        style={[
                          styles.lessonTitle,
                          !isAvailable && styles.lockedTitle,
                        ]}
                      >
                        {lesson.title}
                      </Text>

                      <Text
                        style={[
                          styles.lessonArrow,
                          !isAvailable && styles.lockedArrow,
                        ]}
                      >
                        {isAvailable ? "›" : "🔒"}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9FD",
  },
  content: {
    padding: 22,
    paddingTop: 65,
    paddingBottom: 60,
  },
  worldLabel: {
    fontSize: 12,
    fontWeight: "800",
    color: "#9162E4",
    letterSpacing: 1.5,
  },
  title: {
    fontSize: 27,
    fontWeight: "800",
    color: "#332748",
    marginTop: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#847A91",
    marginTop: 8,
    marginBottom: 24,
  },
  progressCard: {
    backgroundColor: "#EDE1FF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 28,
  },
  progressTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#392653",
  },
  progressText: {
    fontSize: 13,
    color: "#685779",
    marginTop: 6,
  },
  progressTrack: {
    height: 9,
    backgroundColor: "#D9C7F5",
    borderRadius: 10,
    marginTop: 16,
    overflow: "hidden",
  },
  progressFill: {
    width: "0%",
    height: "100%",
    backgroundColor: "#9162E4",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#332748",
    marginBottom: 14,
  },
  chapterCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#F0E8F5",
    overflow: "hidden",
  },
  chapterHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  chapterNumber: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#EDE1FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  chapterNumberText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#9162E4",
  },
  chapterInfo: {
    flex: 1,
  },
  chapterTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#392653",
  },
  chapterSubtitle: {
    fontSize: 12,
    color: "#847A91",
    marginTop: 4,
  },
  arrow: {
    fontSize: 24,
    color: "#9162E4",
  },
  lessonList: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  lessonRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    borderTopWidth: 1,
    borderTopColor: "#F3EDF8",
  },
  lessonCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#F5EDFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  lessonNumber: {
    color: "#9162E4",
    fontWeight: "700",
  },
  lessonTitle: {
    flex: 1,
    fontSize: 14,
    color: "#392653",
  },
  lessonArrow: {
    fontSize: 24,
    color: "#B49AD9",
  },

  // Unfinished lesson styling
  lockedLessonRow: {
    opacity: 0.65,
  },
  lockedCircle: {
    backgroundColor: "#F1EEF4",
  },
  lockedNumber: {
    color: "#A8A0AF",
  },
  lockedTitle: {
    color: "#A8A0AF",
  },
  lockedArrow: {
    fontSize: 15,
    color: "#A8A0AF",
  },
});
