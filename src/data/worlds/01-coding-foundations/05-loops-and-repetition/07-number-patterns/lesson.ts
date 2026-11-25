import type { Lesson } from "../../../../types";

export const numberPatterns: Lesson = {
  "id": "number-patterns",
  "title": "Number Patterns",
  "chapter": "Loops & Repetition",
  "world": "Coding Foundations",
  "xp": 35,
  "steps": [
    {
      "type": "explanation",
      "title": "Number Patterns",
      "description": "Final challenge! Loops can generate number patterns by combining counters, arithmetic, and repetition. You'll use a loop to calculate a series of values."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "How many values are produced by a loop counting from 1 through 5?",
      "options": [
        "4",
        "5",
        "6",
        "10"
      ],
      "correctAnswer": 1,
      "explanation": "Final challenge! Loops can generate number patterns by combining counters, arithmetic, and repetition. You'll use a loop to calculate a series of values."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "The variables i and result already exist. Write a for loop that sets result to i * i for each value of i from 1 through 5.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode",
        "c": "// Write your C code",
        "cpp": "// Write your C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FOR i = 1 TO 5\nSET result = i * i\nEND FOR"
        ],
        "c": [
          "for (i = 1; i <= 5; i++) {\nresult = i * i;\n}"
        ],
        "cpp": [
          "for (i = 1; i <= 5; i++) {\nresult = i * i;\n}"
        ]
      },
      "explanation": "Great work! Your loop is correct."
    },

{
  type: "code-builder",
  title: "Build a Square Number Calculator! 🔢",
  question:
    "A math game needs to calculate the squares of numbers 1 through 5 and add them together. Arrange the blocks to calculate each square, display it, add it to the running total, and display the final sum.",
  codeBlocks: {
    pseudo: [
      "DISPLAY total",
      "END FOR",
      "SET total = total + square",
      "DISPLAY square",
      "SET square = i * i",
      "FOR i = 1 TO 5",
      "SET total = 0",
    ],
    c: [
      'printf("%d", total);',
      "}",
      "total += square;",
      'printf("%d\\n", square);',
      "int square = i * i;",
      "for (int i = 1; i <= 5; i++) {",
      "int total = 0;",
    ],
    cpp: [
      "cout << total;",
      "}",
      "total += square;",
      "cout << square << endl;",
      "int square = i * i;",
      "for (int i = 1; i <= 5; i++) {",
      "int total = 0;",
    ],
  },
  correctBlockOrder: [6, 5, 4, 3, 2, 1, 0],
  explanation:
    "The loop calculates each square: 1, 4, 9, 16, and 25. Each value is displayed and added to total. After all five repetitions, the program displays the final sum of 55. This combines loop counters, multiplication, and running totals!",
},

    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "Final challenge! The variables i, total, and square already exist. Write a loop from 1 through 5. Each time, calculate square = i * i, then add square to total.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FOR i = 1 TO 5\nSET square = i * i\nSET total = total + square\nEND FOR"
        ],
        "c": [
          "for (i = 1; i <= 5; i++) {\nsquare = i * i;\ntotal += square;\n}"
        ],
        "cpp": [
          "for (i = 1; i <= 5; i++) {\nsquare = i * i;\ntotal += square;\n}"
        ]
      },
      "explanation": "You solved the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "FOR i = 1 TO 5\nSET result = i * i\nEND FOR",
    "c": "for (i = 1; i <= 5; i++) {\nresult = i * i;\n}",
    "cpp": "for (i = 1; i <= 5; i++) {\nresult = i * i;\n}"
  }
};
