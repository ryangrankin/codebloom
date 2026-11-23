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
