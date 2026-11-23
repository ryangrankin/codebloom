import type { Lesson } from "../../../../types";

export const readingAFullProgram: Lesson = {
  "id": "reading-a-full-program",
  "title": "Reading a Full Program",
  "chapter": "Putting It Together",
  "world": "Coding Foundations",
  "xp": 25,
  "steps": [
    {
      "type": "explanation",
      "title": "Reading a Full Program",
      "description": "A complete program combines declarations, calculations, decisions, loops, and functions. Read code from its starting point and follow the order in which instructions execute."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "What does a return statement do inside a function?",
      "options": [
        "Returns control and possibly a value to the caller",
        "Repeats the function",
        "Creates a loop",
        "Declares every variable"
      ],
      "correctAnswer": 0,
      "explanation": "A complete program combines declarations, calculations, decisions, loops, and functions. Read code from its starting point and follow the order in which instructions execute."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "Write a function named doubleValue that takes an integer x and returns x * 2.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode",
        "c": "// Write your C code",
        "cpp": "// Write your C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION doubleValue(x)\nRETURN x * 2\nEND FUNCTION"
        ],
        "c": [
          "int doubleValue(int x) {\nreturn x * 2;\n}"
        ],
        "cpp": [
          "int doubleValue(int x) {\nreturn x * 2;\n}"
        ]
      },
      "explanation": "Great work!"
    },
    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "Write TWO functions. Define doubleValue(x) to return x * 2. Then define calculate(x) to return doubleValue(x) + 5.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION doubleValue(x)\nRETURN x * 2\nEND FUNCTION\nFUNCTION calculate(x)\nRETURN doubleValue(x) + 5\nEND FUNCTION"
        ],
        "c": [
          "int doubleValue(int x) {\nreturn x * 2;\n}\nint calculate(int x) {\nreturn doubleValue(x) + 5;\n}"
        ],
        "cpp": [
          "int doubleValue(int x) {\nreturn x * 2;\n}\nint calculate(int x) {\nreturn doubleValue(x) + 5;\n}"
        ]
      },
      "explanation": "You completed the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "FUNCTION doubleValue(x)\nRETURN x * 2\nEND FUNCTION",
    "c": "int doubleValue(int x) {\nreturn x * 2;\n}",
    "cpp": "int doubleValue(int x) {\nreturn x * 2;\n}"
  }
};
