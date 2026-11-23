import type { Lesson } from "../../../../types";

export const debugging: Lesson = {
  "id": "debugging",
  "title": "Debugging",
  "chapter": "Putting It Together",
  "world": "Coding Foundations",
  "xp": 30,
  "steps": [
    {
      "type": "explanation",
      "title": "Debugging",
      "description": "Debugging means identifying and fixing errors. Syntax errors prevent code from compiling. Logic errors allow code to run but produce incorrect results. Testing helps uncover both."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "A loop is supposed to run five times but runs forever. What should you inspect first?",
      "options": [
        "Whether the loop condition can become false",
        "The app's background color",
        "The function name's length",
        "The number of comments"
      ],
      "correctAnswer": 0,
      "explanation": "Debugging means identifying and fixing errors. Syntax errors prevent code from compiling. Logic errors allow code to run but produce incorrect results. Testing helps uncover both."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "The variable count starts at 0. Fix an infinite loop by writing a while loop that increments count until it reaches 5.",
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
          "while (count < 5) {\ncount++;\n}"
        ],
        "cpp": [
          "while (count < 5) {\ncount++;\n}"
        ]
      },
      "explanation": "Great work!"
    },
    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "Write a function named safeDivide that takes integers a and b. Return 0 if b is 0; otherwise return a / b.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION safeDivide(a, b)\nIF b == 0 THEN\nRETURN 0\nELSE\nRETURN a / b\nEND IF\nEND FUNCTION"
        ],
        "c": [
          "int safeDivide(int a, int b) {\nif (b == 0) {\nreturn 0;\n} else {\nreturn a / b;\n}\n}"
        ],
        "cpp": [
          "int safeDivide(int a, int b) {\nif (b == 0) {\nreturn 0;\n} else {\nreturn a / b;\n}\n}"
        ]
      },
      "explanation": "You completed the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "WHILE count < 5\nSET count = count + 1\nEND WHILE",
    "c": "while (count < 5) {\ncount++;\n}",
    "cpp": "while (count < 5) {\ncount++;\n}"
  }
};
