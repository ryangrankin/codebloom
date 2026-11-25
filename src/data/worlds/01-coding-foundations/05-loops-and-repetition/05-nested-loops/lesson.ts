import type { Lesson } from "../../../../types";

export const nestedLoops: Lesson = {
  "id": "nested-loops",
  "title": "Nested Loops",
  "chapter": "Loops & Repetition",
  "world": "Coding Foundations",
  "xp": 30,
  "steps": [
    {
      "type": "explanation",
      "title": "Nested Loops",
      "description": "A nested loop is a loop inside another loop. The inner loop runs completely for every repetition of the outer loop. Nested loops are useful for grids, tables, and patterns."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "If an outer loop runs 3 times and its inner loop runs 4 times, how many inner-loop iterations occur?",
      "options": [
        "3",
        "4",
        "7",
        "12"
      ],
      "correctAnswer": 3,
      "explanation": "A nested loop is a loop inside another loop. The inner loop runs completely for every repetition of the outer loop. Nested loops are useful for grids, tables, and patterns."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "The variables row and col already exist. Write nested loops for 2 rows and 3 columns. Leave the inner body empty.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode",
        "c": "// Write your C code",
        "cpp": "// Write your C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FOR row = 0 TO 1\nFOR col = 0 TO 2\nEND FOR\nEND FOR"
        ],
        "c": [
          "for (row = 0; row < 2; row++) {\nfor (col = 0; col < 3; col++) {\n}\n}"
        ],
        "cpp": [
          "for (row = 0; row < 2; row++) {\nfor (col = 0; col < 3; col++) {\n}\n}"
        ]
      },
      "explanation": "Great work! Your loop is correct."
    },

{
  type: "code-builder",
  title: "Build a Pixel Art Grid! 🎨",
  question:
    "A pixel artist wants to create a 3×3 grid of stars. Arrange the code blocks using nested loops to display three stars on each row, for three rows.",
  codeBlocks: {
    pseudo: [
      "END FOR",
      "END FOR",
      'DISPLAY "*" WITHOUT NEWLINE',
      "FOR col = 1 TO 3",
      "DISPLAY NEWLINE",
      "FOR row = 1 TO 3",
    ],
    c: [
      "}",
      "}",
      'printf("*");',
      "for (int col = 1; col <= 3; col++) {",
      'printf("\\n");',
      "for (int row = 1; row <= 3; row++) {",
    ],
    cpp: [
      "}",
      "}",
      'cout << "*";',
      "for (int col = 1; col <= 3; col++) {",
      "cout << endl;",
      "for (int row = 1; row <= 3; row++) {",
    ],
  },
  correctBlockOrder: [5, 3, 2, 1, 4, 0],
  explanation:
    "The outer loop runs 3 times to create 3 rows. For each row, the inner loop prints 3 stars. After the inner loop finishes, the program moves to a new line. This creates a 3×3 grid with 9 stars!",
},

    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "The variables row, col, and count already exist. Write nested loops for 3 rows and 3 columns, increasing count by 1 for each grid cell.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FOR row = 0 TO 2\nFOR col = 0 TO 2\nSET count = count + 1\nEND FOR\nEND FOR"
        ],
        "c": [
          "for (row = 0; row < 3; row++) {\nfor (col = 0; col < 3; col++) {\ncount++;\n}\n}"
        ],
        "cpp": [
          "for (row = 0; row < 3; row++) {\nfor (col = 0; col < 3; col++) {\ncount++;\n}\n}"
        ]
      },
      "explanation": "You solved the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "FOR row = 0 TO 1\nFOR col = 0 TO 2\nEND FOR\nEND FOR",
    "c": "for (row = 0; row < 2; row++) {\nfor (col = 0; col < 3; col++) {\n}\n}",
    "cpp": "for (row = 0; row < 2; row++) {\nfor (col = 0; col < 3; col++) {\n}\n}"
  }
};
