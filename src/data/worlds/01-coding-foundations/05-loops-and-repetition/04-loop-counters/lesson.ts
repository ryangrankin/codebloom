import type { Lesson } from "../../../../types";

export const loopCounters: Lesson = {
  "id": "loop-counters",
  "title": "Loop Counters",
  "chapter": "Loops & Repetition",
  "world": "Coding Foundations",
  "xp": 25,
  "steps": [
    {
      "type": "explanation",
      "title": "Loop Counters",
      "description": "Loop counters track how many repetitions have happened. They can count upward, downward, or in larger steps. Counters are also useful for keeping track of totals."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "What does i++ do in C or C++?",
      "options": [
        "Adds 1 to i",
        "Subtracts 1 from i",
        "Sets i to 0",
        "Multiplies i by 2"
      ],
      "correctAnswer": 0,
      "explanation": "Loop counters track how many repetitions have happened. They can count upward, downward, or in larger steps. Counters are also useful for keeping track of totals."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "The variable i already exists. Write a for loop that counts backward from 5 to 1. Leave the body empty.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode",
        "c": "// Write your C code",
        "cpp": "// Write your C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FOR i = 5 DOWNTO 1\nEND FOR"
        ],
        "c": [
          "for (i = 5; i >= 1; i--) {\n}"
        ],
        "cpp": [
          "for (i = 5; i >= 1; i--) {\n}"
        ]
      },
      "explanation": "Great work! Your loop is correct."
    },

{
  type: "code-builder",
  title: "Build a Step Counter! 👟",
  question:
    "A fitness tracker records steps in groups of 2. Arrange the blocks to display 2, 4, 6, 8, and 10, then display 'Goal reached!' after the loop finishes.",
  codeBlocks: {
    pseudo: [
      'DISPLAY "Goal reached!"',
      "END FOR",
      "DISPLAY steps",
      "FOR steps = 2 TO 10 STEP 2",
    ],
    c: [
      'printf("Goal reached!");',
      "}",
      'printf("%d\\n", steps);',
      "for (int steps = 2; steps <= 10; steps += 2) {",
    ],
    cpp: [
      'cout << "Goal reached!";',
      "}",
      "cout << steps << endl;",
      "for (int steps = 2; steps <= 10; steps += 2) {",
    ],
  },
  correctBlockOrder: [3, 2, 1, 0],
  explanation:
    "The loop starts at 2 and increases the counter by 2 each time. It displays 2, 4, 6, 8, and 10. Once the counter reaches 12, the condition becomes false, and the program displays 'Goal reached!' once.",
},

    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "The variable i already exists. Write a for loop that counts 0, 2, 4, 6, and 8. Leave the body empty.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FOR i = 0 TO 8 STEP 2\nEND FOR"
        ],
        "c": [
          "for (i = 0; i <= 8; i += 2) {\n}"
        ],
        "cpp": [
          "for (i = 0; i <= 8; i += 2) {\n}"
        ]
      },
      "explanation": "You solved the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "FOR i = 5 DOWNTO 1\nEND FOR",
    "c": "for (i = 5; i >= 1; i--) {\n}",
    "cpp": "for (i = 5; i >= 1; i--) {\n}"
  }
};
