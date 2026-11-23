import type { Lesson } from "../../../../types";

export const nestedConditions: Lesson = {
  "id": "nested-conditions",
  "title": "Nested Conditions",
  "chapter": "Conditions & Decisions",
  "world": "Coding Foundations",
  "xp": 25,
  "steps": [
    {
      "type": "explanation",
      "title": "Nested Conditions",
      "description": "A nested condition is an if statement inside another if statement. It lets programs make a second decision only after the first condition is satisfied."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "What is a nested if statement?",
      "options": [
        "An if statement inside another if statement",
        "A loop",
        "A variable",
        "An if statement without a condition"
      ],
      "correctAnswer": 0,
      "explanation": "A nested condition is an if statement inside another if statement. It lets programs make a second decision only after the first condition is satisfied."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "The variables age, hasTicket, and allowed already exist. Use nested if statements to set allowed to 1 when age >= 18 and hasTicket is true.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode",
        "c": "// Write your C code",
        "cpp": "// Write your C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "IF age >= 18 THEN\nIF hasTicket THEN\nSET allowed = 1\nEND IF\nEND IF"
        ],
        "c": [
          "if (age >= 18) {\nif (hasTicket) {\nallowed = 1;\n}\n}"
        ],
        "cpp": [
          "if (age >= 18) {\nif (hasTicket) {\nallowed = 1;\n}\n}"
        ]
      },
      "explanation": "Great work! Your condition is correct."
    },

{
  type: "code-builder",
  title: "Build a VIP Entry Checker! 🎟️",
  question:
    "A VIP event requires guests to be at least 18 years old and have a VIP pass. A guest is 21 and has a pass. Arrange the blocks using nested if statements to display a welcome message only when both conditions are true.",
  codeBlocks: {
    pseudo: [
      "END IF",
      'DISPLAY "Welcome to VIP!"',
      "IF hasVIPPass THEN",
      "IF age >= 18 THEN",
      "SET hasVIPPass = TRUE",
      "SET age = 21",
      "END IF",
    ],
    c: [
      "}",
      'printf("Welcome to VIP!");',
      "if (hasVIPPass) {",
      "if (age >= 18) {",
      "int hasVIPPass = 1;",
      "int age = 21;",
      "}",
    ],
    cpp: [
      "}",
      'cout << "Welcome to VIP!";',
      "if (hasVIPPass) {",
      "if (age >= 18) {",
      "bool hasVIPPass = true;",
      "int age = 21;",
      "}",
    ],
  },
  correctBlockOrder: [5, 4, 3, 2, 1, 0, 6],
  explanation:
    "First, the program checks whether the guest is at least 18. Since 21 >= 18 is true, it checks for a VIP pass. Both conditions are true, so the welcome message appears!",
},

    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "The variables loggedIn, isAdmin, and access already exist. Use nested if statements to set access to 1 only when loggedIn and isAdmin are true.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "IF loggedIn THEN\nIF isAdmin THEN\nSET access = 1\nEND IF\nEND IF"
        ],
        "c": [
          "if (loggedIn) {\nif (isAdmin) {\naccess = 1;\n}\n}"
        ],
        "cpp": [
          "if (loggedIn) {\nif (isAdmin) {\naccess = 1;\n}\n}"
        ]
      },
      "explanation": "You solved the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "IF age >= 18 THEN\nIF hasTicket THEN\nSET allowed = 1\nEND IF\nEND IF",
    "c": "if (age >= 18) {\nif (hasTicket) {\nallowed = 1;\n}\n}",
    "cpp": "if (age >= 18) {\nif (hasTicket) {\nallowed = 1;\n}\n}"
  }
};
