
import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const chapters = [
  {
    title: "Thinking Like a Programmer",
    lessons: [
      "What Is Programming?",
      "Breaking Down a Problem",
      "Writing Your First Pseudocode",
      "Sequencing Instructions",
      "Finding Logical Errors",
      "Plan an Algorithm",
    ],
  },
  {
    title: "Variables & Data Types",
    lessons: [
      "What Is a Variable?",
      "Integers and Decimal Numbers",
      "Characters and Strings",
      "Boolean Values",
      "Updating Variables",
      "Track a Score",
    ],
  },
  {
    title: "Input, Output & Operators",
    lessons: [
      "Displaying Output",
      "Reading User Input",
      "Arithmetic Operators",
      "Comparison Operators",
      "Logical Operators",
      "Simple Calculator",
    ],
  },
  {
    title: "Conditions & Decisions",
    lessons: [
      "True and False Expressions",
      "If Statements",
      "Else and Else If",
      "Nested Conditions",
      "Combining Conditions",
      "Grade Calculator",
    ],
  },
  {
    title: "Loops & Repetition",
    lessons: [
      "Why We Use Loops",
      "For Loops",
      "While Loops",
      "Loop Counters",
      "Nested Loops",
      "Infinite Loops",
      "Number Patterns",
    ],
  },
  {
    title: "Functions",
    lessons: [
      "Why Functions Matter",
      "Defining Functions",
      "Parameters and Arguments",
      "Return Values",
      "Variable Scope",
      "Combining Functions",
      "Build a Mini Program",
    ],
  },
  {
    title: "Putting It Together",
    lessons: [
      "Reading a Full Program",
      "Tracing Code",
      "Planning with Pseudocode",
      "Debugging",
      "Final Project",
      "World Mastery Quiz",
    ],
  },
];

export default function LearnScreen() {
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
          0 of 43 lessons completed
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
                {chapter.lessons.map((lesson, lessonIndex) => (
                  <TouchableOpacity
                    key={lessonIndex}
                    style={styles.lessonRow}
                    onPress={() => {
                      // Lesson navigation comes next.
                    }}
                  >
                    <View style={styles.lessonCircle}>
                      <Text style={styles.lessonNumber}>
                        {lessonIndex + 1}
                      </Text>
                    </View>

                    <Text style={styles.lessonTitle}>
                      {lesson}
                    </Text>

                    <Text style={styles.lessonArrow}>›</Text>
                  </TouchableOpacity>
                ))}
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
});
