import type { Lesson } from "./types";

import { whatIsProgramming } from "./worlds/01-coding-foundations/01-thinking-like-a-programmer/01-what-is-programming/lesson";

import { algorithmsInEverydayLife } from "./worlds/01-coding-foundations/01-thinking-like-a-programmer/02-algorithms-in-everyday-life/lesson";
import { writingYourFirstPseudocode } from "./worlds/01-coding-foundations/01-thinking-like-a-programmer/03-writing-your-first-pseudocode/lesson";

export const lessonRegistry: Record<string, Lesson> = {
  "what-is-programming": whatIsProgramming,
  "algorithms-in-everyday-life": algorithmsInEverydayLife,
  "writing-your-first-pseudocode": writingYourFirstPseudocode,
};

export function getLesson(id: string): Lesson | undefined {
  return lessonRegistry[id];
}