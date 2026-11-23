import type { Lesson } from "../../../../types";

export const infiniteLoops: Lesson = {
  "id": "infinite-loops",
  "title": "Infinite Loops",
  "chapter": "Loops & Repetition",
  "world": "Coding Foundations",
  "xp": 25,
  "steps": [
    {
      "type": "explanation",
      "title": "Infinite Loops",
      "description": "An infinite loop keeps running because its stopping condition never becomes false. A common mistake is forgetting to update the variable used in the condition."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "Why might while (x < 5) run forever?",
      "options": [
        "Because x is never changed inside the loop",
        "Because x is a number",
        "Because while loops always run forever",
        "Because 5 is too small"
      ],
      "correctAnswer": 0,
      "explanation": "An infinite loop keeps running because its stopping condition never becomes false. A common mistake is forgetting to update the variable used in the condition."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "The variable x already exists and starts at 0. Write a while loop that increments x until x reaches 5.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode",
        "c": "// Write your C code",
        "cpp": "// Write your C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "WHILE x < 5\nSET x = x + 1\nEND WHILE"
        ],
        "c": [
          "while (x < 5) {\nx++;\n}"
        ],
        "cpp": [
          "while (x < 5) {\nx++;\n}"
        ]
      },
      "explanation": "Great work! Your loop is correct."
    },
    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "The variable energy already exists and starts at 10. Write a while loop that decreases energy by 2 while energy > 0.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "WHILE energy > 0\nSET energy = energy - 2\nEND WHILE"
        ],
        "c": [
          "while (energy > 0) {\nenergy -= 2;\n}"
        ],
        "cpp": [
          "while (energy > 0) {\nenergy -= 2;\n}"
        ]
      },
      "explanation": "You solved the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "WHILE x < 5\nSET x = x + 1\nEND WHILE",
    "c": "while (x < 5) {\nx++;\n}",
    "cpp": "while (x < 5) {\nx++;\n}"
  }
};
