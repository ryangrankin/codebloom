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
