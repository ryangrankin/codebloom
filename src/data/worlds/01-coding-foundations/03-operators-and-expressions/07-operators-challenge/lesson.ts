import type { Lesson } from "../../../../types";

export const operatorsChallenge: Lesson = {
  "id": "operators-challenge",
  "title": "Operators Challenge",
  "chapter": "Operators & Expressions",
  "world": "Coding Foundations",
  "xp": 30,
  "steps": [
    {
      "type": "explanation",
      "title": "Operators Challenge",
      "description": "Final challenge! A game awards points for collecting coins and completing levels. Calculate a player's total score using arithmetic expressions."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "If coins = 5, levels = 2, and each level is worth 10 points, what is the total score?",
      "options": [
        "7",
        "20",
        "25",
        "50"
      ],
      "correctAnswer": 2,
      "explanation": "Final challenge! A game awards points for collecting coins and completing levels. Calculate a player's total score using arithmetic expressions."
    },
    {
      "type": "code-input",
      "title": "Write the Expression",
      "question": "Store coins + levels * 10 in the existing variable score.",
      "codePrompt": {
        "pseudo": "// Write one pseudocode instruction",
        "c": "// Write one C statement",
        "cpp": "// Write one C++ statement"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET score = coins + levels * 10",
          "score = coins + levels * 10"
        ],
        "c": [
          "score = coins + levels * 10;"
        ],
        "cpp": [
          "score = coins + levels * 10;"
        ]
      },
      "explanation": "You built the expression correctly!"
    },
    {
      "type": "code-input",
      "title": "Build a Two-Step Solution",
      "question": "Final challenge! The variables coins, levels, score, and bonusScore already exist. Write TWO instructions: first calculate score as coins + levels * 10, then add 50 to score and store the result in bonusScore.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode solution",
        "c": "// Write your C solution",
        "cpp": "// Write your C++ solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET score = coins + levels * 10\nSET bonusScore = score + 50",
          "score = coins + levels * 10\nbonusScore = score + 50"
        ],
        "c": [
          "score = coins + levels * 10;\nbonusScore = score + 50;"
        ],
        "cpp": [
          "score = coins + levels * 10;\nbonusScore = score + 50;"
        ]
      },
      "explanation": "You combined arithmetic operators and used the result of one calculation in another!"
    }
  ],
  "codeExamples": {
    "pseudo": "SET score = coins + levels * 10",
    "c": "int coins = 5;\nint levels = 2;\nint score = coins + levels * 10;",
    "cpp": "int coins = 5;\nint levels = 2;\nint score = coins + levels * 10;"
  }
};
