import type { Lesson } from "../../../../types";

export const buildAMiniProgram: Lesson = {
  "id": "build-a-mini-program",
  "title": "Build a Mini Program",
  "chapter": "Functions",
  "world": "Coding Foundations",
  "xp": 40,
  "steps": [
    {
      "type": "explanation",
      "title": "Build a Mini Program",
      "description": "Final challenge! Build a small program by defining reusable functions and calling them. This combines parameters, return values, and variable assignments."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "What is a good reason to split a program into multiple functions?",
      "options": [
        "Each function can handle a smaller task",
        "It guarantees no bugs",
        "It removes the need to test code",
        "Functions cannot call each other"
      ],
      "correctAnswer": 0,
      "explanation": "Final challenge! Build a small program by defining reusable functions and calling them. This combines parameters, return values, and variable assignments."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "Write a function named multiply that takes integers a and b and returns a * b.",
      "codePrompt": {
        "pseudo": "// Write pseudocode",
        "c": "// Write C code",
        "cpp": "// Write C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION multiply(a, b)\nRETURN a * b\nEND FUNCTION"
        ],
        "c": [
          "int multiply(int a, int b) {\nreturn a * b;\n}"
        ],
        "cpp": [
          "int multiply(int a, int b) {\nreturn a * b;\n}"
        ]
      },
      "explanation": "Great job defining your function!"
    },
    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "Build TWO functions. First, define add(a, b) to return a + b. Then define calculate(a, b, c) to return add(a, b) * c.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION add(a, b)\nRETURN a + b\nEND FUNCTION\nFUNCTION calculate(a, b, c)\nRETURN add(a, b) * c\nEND FUNCTION"
        ],
        "c": [
          "int add(int a, int b) {\nreturn a + b;\n}\nint calculate(int a, int b, int c) {\nreturn add(a, b) * c;\n}"
        ],
        "cpp": [
          "int add(int a, int b) {\nreturn a + b;\n}\nint calculate(int a, int b, int c) {\nreturn add(a, b) * c;\n}"
        ]
      },
      "explanation": "You completed the coding challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "FUNCTION multiply(a, b)\nRETURN a * b\nEND FUNCTION",
    "c": "int multiply(int a, int b) {\nreturn a * b;\n}",
    "cpp": "int multiply(int a, int b) {\nreturn a * b;\n}"
  }
};
