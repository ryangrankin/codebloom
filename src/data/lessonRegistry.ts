import type { Lesson } from "./types";

import { whatIsProgramming } from "./worlds/01-coding-foundations/01-thinking-like-a-programmer/01-what-is-programming/lesson";

export const lessonRegistry: Record<string, Lesson> = {
  "what-is-programming": whatIsProgramming,
};

export function getLesson(id: string): Lesson | undefined {
  return lessonRegistry[id];
}