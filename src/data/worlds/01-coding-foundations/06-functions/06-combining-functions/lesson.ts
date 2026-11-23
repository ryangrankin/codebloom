import type { Lesson } from "../../../../types";

export const combiningFunctions: Lesson = {
  "id": "combining-functions",
  "title": "Combining Functions",
  "chapter": "Functions",
  "world": "Coding Foundations",
  "xp": 30,
  "steps": [
    {
      "type": "explanation",
      "title": "Combining Functions",
      "description": "Functions can call other functions. This lets you break a larger problem into smaller pieces. Each function can focus on one job."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "Why combine smaller functions?",
      "options": [
        "To organize and reuse code",
        "To eliminate all return values",
        "To stop using parameters",
        "To make functions impossible to test"
      ],
      "correctAnswer": 0,
      "explanation": "Functions can call other functions. This lets you break a larger problem into smaller pieces. Each function can focus on one job."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "A function named square already exists and takes one integer. Write a function named quadruple that returns square(x) * 4.",
      "codePrompt": {
        "pseudo": "// Write pseudocode",
        "c": "// Write C code",
        "cpp": "// Write C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION quadruple(x)\nRETURN square(x) * 4\nEND FUNCTION"
        ],
        "c": [
          "int quadruple(int x) {\nreturn square(x) * 4;\n}"
        ],
        "cpp": [
          "int quadruple(int x) {\nreturn square(x) * 4;\n}"
        ]
      },
      "explanation": "Great job defining your function!"
    },
    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "A function named add already exists and takes two integers. Write a function named addThree that takes integers a, b, and c, and returns add(add(a, b), c).",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION addThree(a, b, c)\nRETURN add(add(a, b), c)\nEND FUNCTION"
        ],
        "c": [
          "int addThree(int a, int b, int c) {\nreturn add(add(a, b), c);\n}"
        ],
        "cpp": [
          "int addThree(int a, int b, int c) {\nreturn add(add(a, b), c);\n}"
        ]
      },
      "explanation": "You completed the coding challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "FUNCTION quadruple(x)\nRETURN square(x) * 4\nEND FUNCTION",
    "c": "int quadruple(int x) {\nreturn square(x) * 4;\n}",
    "cpp": "int quadruple(int x) {\nreturn square(x) * 4;\n}"
  }
};
