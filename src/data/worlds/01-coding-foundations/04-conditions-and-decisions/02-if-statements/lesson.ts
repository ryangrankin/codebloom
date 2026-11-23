import type { Lesson } from "../../../../types";

export const ifStatements: Lesson = {
  "id": "if-statements",
  "title": "If Statements",
  "chapter": "Conditions & Decisions",
  "world": "Coding Foundations",
  "xp": 20,
  "steps": [
    {
      "type": "explanation",
      "title": "If Statements",
      "description": "An if statement runs code only when its condition is true. In C and C++, put the condition in parentheses and the instructions inside curly braces."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "When does the code inside an if statement run?",
      "options": [
        "Always",
        "Only when the condition is true",
        "Only when the condition is false",
        "Never"
      ],
      "correctAnswer": 1,
      "explanation": "An if statement runs code only when its condition is true. In C and C++, put the condition in parentheses and the instructions inside curly braces."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "The variables score and passed already exist. Write an if statement that sets passed to 1 when score >= 70.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode",
        "c": "// Write your C code",
        "cpp": "// Write your C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "IF score >= 70 THEN\nSET passed = 1\nEND IF",
          "IF score >= 70\nSET passed = 1\nEND IF"
        ],
        "c": [
          "if (score >= 70) {\npassed = 1;\n}"
        ],
        "cpp": [
          "if (score >= 70) {\npassed = 1;\n}"
        ]
      },
      "explanation": "Great work! Your condition is correct."
    },

{
  type: "code-builder",
  title: "Build a Weather Warning! 🌡️",
  question:
    "A weather station measures a temperature of 105 degrees. Arrange the code blocks to display a warning only when the temperature is above 100.",
  codeBlocks: {
    pseudo: [
      "END IF",
      'DISPLAY "Heat warning!"',
      "IF temperature > 100 THEN",
      "SET temperature = 105",
    ],
    c: [
      "}",
      'printf("Heat warning!");',
      "if (temperature > 100) {",
      "int temperature = 105;",
    ],
    cpp: [
      "}",
      'cout << "Heat warning!";',
      "if (temperature > 100) {",
      "int temperature = 105;",
    ],
  },
  correctBlockOrder: [3, 2, 1, 0],
  explanation:
    "The temperature is 105, which is greater than 100. The condition evaluates to true, so the program displays 'Heat warning!'. If the temperature were 100 or lower, the message would not appear.",
},

    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "The variables temperature and warning already exist. Write an if statement that sets warning to 1 when temperature > 100.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "IF temperature > 100 THEN\nSET warning = 1\nEND IF",
          "IF temperature > 100\nSET warning = 1\nEND IF"
        ],
        "c": [
          "if (temperature > 100) {\nwarning = 1;\n}"
        ],
        "cpp": [
          "if (temperature > 100) {\nwarning = 1;\n}"
        ]
      },
      "explanation": "You solved the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "IF score >= 70 THEN\nSET passed = 1\nEND IF",
    "c": "if (score >= 70) {\npassed = 1;\n}",
    "cpp": "if (score >= 70) {\npassed = 1;\n}"
  }
};
