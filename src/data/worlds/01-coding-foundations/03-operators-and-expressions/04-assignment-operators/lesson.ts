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
      "title": "Apply What You Learned",
      "question": "The variable lives already exists. The player loses one life. Update lives using the -= operator in C or C++.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode solution",
        "c": "// Write your C solution",
        "cpp": "// Write your C++ solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET lives = lives - 1",
          "lives = lives - 1"
        ],
        "c": [
          "lives -= 1;"
        ],
        "cpp": [
          "lives -= 1;"
        ]
      },
      "explanation": "The -= operator subtracts a value from an existing variable."
    }
  ],
  "codeExamples": {
    "pseudo": "SET score = score + 10",
    "c": "int score = 10;\nscore += 10;",
    "cpp": "int score = 10;\nscore += 10;"
  }
};
