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
  type: "code-builder",
  title: "Build Your Own Arcade Game! 🕹️",
  question:
    "Build a mini arcade game! Create a function named addBonus that adds 10 points to a score. Start with 0 points, play 3 rounds earning 20 points each, then apply the bonus. If the final score is at least 70, display 'You win!'.",
  codeBlocks: {
    pseudo: [
      "END IF",
      'DISPLAY "You win!"',
      "IF score >= 70 THEN",
      "SET score = addBonus(score)",
      "END FOR",
      "SET score = score + 20",
      "FOR i = 1 TO 3",
      "SET score = 0",
      "END FUNCTION",
      "RETURN score + 10",
      "FUNCTION addBonus(score)",
    ],
    c: [
      "}",
      'printf("You win!");',
      "if (score >= 70) {",
      "score = addBonus(score);",
      "}",
      "score += 20;",
      "for (int i = 1; i <= 3; i++) {",
      "int score = 0;",
      "}",
      "return score + 10;",
      "int addBonus(int score) {",
    ],
    cpp: [
      "}",
      'cout << "You win!";',
      "if (score >= 70) {",
      "score = addBonus(score);",
      "}",
      "score += 20;",
      "for (int i = 1; i <= 3; i++) {",
      "int score = 0;",
      "}",
      "return score + 10;",
      "int addBonus(int score) {",
    ],
  },
  correctBlockOrder: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  explanation:
    "The addBonus function adds 10 points. The game starts at 0 and earns 20 points during each of 3 rounds, reaching 60. Calling addBonus increases the score to 70. Since 70 is at least 70, the game displays 'You win!'. This combines functions, loops, arithmetic, variables, and conditions into one program!",
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
