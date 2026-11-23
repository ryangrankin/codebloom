import type { Lesson } from "../../../../types";

export const planningWithPseudocode: Lesson = {
  "id": "planning-with-pseudocode",
  "title": "Planning with Pseudocode",
  "chapter": "Putting It Together",
  "world": "Coding Foundations",
  "xp": 30,
  "steps": [
    {
      "type": "explanation",
      "title": "Planning with Pseudocode",
      "description": "Pseudocode describes an algorithm without requiring exact programming syntax. Start by identifying inputs, processing steps, decisions, and outputs. Then translate the plan into code."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "Why is pseudocode useful before programming?",
      "options": [
        "It helps organize the algorithm",
        "It automatically compiles to C++",
        "It removes the need for testing",
        "It guarantees the program has no bugs"
      ],
      "correctAnswer": 0,
      "explanation": "Pseudocode describes an algorithm without requiring exact programming syntax. Start by identifying inputs, processing steps, decisions, and outputs. Then translate the plan into code."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "The variables score and passed already exist. Write a conditional that sets passed to 1 if score >= 70, otherwise 0.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode",
        "c": "// Write your C code",
        "cpp": "// Write your C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "IF score >= 70 THEN\nSET passed = 1\nELSE\nSET passed = 0\nEND IF"
        ],
        "c": [
          "if (score >= 70) {\npassed = 1;\n} else {\npassed = 0;\n}"
        ],
        "cpp": [
          "if (score >= 70) {\npassed = 1;\n} else {\npassed = 0;\n}"
        ]
      },
      "explanation": "Great work!"
    },
    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "Write a function named isPassing that takes an integer score and returns 1 if score >= 70, otherwise 0.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION isPassing(score)\nIF score >= 70 THEN\nRETURN 1\nELSE\nRETURN 0\nEND IF\nEND FUNCTION"
        ],
        "c": [
          "int isPassing(int score) {\nif (score >= 70) {\nreturn 1;\n} else {\nreturn 0;\n}\n}"
        ],
        "cpp": [
          "int isPassing(int score) {\nif (score >= 70) {\nreturn 1;\n} else {\nreturn 0;\n}\n}"
        ]
      },
      "explanation": "You completed the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "IF score >= 70 THEN\nSET passed = 1\nELSE\nSET passed = 0\nEND IF",
    "c": "if (score >= 70) {\npassed = 1;\n} else {\npassed = 0;\n}",
    "cpp": "if (score >= 70) {\npassed = 1;\n} else {\npassed = 0;\n}"
  }
};
