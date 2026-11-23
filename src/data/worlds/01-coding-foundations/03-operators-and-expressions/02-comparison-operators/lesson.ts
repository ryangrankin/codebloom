import type { Lesson } from "../../../../types";

export const comparisonOperators: Lesson = {
  "id": "comparison-operators",
  "title": "Comparison Operators",
  "chapter": "Operators & Expressions",
  "world": "Coding Foundations",
  "xp": 20,
  "steps": [
    {
      "type": "explanation",
      "title": "Comparison Operators",
      "description": "Comparison operators check relationships between values. In C and C++, == checks equality, != checks inequality, and <, >, <=, >= compare magnitudes. Comparisons evaluate to true or false."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "Which operator checks whether two values are equal in C or C++?",
      "options": [
        "=",
        "==",
        "!=",
        ">"
      ],
      "correctAnswer": 1,
      "explanation": "Comparison operators check relationships between values. In C and C++, == checks equality, != checks inequality, and <, >, <=, >= compare magnitudes. Comparisons evaluate to true or false."
    },
    {
      "type": "code-input",
      "title": "Write the Expression",
      "question": "Store whether age is at least 18 in the existing variable eligible. Both variables already exist.",
      "codePrompt": {
        "pseudo": "// Write one pseudocode instruction",
        "c": "// Write one C statement",
        "cpp": "// Write one C++ statement"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET eligible = age >= 18",
          "eligible = age >= 18"
        ],
        "c": [
          "eligible = age >= 18;",
          "eligible = (age >= 18);"
        ],
        "cpp": [
          "eligible = age >= 18;",
          "eligible = (age >= 18);"
        ]
      },
      "explanation": "You built the expression correctly!"
    },
    {
      "type": "code-input",
      "title": "Practice Again",
      "question": "Store whether age is at least 18 in the existing variable eligible. Both variables already exist.",
      "codePrompt": {
        "pseudo": "// Write the expression independently",
        "c": "// Write the expression independently",
        "cpp": "// Write the expression independently"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET eligible = age >= 18",
          "eligible = age >= 18"
        ],
        "c": [
          "eligible = age >= 18;",
          "eligible = (age >= 18);"
        ],
        "cpp": [
          "eligible = age >= 18;",
          "eligible = (age >= 18);"
        ]
      },
      "explanation": "Nice work! Practice helps build fluency."
    }
  ],
  "codeExamples": {
    "pseudo": "SET eligible = age >= 18",
    "c": "int age = 20;\nint eligible = age >= 18;",
    "cpp": "int age = 20;\nint eligible = age >= 18;"
  }
};
