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
