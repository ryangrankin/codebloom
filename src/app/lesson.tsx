
import { useRouter } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function LessonScreen() {
  const router = useRouter();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.backButton}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.chapterLabel}>
        WORLD 01 · CHAPTER 01 · LESSON 01
      </Text>

      <Text style={styles.title}>
        What Is Programming?
      </Text>

      <View style={styles.progressTrack}>
        <View style={styles.progressFill} />
      </View>

      <View style={styles.card}>
        <Text style={styles.emoji}>💻</Text>

        <Text style={styles.heading}>
          Welcome to Coding!
        </Text>

        <Text style={styles.description}>
          Programming is the process of giving a computer
          instructions to complete a task.
        </Text>

        <Text style={styles.description}>
          These instructions are written using programming
          languages, such as C and C++.
        </Text>

        <Text style={styles.description}>
          Before writing code, programmers often break
          problems into smaller steps.
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Continue →
        </Text>
      </TouchableOpacity>
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
    marginBottom: 30,
  },
  chapterLabel: {
    fontSize: 11,
    fontWeight: "800",
    color: "#9162E4",
    letterSpacing: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#332748",
    marginTop: 10,
    marginBottom: 22,
  },
  progressTrack: {
    height: 9,
    backgroundColor: "#E9DDF8",
    borderRadius: 10,
    marginBottom: 30,
    overflow: "hidden",
  },
  progressFill: {
    width: "0%",
    height: "100%",
    backgroundColor: "#9162E4",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 24,
    borderWidth: 1,
    borderColor: "#F0E8F5",
  },
  emoji: {
    fontSize: 42,
    marginBottom: 18,
  },
  heading: {
    fontSize: 23,
    fontWeight: "800",
    color: "#392653",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: "#685779",
    lineHeight: 25,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#9162E4",
    borderRadius: 16,
    padding: 18,
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
});
