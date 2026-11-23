import type { Lesson } from "../../../../types";

export const whileLoops: Lesson = {
  "id": "while-loops",
  "title": "While Loops",
  "chapter": "Loops & Repetition",
  "world": "Coding Foundations",
  "xp": 25,
  "steps": [
    {
      "type": "explanation",
      "title": "While Loops",
      "description": "A while loop repeats as long as its condition is true. The loop body should usually change something that eventually makes the condition false."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "When does a while loop stop?",
      "options": [
        "After one repetition",
        "When its condition becomes false",
        "Only when the app closes",
        "Whenever a variable exists"
      ],
      "correctAnswer": 1,
      "explanation": "A while loop repeats as long as its condition is true. The loop body should usually change something that eventually makes the condition false."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "The variable count already exists and starts at 0. Write a while loop that increases count by 1 until it reaches 5.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode",
        "c": "// Write your C code",
        "cpp": "// Write your C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "WHILE count < 5\nSET count = count + 1\nEND WHILE"
        ],
        "c": [
          "while (count < 5) {\ncount++;\n}",
          "while (count < 5) {\ncount += 1;\n}"
        ],
        "cpp": [
          "while (count < 5) {\ncount++;\n}",
          "while (count < 5) {\ncount += 1;\n}"
        ]
      },
      "explanation": "Great work! Your loop is correct."
    },
    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "The variable lives already exists and starts at 3. Write a while loop that decreases lives by 1 while lives > 0.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "WHILE lives > 0\nSET lives = lives - 1\nEND WHILE"
        ],
        "c": [
          "while (lives > 0) {\nlives--;\n}",
          "while (lives > 0) {\nlives -= 1;\n}"
        ],
        "cpp": [
          "while (lives > 0) {\nlives--;\n}",
          "while (lives > 0) {\nlives -= 1;\n}"
        ]
      },
      "explanation": "You solved the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "WHILE count < 5\nSET count = count + 1\nEND WHILE",
    "c": "while (count < 5) {\ncount++;\n}",
    "cpp": "while (count < 5) {\ncount++;\n}"
  }
};
