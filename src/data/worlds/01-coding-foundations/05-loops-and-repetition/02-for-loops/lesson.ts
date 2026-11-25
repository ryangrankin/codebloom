import type { Lesson } from "../../../../types";

export const forLoops: Lesson = {
  "id": "for-loops",
  "title": "For Loops",
  "chapter": "Loops & Repetition",
  "world": "Coding Foundations",
  "xp": 25,
  "steps": [
    {
      "type": "explanation",
      "title": "For Loops",
      "description": "A for loop is useful when you know how many times something should repeat. In C and C++, it includes initialization, a condition, and an update: for (i = 0; i < 5; i++)."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "How many times does for (i = 0; i < 4; i++) run?",
      "options": [
        "3",
        "4",
        "5",
        "Forever"
      ],
      "correctAnswer": 1,
      "explanation": "A for loop is useful when you know how many times something should repeat. In C and C++, it includes initialization, a condition, and an update: for (i = 0; i < 5; i++)."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "The variable i already exists. Write a for loop that counts from 1 through 5. The loop body can be empty.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode",
        "c": "// Write your C code",
        "cpp": "// Write your C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FOR i = 1 TO 5\nEND FOR"
        ],
        "c": [
          "for (i = 1; i <= 5; i++) {\n}"
        ],
        "cpp": [
          "for (i = 1; i <= 5; i++) {\n}"
        ]
      },
      "explanation": "Great work! Your loop is correct."
    },

{
  type: "code-builder",
  title: "Build a Game Score Calculator! 🎮",
  question:
    "A player completes 5 rounds of a game. In round 1 they earn 10 points, round 2 earns 20, and so on. Arrange the blocks to use a for loop to calculate and display the total score.",
  codeBlocks: {
    pseudo: [
      "DISPLAY total",
      "END FOR",
      "SET total = total + i * 10",
      "FOR i = 1 TO 5",
      "SET total = 0",
    ],
    c: [
      'printf("%d", total);',
      "}",
      "total += i * 10;",
      "for (int i = 1; i <= 5; i++) {",
      "int total = 0;",
    ],
    cpp: [
      "cout << total;",
      "}",
      "total += i * 10;",
      "for (int i = 1; i <= 5; i++) {",
      "int total = 0;",
    ],
  },
  correctBlockOrder: [4, 3, 2, 1, 0],
  explanation:
    "The loop runs 5 times, adding 10, 20, 30, 40, and 50 points. The total is 150! Instead of writing five separate additions, you used a loop to repeat the calculation.",
},

    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "The variables i and total already exist. Write a for loop that adds the numbers 1 through 5 to total.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FOR i = 1 TO 5\nSET total = total + i\nEND FOR"
        ],
        "c": [
          "for (i = 1; i <= 5; i++) {\ntotal += i;\n}",
          "for (i = 1; i <= 5; i++) {\ntotal = total + i;\n}"
        ],
        "cpp": [
          "for (i = 1; i <= 5; i++) {\ntotal += i;\n}",
          "for (i = 1; i <= 5; i++) {\ntotal = total + i;\n}"
        ]
      },
      "explanation": "You solved the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "FOR i = 1 TO 5\nEND FOR",
    "c": "for (i = 1; i <= 5; i++) {\n}",
    "cpp": "for (i = 1; i <= 5; i++) {\n}"
  }
};
