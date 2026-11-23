import type { Lesson } from "../../../../types";

export const variableScope: Lesson = {
  "id": "variable-scope",
  "title": "Variable Scope",
  "chapter": "Functions",
  "world": "Coding Foundations",
  "xp": 25,
  "steps": [
    {
      "type": "explanation",
      "title": "Variable Scope",
      "description": "Scope determines where a variable can be used. A variable declared inside a function is local to that function. Variables declared inside a nested block also have limited scope."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "Where can a local variable declared inside a function be accessed?",
      "options": [
        "Within that function's scope",
        "From every other function automatically",
        "Only on the internet",
        "Only before it is declared"
      ],
      "correctAnswer": 0,
      "explanation": "Scope determines where a variable can be used. A variable declared inside a function is local to that function. Variables declared inside a nested block also have limited scope."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "Write a function named getFive that declares a local integer named value equal to 5 and returns it.",
      "codePrompt": {
        "pseudo": "// Write pseudocode",
        "c": "// Write C code",
        "cpp": "// Write C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION getFive()\nSET value = 5\nRETURN value\nEND FUNCTION"
        ],
        "c": [
          "int getFive() {\nint value = 5;\nreturn value;\n}"
        ],
        "cpp": [
          "int getFive() {\nint value = 5;\nreturn value;\n}"
        ]
      },
      "explanation": "Great job defining your function!"
    },
    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "Write a function named addBonus that takes integer score, declares a local integer bonus equal to 10, and returns score + bonus.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION addBonus(score)\nSET bonus = 10\nRETURN score + bonus\nEND FUNCTION"
        ],
        "c": [
          "int addBonus(int score) {\nint bonus = 10;\nreturn score + bonus;\n}"
        ],
        "cpp": [
          "int addBonus(int score) {\nint bonus = 10;\nreturn score + bonus;\n}"
        ]
      },
      "explanation": "You completed the coding challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "FUNCTION getFive()\nSET value = 5\nRETURN value\nEND FUNCTION",
    "c": "int getFive() {\nint value = 5;\nreturn value;\n}",
    "cpp": "int getFive() {\nint value = 5;\nreturn value;\n}"
  }
};
