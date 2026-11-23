
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.logo}>✿ CodeBloom</Text>
        <Text style={styles.greeting}>Ready to grow your skills?</Text>
        <Text style={styles.subtitle}>
          A little coding every day adds up!
        </Text>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>⚡</Text>
            <Text style={styles.statNumber}>0 XP</Text>
            <Text style={styles.statLabel}>Total XP</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>🔥</Text>
            <Text style={styles.statNumber}>0 days</Text>
            <Text style={styles.statLabel}>Streak</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Continue Learning</Text>

        <View style={styles.lessonCard}>
          <Text style={styles.chapterLabel}>
            WORLD 01 · CHAPTER 01
          </Text>
          <Text style={styles.lessonTitle}>
            Thinking Like a Programmer
          </Text>
          <Text style={styles.lessonDescription}>
            Learn how programmers approach problems and
            build solutions step by step.
          </Text>

          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Learning →</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Your Learning Path</Text>

        <View style={styles.worldCard}>
          <Text style={styles.worldEmoji}>🌱</Text>
          <View style={styles.worldInfo}>
            <Text style={styles.worldTitle}>
              01. Coding Foundations
            </Text>
            <Text style={styles.worldDescription}>
              Pseudocode, variables, loops, and functions
            </Text>
          </View>
        </View>

        <Text style={styles.footer}>
          Every great programmer starts somewhere. ♡
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9FD",
  },
  content: {
    padding: 24,
    paddingBottom: 50,
  },
  logo: {
    fontSize: 26,
    fontWeight: "800",
    color: "#8B5CF6",
    marginBottom: 28,
  },
  greeting: {
    fontSize: 27,
    fontWeight: "800",
    color: "#2D2440",
  },
  subtitle: {
    fontSize: 15,
    color: "#847A91",
    marginTop: 8,
    marginBottom: 28,
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 30,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#F0E8FF",
    borderRadius: 18,
    padding: 18,
    alignItems: "center",
  },
  statEmoji: {
    fontSize: 25,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "800",
    color: "#563B86",
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: "#817095",
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#332748",
    marginBottom: 14,
  },
  lessonCard: {
    backgroundColor: "#EDE1FF",
    padding: 22,
    borderRadius: 22,
    marginBottom: 30,
  },
  chapterLabel: {
    fontSize: 11,
    fontWeight: "800",
    color: "#8B5CF6",
    letterSpacing: 1,
  },
  lessonTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#392653",
    marginTop: 10,
  },
  lessonDescription: {
    fontSize: 14,
    color: "#685779",
    marginTop: 10,
    lineHeight: 21,
  },
  progressTrack: {
    height: 9,
    backgroundColor: "#D9C7F5",
    borderRadius: 10,
    marginTop: 20,
    overflow: "hidden",
  },
  progressFill: {
    width: "0%",
    height: "100%",
    backgroundColor: "#9B70E8",
  },
  button: {
    backgroundColor: "#9162E4",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
  worldCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#F0E8F5",
  },
  worldEmoji: {
    fontSize: 32,
    marginRight: 14,
  },
  worldInfo: {
    flex: 1,
  },
  worldTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#392653",
  },
  worldDescription: {
    fontSize: 12,
    color: "#847A91",
    marginTop: 5,
  },
  footer: {
    textAlign: "center",
    color: "#A294AF",
    fontSize: 12,
    marginTop: 35,
  },
});
