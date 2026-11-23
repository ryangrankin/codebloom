import type { Lesson } from "../../../../types";

export const arithmeticOperators: Lesson = {
  "id": "arithmetic-operators",
  "title": "Arithmetic Operators",
  "chapter": "Operators & Expressions",
  "world": "Coding Foundations",
  "xp": 20,
  "steps": [
    {
      "type": "explanation",
      "title": "Arithmetic Operators",
      "description": "Arithmetic operators let programs calculate values. Use + for addition, - for subtraction, * for multiplication, / for division, and % for the remainder."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "What does 17 % 5 evaluate to?",
      "options": [
        "3",
        "2",
        "12",
        "5"
      ],
      "correctAnswer": 1,
      "explanation": "Arithmetic operators let programs calculate values. Use + for addition, - for subtraction, * for multiplication, / for division, and % for the remainder."
    },
    {
      "type": "code-input",
      "title": "Write the Expression",
      "question": "Write one statement that stores a + b in total. All variables already exist.",
      "codePrompt": {
        "pseudo": "// Write one pseudocode instruction",
        "c": "// Write one C statement",
        "cpp": "// Write one C++ statement"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET total = a + b",
          "total = a + b"
        ],
        "c": [
          "total = a + b;"
        ],
        "cpp": [
          "total = a + b;"
        ]
      },
      "explanation": "You built the expression correctly!"
    },
    {
      "type": "code-input",
      "title": "Practice Again",
      "question": "Write one statement that stores a + b in total. All variables already exist.",
      "codePrompt": {
        "pseudo": "// Write the expression independently",
        "c": "// Write the expression independently",
        "cpp": "// Write the expression independently"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET total = a + b",
          "total = a + b"
        ],
        "c": [
          "total = a + b;"
        ],
        "cpp": [
          "total = a + b;"
        ]
      },
      "explanation": "Nice work! Practice helps build fluency."
    }
  ],
  "codeExamples": {
    "pseudo": "SET total = a + b",
    "c": "int a = 4;\nint b = 6;\nint total = a + b;",
    "cpp": "int a = 4;\nint b = 6;\nint total = a + b;"
  }
};
