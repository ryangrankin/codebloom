import type { Lesson } from "../../../../types";

export const elseAndElseIf: Lesson = {
  "id": "else-and-else-if",
  "title": "Else and Else If",
  "chapter": "Conditions & Decisions",
  "world": "Coding Foundations",
  "xp": 25,
  "steps": [
    {
      "type": "explanation",
      "title": "Else and Else If",
      "description": "Use else when you need an alternative action. Use else if to test additional conditions. The program follows the first matching branch."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "What happens when the if condition is false and there is an else block?",
      "options": [
        "The program stops",
        "The else block runs",
        "Both blocks run",
        "The if block runs anyway"
      ],
      "correctAnswer": 1,
      "explanation": "Use else when you need an alternative action. Use else if to test additional conditions. The program follows the first matching branch."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "The variables score and passed already exist. Set passed to 1 if score >= 70, otherwise set passed to 0.",
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
      "explanation": "Great work! Your condition is correct."
    },

{
  type: "code-builder",
  title: "Build a Movie Ticket Price Checker! 🎬",
  question:
    "A movie theater charges $8 for children under 13, $12 for teens under 18, and $15 for adults. A customer is 16. Arrange the blocks to calculate and display the correct ticket price.",
  codeBlocks: {
    pseudo: [
      "DISPLAY price",
      "END IF",
      "ELSE\nSET price = 15",
      "ELSE IF age < 18 THEN\nSET price = 12",
      "IF age < 13 THEN\nSET price = 8",
      "SET age = 16",
    ],
    c: [
      'printf("%d", price);',
      "}",
      "} else {\n  price = 15;",
      "} else if (age < 18) {\n  price = 12;",
      "if (age < 13) {\n  price = 8;",
      "int age = 16;\nint price = 0;",
    ],
    cpp: [
      "cout << price;",
      "}",
      "} else {\n  price = 15;",
      "} else if (age < 18) {\n  price = 12;",
      "if (age < 13) {\n  price = 8;",
      "int age = 16;\nint price = 0;",
    ],
  },
  correctBlockOrder: [5, 4, 3, 2, 1, 0],
  explanation:
    "The customer is 16, so the first condition (age < 13) is false. The next condition (age < 18) is true, so the ticket costs $12. The else branch is skipped.",
},

    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "The variables temperature and status already exist. Set status to 2 if temperature > 90, to 1 if temperature > 70, otherwise to 0.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "IF temperature > 90 THEN\nSET status = 2\nELSE IF temperature > 70 THEN\nSET status = 1\nELSE\nSET status = 0\nEND IF"
        ],
        "c": [
          "if (temperature > 90) {\nstatus = 2;\n} else if (temperature > 70) {\nstatus = 1;\n} else {\nstatus = 0;\n}"
        ],
        "cpp": [
          "if (temperature > 90) {\nstatus = 2;\n} else if (temperature > 70) {\nstatus = 1;\n} else {\nstatus = 0;\n}"
        ]
      },
      "explanation": "You solved the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "IF score >= 70 THEN\nSET passed = 1\nELSE\nSET passed = 0\nEND IF",
    "c": "if (score >= 70) {\npassed = 1;\n} else {\npassed = 0;\n}",
    "cpp": "if (score >= 70) {\npassed = 1;\n} else {\npassed = 0;\n}"
  }
};
