import type { Lesson } from "../../../../types";

export const orderOfOperations: Lesson = {
  "id": "order-of-operations",
  "title": "Order of Operations",
  "chapter": "Operators & Expressions",
  "world": "Coding Foundations",
  "xp": 20,
  "steps": [
    {
      "type": "explanation",
      "title": "Order of Operations",
      "description": "Operators follow precedence rules. Multiplication and division happen before addition and subtraction. Parentheses let you control the order. For example, (2 + 3) * 4 evaluates to 20."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "What is 2 + 3 * 4?",
      "options": [
        "20",
        "14",
        "24",
        "9"
      ],
      "correctAnswer": 1,
      "explanation": "Operators follow precedence rules. Multiplication and division happen before addition and subtraction. Parentheses let you control the order. For example, (2 + 3) * 4 evaluates to 20."
    },
    {
      "type": "code-input",
      "title": "Write the Expression",
      "question": "Set the existing variable result to the sum of a and b, multiplied by c. Use parentheses.",
      "codePrompt": {
        "pseudo": "// Write one pseudocode instruction",
        "c": "// Write one C statement",
        "cpp": "// Write one C++ statement"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET result = (a + b) * c",
          "result = (a + b) * c"
        ],
        "c": [
          "result = (a + b) * c;"
        ],
        "cpp": [
          "result = (a + b) * c;"
        ]
      },
      "explanation": "You built the expression correctly!"
    },
    {
      "type": "code-input",
      "title": "Apply What You Learned",
      "question": "The variables subtotal, tax, and total already exist. Set total to subtotal multiplied by (1 + tax). Use parentheses.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode solution",
        "c": "// Write your C solution",
        "cpp": "// Write your C++ solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET total = subtotal * (1 + tax)",
          "total = subtotal * (1 + tax)"
        ],
        "c": [
          "total = subtotal * (1 + tax);"
        ],
        "cpp": [
          "total = subtotal * (1 + tax);"
        ]
      },
      "explanation": "Parentheses ensure the tax multiplier is calculated before multiplication."
    }
  ],
  "codeExamples": {
    "pseudo": "SET result = (a + b) * c",
    "c": "int a = 2;\nint b = 3;\nint c = 4;\nint result = (a + b) * c;",
    "cpp": "int a = 2;\nint b = 3;\nint c = 4;\nint result = (a + b) * c;"
  }
};
