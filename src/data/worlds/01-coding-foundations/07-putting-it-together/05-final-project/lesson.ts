import type { Lesson } from "../../../../types";

export const finalProject: Lesson = {
  "id": "final-project",
  "title": "Final Project",
  "chapter": "Putting It Together",
  "world": "Coding Foundations",
  "xp": 50,
  "steps": [
    {
      "type": "explanation",
      "title": "Final Project",
      "description": "Build a mini-program that combines functions, loops, arithmetic, and conditions. Break the problem into smaller functions and reuse them."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "What is a good first step when building a larger program?",
      "options": [
        "Break the problem into smaller tasks",
        "Write every line without planning",
        "Avoid testing until the end",
        "Put all code in one enormous function"
      ],
      "correctAnswer": 0,
      "explanation": "Build a mini-program that combines functions, loops, arithmetic, and conditions. Break the problem into smaller functions and reuse them."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "Write a function named bonus that takes integer score and returns score + 10.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode",
        "c": "// Write your C code",
        "cpp": "// Write your C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION bonus(score)\nRETURN score + 10\nEND FUNCTION"
        ],
        "c": [
          "int bonus(int score) {\nreturn score + 10;\n}"
        ],
        "cpp": [
          "int bonus(int score) {\nreturn score + 10;\n}"
        ]
      },
      "explanation": "Great work!"
    },
    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "Build TWO functions. First, define bonus(score) to return score + 10. Then define finalScore(score) to return bonus(score) * 2 when score >= 50, otherwise return bonus(score).",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION bonus(score)\nRETURN score + 10\nEND FUNCTION\nFUNCTION finalScore(score)\nIF score >= 50 THEN\nRETURN bonus(score) * 2\nELSE\nRETURN bonus(score)\nEND IF\nEND FUNCTION"
        ],
        "c": [
          "int bonus(int score) {\nreturn score + 10;\n}\nint finalScore(int score) {\nif (score >= 50) {\nreturn bonus(score) * 2;\n} else {\nreturn bonus(score);\n}\n}"
        ],
        "cpp": [
          "int bonus(int score) {\nreturn score + 10;\n}\nint finalScore(int score) {\nif (score >= 50) {\nreturn bonus(score) * 2;\n} else {\nreturn bonus(score);\n}\n}"
        ]
      },
      "explanation": "You completed the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "FUNCTION bonus(score)\nRETURN score + 10\nEND FUNCTION",
    "c": "int bonus(int score) {\nreturn score + 10;\n}",
    "cpp": "int bonus(int score) {\nreturn score + 10;\n}"
  }
};
