import type { Lesson } from "./types";

import { whatIsProgramming } from "./worlds/01-coding-foundations/01-thinking-like-a-programmer/01-what-is-programming/lesson";

import { algorithmsInEverydayLife } from "./worlds/01-coding-foundations/01-thinking-like-a-programmer/02-algorithms-in-everyday-life/lesson";
import { writingYourFirstPseudocode } from "./worlds/01-coding-foundations/01-thinking-like-a-programmer/03-writing-your-first-pseudocode/lesson";
import { sequencingInstructions } from "./worlds/01-coding-foundations/01-thinking-like-a-programmer/04-sequencing-instructions/lesson";
import { findingLogicalErrors } from "./worlds/01-coding-foundations/01-thinking-like-a-programmer/05-finding-logical-errors/lesson";
import { planAnAlgorithm } from "./worlds/01-coding-foundations/01-thinking-like-a-programmer/06-plan-an-algorithm/lesson";
import { whatIsAVariable } from "./worlds/01-coding-foundations/02-variables-and-data-types/01-what-is-a-variable/lesson";
import { creatingVariables } from "./worlds/01-coding-foundations/02-variables-and-data-types/02-creating-variables/lesson";
import { numbersAndText } from "./worlds/01-coding-foundations/02-variables-and-data-types/03-numbers-and-text/lesson";
import { changingVariableValues } from "./worlds/01-coding-foundations/02-variables-and-data-types/04-changing-variable-values/lesson";



export const lessonRegistry: Record<string, Lesson> = {
  "what-is-programming": whatIsProgramming,
  "algorithms-in-everyday-life": algorithmsInEverydayLife,
  "writing-your-first-pseudocode": writingYourFirstPseudocode,
  "sequencing-instructions": sequencingInstructions,
  "finding-logical-errors": findingLogicalErrors,
  "plan-an-algorithm": planAnAlgorithm,
  "what-is-a-variable": whatIsAVariable,
  "creating-variables": creatingVariables,
  "numbers-and-text": numbersAndText,
  "changing-variable-values": changingVariableValues,
};


export function getLesson(id: string): Lesson | undefined {
  return lessonRegistry[id];
}