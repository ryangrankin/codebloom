import type { Lesson } from "../../../../types";

export const buildingExpressions: Lesson = {
  "id": "building-expressions",
  "title": "Building Expressions",
  "chapter": "Operators & Expressions",
  "world": "Coding Foundations",
  "xp": 25,
  "steps": [
    {
      "type": "explanation",
      "title": "Building Expressions",
      "description": "You can combine variables and operators to build useful expressions. A checkout calculation might multiply price by quantity, then subtract a discount."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "If price = 8, quantity = 3, and discount = 4, what is the total?",
      "options": [
        "20",
        "28",
        "15",
        "24"
      ],
      "correctAnswer": 0,
      "explanation": "You can combine variables and operators to build useful expressions. A checkout calculation might multiply price by quantity, then subtract a discount."
    },
    {
      "type": "code-input",
      "title": "Write the Expression",
      "question": "Set the existing variable total to price times quantity, minus discount.",
      "codePrompt": {
        "pseudo": "// Write one pseudocode instruction",
        "c": "// Write one C statement",
        "cpp": "// Write one C++ statement"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET total = price * quantity - discount",
          "total = price * quantity - discount"
        ],
        "c": [
          "total = price * quantity - discount;"
        ],
        "cpp": [
          "total = price * quantity - discount;"
        ]
      },
      "explanation": "You built the expression correctly!"
    },
    {
      "type": "code-input",
      "title": "Practice Again",
      "question": "Set the existing variable total to price times quantity, minus discount.",
      "codePrompt": {
        "pseudo": "// Write the expression independently",
        "c": "// Write the expression independently",
        "cpp": "// Write the expression independently"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET total = price * quantity - discount",
          "total = price * quantity - discount"
        ],
        "c": [
          "total = price * quantity - discount;"
        ],
        "cpp": [
          "total = price * quantity - discount;"
        ]
      },
      "explanation": "Nice work! Practice helps build fluency."
    }
  ],
  "codeExamples": {
    "pseudo": "SET total = price * quantity - discount",
    "c": "int price = 8;\nint quantity = 3;\nint discount = 4;\nint total = price * quantity - discount;",
    "cpp": "int price = 8;\nint quantity = 3;\nint discount = 4;\nint total = price * quantity - discount;"
  }
};
