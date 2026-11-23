import type { Lesson } from "../../../../types";

export const readingAFullProgram: Lesson = {
  "id": "reading-a-full-program",
  "title": "Reading a Full Program",
  "chapter": "Putting It Together",
  "world": "Coding Foundations",
  "xp": 25,
  "steps": [
    {
      "type": "explanation",
      "title": "Reading a Full Program",
      "description": "A complete program combines declarations, calculations, decisions, loops, and functions. Read code from its starting point and follow the order in which instructions execute."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "What does a return statement do inside a function?",
      "options": [
        "Returns control and possibly a value to the caller",
        "Repeats the function",
        "Creates a loop",
        "Declares every variable"
      ],
      "correctAnswer": 0,
      "explanation": "A complete program combines declarations, calculations, decisions, loops, and functions. Read code from its starting point and follow the order in which instructions execute."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "Write a function named doubleValue that takes an integer x and returns x * 2.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode",
        "c": "// Write your C code",
        "cpp": "// Write your C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION doubleValue(x)\nRETURN x * 2\nEND FUNCTION"
        ],
        "c": [
          "int doubleValue(int x) {\nreturn x * 2;\n}"
        ],
        "cpp": [
          "int doubleValue(int x) {\nreturn x * 2;\n}"
        ]
      },
      "explanation": "Great work!"
    },

{
  type: "code-builder",
  title: "Build a Game Score Checker! 🎮",
  question:
    "A game awards 10 points per round. Create a function that doubles a score, then build a program that plays 3 rounds, doubles the total score, and displays 'You win!' if the final score is at least 50.",
  codeBlocks: {
    pseudo: [
      "END IF",
      'DISPLAY "You win!"',
      "IF score >= 50 THEN",
      "SET score = doubleScore(score)",
      "END FOR",
      "SET score = score + 10",
      "FOR i = 1 TO 3",
      "SET score = 0",
      "END FUNCTION",
      "RETURN x * 2",
      "FUNCTION doubleScore(x)",
    ],
    c: [
      "}",
      'printf("You win!");',
      "if (score >= 50) {",
      "score = doubleScore(score);",
      "}",
      "score += 10;",
      "for (int i = 1; i <= 3; i++) {",
      "int score = 0;",
      "}",
      "return x * 2;",
      "int doubleScore(int x) {",
    ],
    cpp: [
      "}",
      'cout << "You win!";',
      "if (score >= 50) {",
      "score = doubleScore(score);",
      "}",
      "score += 10;",
      "for (int i = 1; i <= 3; i++) {",
      "int score = 0;",
      "}",
      "return x * 2;",
      "int doubleScore(int x) {",
    ],
  },
  correctBlockOrder: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  explanation:
    "The doubleScore function multiplies a value by 2. The program starts with 0 points and adds 10 points during each of 3 rounds, reaching 30. It then calls doubleScore to get 60. Since 60 is at least 50, the program displays 'You win!'. This combines functions, loops, variables, and conditions!",
},

    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "Write TWO functions. Define doubleValue(x) to return x * 2. Then define calculate(x) to return doubleValue(x) + 5.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION doubleValue(x)\nRETURN x * 2\nEND FUNCTION\nFUNCTION calculate(x)\nRETURN doubleValue(x) + 5\nEND FUNCTION"
        ],
        "c": [
          "int doubleValue(int x) {\nreturn x * 2;\n}\nint calculate(int x) {\nreturn doubleValue(x) + 5;\n}"
        ],
        "cpp": [
          "int doubleValue(int x) {\nreturn x * 2;\n}\nint calculate(int x) {\nreturn doubleValue(x) + 5;\n}"
        ]
      },
      "explanation": "You completed the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "FUNCTION doubleValue(x)\nRETURN x * 2\nEND FUNCTION",
    "c": "int doubleValue(int x) {\nreturn x * 2;\n}",
    "cpp": "int doubleValue(int x) {\nreturn x * 2;\n}"
  }
};
