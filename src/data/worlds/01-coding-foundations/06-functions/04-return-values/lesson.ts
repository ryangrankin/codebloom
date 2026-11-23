import type { Lesson } from "../../../../types";

export const returnValues: Lesson = {
  "id": "return-values",
  "title": "Return Values",
  "chapter": "Functions",
  "world": "Coding Foundations",
  "xp": 25,
  "steps": [
    {
      "type": "explanation",
      "title": "Return Values",
      "description": "A return statement sends a value back to the code that called a function. A function with return type int must return an integer value along the paths it can finish."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "What does return do?",
      "options": [
        "Sends a value back to the caller",
        "Repeats the function forever",
        "Deletes a variable",
        "Prints automatically"
      ],
      "correctAnswer": 0,
      "explanation": "A return statement sends a value back to the code that called a function. A function with return type int must return an integer value along the paths it can finish."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "Write a function named square that takes integer x and returns x * x.",
      "codePrompt": {
        "pseudo": "// Write pseudocode",
        "c": "// Write C code",
        "cpp": "// Write C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION square(x)\nRETURN x * x\nEND FUNCTION"
        ],
        "c": [
          "int square(int x) {\nreturn x * x;\n}"
        ],
        "cpp": [
          "int square(int x) {\nreturn x * x;\n}"
        ]
      },
      "explanation": "Great job defining your function!"
    },
    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "Write a function named maxTwo that takes integers a and b and returns the larger value. Use an if/else statement.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION maxTwo(a, b)\nIF a > b THEN\nRETURN a\nELSE\nRETURN b\nEND IF\nEND FUNCTION"
        ],
        "c": [
          "int maxTwo(int a, int b) {\nif (a > b) {\nreturn a;\n} else {\nreturn b;\n}\n}"
        ],
        "cpp": [
          "int maxTwo(int a, int b) {\nif (a > b) {\nreturn a;\n} else {\nreturn b;\n}\n}"
        ]
      },
      "explanation": "You completed the coding challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "FUNCTION square(x)\nRETURN x * x\nEND FUNCTION",
    "c": "int square(int x) {\nreturn x * x;\n}",
    "cpp": "int square(int x) {\nreturn x * x;\n}"
  }
};
