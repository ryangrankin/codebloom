import type { Lesson } from "../../../../types";

export const combiningFunctions: Lesson = {
  "id": "combining-functions",
  "title": "Combining Functions",
  "chapter": "Functions",
  "world": "Coding Foundations",
  "xp": 30,
  "steps": [
    {
      "type": "explanation",
      "title": "Combining Functions",
      "description": "Functions can call other functions. This lets you break a larger problem into smaller pieces. Each function can focus on one job."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "Why combine smaller functions?",
      "options": [
        "To organize and reuse code",
        "To eliminate all return values",
        "To stop using parameters",
        "To make functions impossible to test"
      ],
      "correctAnswer": 0,
      "explanation": "Functions can call other functions. This lets you break a larger problem into smaller pieces. Each function can focus on one job."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "A function named square already exists and takes one integer. Write a function named quadruple that returns square(x) * 4.",
      "codePrompt": {
        "pseudo": "// Write pseudocode",
        "c": "// Write C code",
        "cpp": "// Write C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION quadruple(x)\nRETURN square(x) * 4\nEND FUNCTION"
        ],
        "c": [
          "int quadruple(int x) {\nreturn square(x) * 4;\n}"
        ],
        "cpp": [
          "int quadruple(int x) {\nreturn square(x) * 4;\n}"
        ]
      },
      "explanation": "Great job defining your function!"
    },

{
  type: "code-builder",
  title: "Build a Power-Up Calculator! ⚡",
  question:
    "A video game has two power-ups. The first doubles a player's score. The second calls the doubling function and adds 10 bonus points. Arrange the blocks to define both functions, then calculate and display the powered-up score for a player with 50 points.",
  codeBlocks: {
    pseudo: [
      "DISPLAY powerUp(50)",
      "END FUNCTION",
      "RETURN doubleScore(score) + 10",
      "FUNCTION powerUp(score)",
      "END FUNCTION",
      "RETURN score * 2",
      "FUNCTION doubleScore(score)",
    ],
    c: [
      'printf("%d", powerUp(50));',
      "}",
      "return doubleScore(score) + 10;",
      "int powerUp(int score) {",
      "}",
      "return score * 2;",
      "int doubleScore(int score) {",
    ],
    cpp: [
      "cout << powerUp(50);",
      "}",
      "return doubleScore(score) + 10;",
      "int powerUp(int score) {",
      "}",
      "return score * 2;",
      "int doubleScore(int score) {",
    ],
  },
  correctBlockOrder: [6, 5, 4, 3, 2, 1, 0],
  explanation:
    "The doubleScore function multiplies the score by 2. The powerUp function calls doubleScore and adds 10 bonus points. When powerUp(50) runs, doubleScore(50) returns 100, then powerUp returns 110. Combining functions lets each function handle one part of a larger problem!",
},

    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "A function named add already exists and takes two integers. Write a function named addThree that takes integers a, b, and c, and returns add(add(a, b), c).",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION addThree(a, b, c)\nRETURN add(add(a, b), c)\nEND FUNCTION"
        ],
        "c": [
          "int addThree(int a, int b, int c) {\nreturn add(add(a, b), c);\n}"
        ],
        "cpp": [
          "int addThree(int a, int b, int c) {\nreturn add(add(a, b), c);\n}"
        ]
      },
      "explanation": "You completed the coding challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "FUNCTION quadruple(x)\nRETURN square(x) * 4\nEND FUNCTION",
    "c": "int quadruple(int x) {\nreturn square(x) * 4;\n}",
    "cpp": "int quadruple(int x) {\nreturn square(x) * 4;\n}"
  }
};
