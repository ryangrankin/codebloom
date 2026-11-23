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
  type: "code-builder",
  title: "Build a Movie Ticket Planner! 🎬",
  question:
    "A movie theater charges $12 per ticket, but customers age 12 or younger pay $7. Arrange the blocks to create a program that starts with a customer's age of 10, checks whether they qualify for the discount, and displays their ticket price.",
  codeBlocks: {
    pseudo: [
      "DISPLAY price",
      "END IF",
      "SET price = 12",
      "ELSE",
      "SET price = 7",
      "IF age <= 12 THEN",
      "SET age = 10",
    ],
    c: [
      'printf("%d", price);',
      "}",
      "price = 12;",
      "} else {",
      "price = 7;",
      "if (age <= 12) {",
      "int age = 10;\nint price;",
    ],
    cpp: [
      "cout << price;",
      "}",
      "price = 12;",
      "} else {",
      "price = 7;",
      "if (age <= 12) {",
      "int age = 10;\nint price;",
    ],
  },
  correctBlockOrder: [6, 5, 4, 3, 2, 1, 0],
  explanation:
    "The program starts with an age of 10. It checks whether the customer is 12 or younger. Since 10 <= 12 is true, the ticket price becomes 7. The program skips the ELSE branch and displays 7. Planning the input, condition, assignments, and output before writing code makes the algorithm easier to understand!",
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
