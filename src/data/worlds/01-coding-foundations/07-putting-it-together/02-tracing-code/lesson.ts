import type { Lesson } from "../../../../types";

export const tracingCode: Lesson = {
  "id": "tracing-code",
  "title": "Tracing Code",
  "chapter": "Putting It Together",
  "world": "Coding Foundations",
  "xp": 25,
  "steps": [
    {
      "type": "explanation",
      "title": "Tracing Code",
      "description": "Tracing code means following each instruction and recording how values change. It helps you understand program behavior and find mistakes."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "If x starts at 2 and a loop adds 3 to x twice, what is x afterward?",
      "options": [
        "5",
        "6",
        "8",
        "12"
      ],
      "correctAnswer": 2,
      "explanation": "Tracing code means following each instruction and recording how values change. It helps you understand program behavior and find mistakes."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "The variables x and i already exist. Write a loop that adds 3 to x exactly twice.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode",
        "c": "// Write your C code",
        "cpp": "// Write your C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FOR i = 0 TO 1\nSET x = x + 3\nEND FOR"
        ],
        "c": [
          "for (i = 0; i < 2; i++) {\nx += 3;\n}"
        ],
        "cpp": [
          "for (i = 0; i < 2; i++) {\nx += 3;\n}"
        ]
      },
      "explanation": "Great work!"
    },

{
  type: "code-builder",
  title: "Build a Score Tracker! 🎮",
  question:
    "A player starts with 5 points and earns 3 more points in each of 4 rounds. Arrange the blocks to update and display the score after every round, then display 'Final score:' followed by the total.",
  codeBlocks: {
    pseudo: [
      "DISPLAY score",
      'DISPLAY "Final score:"',
      "END FOR",
      "DISPLAY score",
      "SET score = score + 3",
      "FOR i = 1 TO 4",
      "SET score = 5",
    ],
    c: [
      'printf("%d", score);',
      'printf("Final score: ");',
      "}",
      'printf("%d\\n", score);',
      "score += 3;",
      "for (int i = 1; i <= 4; i++) {",
      "int score = 5;",
    ],
    cpp: [
      "cout << score;",
      'cout << "Final score: ";',
      "}",
      "cout << score << endl;",
      "score += 3;",
      "for (int i = 1; i <= 4; i++) {",
      "int score = 5;",
    ],
  },
  correctBlockOrder: [6, 5, 4, 3, 2, 1, 0],
  explanation:
    "The score starts at 5. Each round adds 3 points, producing 8, 11, 14, and 17. After the loop finishes, the program displays the final score of 17. Tracing each iteration helps you understand exactly how variables change during execution!",
},

    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "The variables i and total already exist. Write a loop that adds the numbers 1 through 4 to total.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FOR i = 1 TO 4\nSET total = total + i\nEND FOR"
        ],
        "c": [
          "for (i = 1; i <= 4; i++) {\ntotal += i;\n}"
        ],
        "cpp": [
          "for (i = 1; i <= 4; i++) {\ntotal += i;\n}"
        ]
      },
      "explanation": "You completed the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "FOR i = 0 TO 1\nSET x = x + 3\nEND FOR",
    "c": "for (i = 0; i < 2; i++) {\nx += 3;\n}",
    "cpp": "for (i = 0; i < 2; i++) {\nx += 3;\n}"
  }
};
