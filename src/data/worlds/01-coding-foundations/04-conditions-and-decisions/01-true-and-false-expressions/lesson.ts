import type { Lesson } from "../../../../types";

export const trueAndFalseExpressions: Lesson = {
  "id": "true-and-false-expressions",
  "title": "True and False Expressions",
  "chapter": "Conditions & Decisions",
  "world": "Coding Foundations",
  "xp": 20,
  "steps": [
    {
      "type": "explanation",
      "title": "True and False Expressions",
      "description": "Conditions are expressions that evaluate to true or false. They help programs decide what to do next. For example, age >= 18 checks whether someone is at least 18."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "What does 5 > 10 evaluate to?",
      "options": [
        "True",
        "False",
        "5",
        "10"
      ],
      "correctAnswer": 1,
      "explanation": "Conditions are expressions that evaluate to true or false. They help programs decide what to do next. For example, age >= 18 checks whether someone is at least 18."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "The variables age and isAdult already exist. Store whether age is at least 18 in isAdult.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode",
        "c": "// Write your C code",
        "cpp": "// Write your C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET isAdult = age >= 18",
          "isAdult = age >= 18"
        ],
        "c": [
          "isAdult = age >= 18;"
        ],
        "cpp": [
          "isAdult = age >= 18;"
        ]
      },
      "explanation": "Great work! Your condition is correct."
    },
    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "The variables score and passed already exist. Store whether score is at least 70 in passed.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET passed = score >= 70",
          "passed = score >= 70"
        ],
        "c": [
          "passed = score >= 70;"
        ],
        "cpp": [
          "passed = score >= 70;"
        ]
      },
      "explanation": "You solved the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "SET isAdult = age >= 18",
    "c": "isAdult = age >= 18;",
    "cpp": "isAdult = age >= 18;"
  }
};
