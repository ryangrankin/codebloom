import type { Lesson } from "../../../../types";

export const worldMasteryQuiz: Lesson = {
  "id": "world-mastery-quiz",
  "title": "World Mastery Quiz",
  "chapter": "Putting It Together",
  "world": "Coding Foundations",
  "xp": 40,
  "steps": [
    {
      "type": "explanation",
      "title": "World Mastery Quiz",
      "description": "Congratulations on reaching the final lesson of World 1! This challenge brings together variables, operators, conditions, loops, and functions."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "Which programming structure repeats instructions while a condition is true?",
      "options": [
        "A while loop",
        "A variable",
        "A return statement",
        "An assignment"
      ],
      "correctAnswer": 0,
      "explanation": "Congratulations on reaching the final lesson of World 1! This challenge brings together variables, operators, conditions, loops, and functions."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "Write a function named triple that takes integer x and returns x * 3.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode",
        "c": "// Write your C code",
        "cpp": "// Write your C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION triple(x)\nRETURN x * 3\nEND FUNCTION"
        ],
        "c": [
          "int triple(int x) {\nreturn x * 3;\n}"
        ],
        "cpp": [
          "int triple(int x) {\nreturn x * 3;\n}"
        ]
      },
      "explanation": "Great work!"
    },
    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "Final mastery challenge! Write a function named sumToN that takes integer n, uses a loop to add all integers from 1 through n, and returns the total.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION sumToN(n)\nSET total = 0\nFOR i = 1 TO n\nSET total = total + i\nEND FOR\nRETURN total\nEND FUNCTION"
        ],
        "c": [
          "int sumToN(int n) {\nint total = 0;\nfor (int i = 1; i <= n; i++) {\ntotal += i;\n}\nreturn total;\n}"
        ],
        "cpp": [
          "int sumToN(int n) {\nint total = 0;\nfor (int i = 1; i <= n; i++) {\ntotal += i;\n}\nreturn total;\n}"
        ]
      },
      "explanation": "You completed the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "FUNCTION triple(x)\nRETURN x * 3\nEND FUNCTION",
    "c": "int triple(int x) {\nreturn x * 3;\n}",
    "cpp": "int triple(int x) {\nreturn x * 3;\n}"
  }
};
