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
import { workingWithUserInput } from "./worlds/01-coding-foundations/02-variables-and-data-types/05-working-with-user-input/lesson";
import { usingVariablesInCalculations } from "./worlds/01-coding-foundations/02-variables-and-data-types/06-using-variables-in-calculations/lesson";
import { variablesChallenge } from "./worlds/01-coding-foundations/02-variables-and-data-types/07-variables-challenge/lesson";
import { arithmeticOperators } from "./worlds/01-coding-foundations/03-operators-and-expressions/01-arithmetic-operators/lesson";
import { comparisonOperators } from "./worlds/01-coding-foundations/03-operators-and-expressions/02-comparison-operators/lesson";
import { logicalOperators } from "./worlds/01-coding-foundations/03-operators-and-expressions/03-logical-operators/lesson";
import { assignmentOperators } from "./worlds/01-coding-foundations/03-operators-and-expressions/04-assignment-operators/lesson";
import { orderOfOperations } from "./worlds/01-coding-foundations/03-operators-and-expressions/05-order-of-operations/lesson";
import { buildingExpressions } from "./worlds/01-coding-foundations/03-operators-and-expressions/06-building-expressions/lesson";
import { operatorsChallenge } from "./worlds/01-coding-foundations/03-operators-and-expressions/07-operators-challenge/lesson";

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
  "working-with-user-input": workingWithUserInput,
  "using-variables-in-calculations": usingVariablesInCalculations,
  "variables-challenge": variablesChallenge,
  [arithmeticOperators.id]: arithmeticOperators,
  [comparisonOperators.id]: comparisonOperators,
  [logicalOperators.id]: logicalOperators,
  [assignmentOperators.id]: assignmentOperators,
  [orderOfOperations.id]: orderOfOperations,
  [buildingExpressions.id]: buildingExpressions,
  [operatorsChallenge.id]: operatorsChallenge,
};


export function getLesson(id: string): Lesson | undefined {
  return lessonRegistry[id];
}