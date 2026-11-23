import type { Lesson } from "../../../../types";

export const assignmentOperators: Lesson = {
  "id": "assignment-operators",
  "title": "Assignment Operators",
  "chapter": "Operators & Expressions",
  "world": "Coding Foundations",
  "xp": 20,
  "steps": [
    {
      "type": "explanation",
      "title": "Assignment Operators",
      "description": "Assignment operators update variables. In C and C++, += adds to an existing value, -= subtracts, *= multiplies, and /= divides. For example, score += 5 means score = score + 5."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "What is score after int score = 10; score += 5;?",
      "options": [
        "5",
        "10",
        "15",
        "50"
      ],
      "correctAnswer": 2,
      "explanation": "Assignment operators update variables. In C and C++, += adds to an existing value, -= subtracts, *= multiplies, and /= divides. For example, score += 5 means score = score + 5."
    },
    {
      "type": "code-input",
      "title": "Write the Expression",
      "question": "Increase the existing variable score by 10 using an assignment operator.",
      "codePrompt": {
        "pseudo": "// Write one pseudocode instruction",
        "c": "// Write one C statement",
        "cpp": "// Write one C++ statement"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET score = score + 10",
          "score = score + 10"
        ],
        "c": [
          "score += 10;"
        ],
        "cpp": [
          "score += 10;"
        ]
      },
      "explanation": "You built the expression correctly!"
    },
    {
      "type": "code-input",
      "title": "Practice Again",
      "question": "Increase the existing variable score by 10 using an assignment operator.",
      "codePrompt": {
        "pseudo": "// Write the expression independently",
        "c": "// Write the expression independently",
        "cpp": "// Write the expression independently"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET score = score + 10",
          "score = score + 10"
        ],
        "c": [
          "score += 10;"
        ],
        "cpp": [
          "score += 10;"
        ]
      },
      "explanation": "Nice work! Practice helps build fluency."
    }
  ],
  "codeExamples": {
    "pseudo": "SET score = score + 10",
    "c": "int score = 10;\nscore += 10;",
    "cpp": "int score = 10;\nscore += 10;"
  }
};
