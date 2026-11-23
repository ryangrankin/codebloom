import type { Lesson } from "../../../../types";

export const whyFunctionsMatter: Lesson = {
  "id": "why-functions-matter",
  "title": "Why Functions Matter",
  "chapter": "Functions",
  "world": "Coding Foundations",
  "xp": 20,
  "steps": [
    {
      "type": "explanation",
      "title": "Why Functions Matter",
      "description": "Functions group instructions into reusable pieces of code. Instead of repeating the same instructions throughout a program, you can define a function once and call it whenever you need it."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "What is the main benefit of using functions?",
      "options": [
        "They make code reusable",
        "They make every program run forever",
        "They remove all variables",
        "They prevent programs from using loops"
      ],
      "correctAnswer": 0,
      "explanation": "Functions group instructions into reusable pieces of code. Instead of repeating the same instructions throughout a program, you can define a function once and call it whenever you need it."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "Write a function named greet that prints Hello.",
      "codePrompt": {
        "pseudo": "// Write pseudocode",
        "c": "// Write C code",
        "cpp": "// Write C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION greet()\nPRINT \"Hello\"\nEND FUNCTION"
        ],
        "c": [
          "void greet() {\nprintf(\"Hello\");\n}"
        ],
        "cpp": [
          "void greet() {\ncout << \"Hello\";\n}"
        ]
      },
      "explanation": "Great job defining your function!"
    },
    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "Write a function named welcome that prints Welcome.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION welcome()\nPRINT \"Welcome\"\nEND FUNCTION"
        ],
        "c": [
          "void welcome() {\nprintf(\"Welcome\");\n}"
        ],
        "cpp": [
          "void welcome() {\ncout << \"Welcome\";\n}"
        ]
      },
      "explanation": "You completed the coding challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "FUNCTION greet()\nPRINT \"Hello\"\nEND FUNCTION",
    "c": "void greet() {\nprintf(\"Hello\");\n}",
    "cpp": "void greet() {\ncout << \"Hello\";\n}"
  }
};
