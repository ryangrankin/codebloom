
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getLesson } from "./lessonRegistry";

const PROGRESS_KEY = "@codebloom_completed_lessons";

// Load all completed lesson IDs
export async function getCompletedLessons(): Promise<string[]> {
  try {
    const stored = await AsyncStorage.getItem(PROGRESS_KEY);

    if (!stored) {
      return [];
    }

    const parsed: unknown = JSON.parse(stored);

    if (
      !Array.isArray(parsed) ||
      !parsed.every((id) => typeof id === "string")
    ) {
      return [];
    }

    return [...new Set(parsed)];
  } catch (error) {
    console.error("Error loading lesson progress:", error);
    return [];
  }
}

// Save a completed lesson without duplicates
export async function completeLesson(
  lessonId: string
): Promise<string[]> {
  const lesson = getLesson(lessonId);

  if (!lesson) {
    throw new Error(`Unknown lesson: ${lessonId}`);
  }

  const completed = await getCompletedLessons();

  if (completed.includes(lessonId)) {
    return completed;
  }

  const updated = [...completed, lessonId];

  await AsyncStorage.setItem(
    PROGRESS_KEY,
    JSON.stringify(updated)
  );

  return updated;
}

// Calculate XP from completed lessons
export function calculateXP(completedLessons: string[]): number {
  return [...new Set(completedLessons)].reduce((total, lessonId) => {
    const lesson = getLesson(lessonId);
    return total + (lesson?.xp ?? 0);
  }, 0);
}
