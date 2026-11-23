import type { Lesson } from "../../../../types";

export const combiningConditions: Lesson = {
  "id": "combining-conditions",
  "title": "Combining Conditions",
  "chapter": "Conditions & Decisions",
  "world": "Coding Foundations",
  "xp": 25,
  "steps": [
    {
      "type": "explanation",
      "title": "Combining Conditions",
      "description": "Logical operators let you combine conditions. In C and C++, && means AND, || means OR, and ! means NOT. Combining conditions can make decisions more concise."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "Which operator means OR in C and C++?",
      "options": [
        "&&",
        "||",
        "!",
        "=="
      ],
      "correctAnswer": 1,
      "explanation": "Logical operators let you combine conditions. In C and C++, && means AND, || means OR, and ! means NOT. Combining conditions can make decisions more concise."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "The variables age, hasTicket, and allowed already exist. Use one if statement with AND to set allowed to 1 when age >= 18 and hasTicket is true.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode",
        "c": "// Write your C code",
        "cpp": "// Write your C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "IF age >= 18 AND hasTicket THEN\nSET allowed = 1\nEND IF"
        ],
        "c": [
          "if (age >= 18 && hasTicket) {\nallowed = 1;\n}"
        ],
        "cpp": [
          "if (age >= 18 && hasTicket) {\nallowed = 1;\n}"
        ]
      },
      "explanation": "Great work! Your condition is correct."
    },
    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "The variables isWeekend, isHoliday, and dayOff already exist. Use one if statement with OR to set dayOff to 1 when either condition is true.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "IF isWeekend OR isHoliday THEN\nSET dayOff = 1\nEND IF"
        ],
        "c": [
          "if (isWeekend || isHoliday) {\ndayOff = 1;\n}"
        ],
        "cpp": [
          "if (isWeekend || isHoliday) {\ndayOff = 1;\n}"
        ]
      },
      "explanation": "You solved the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "IF age >= 18 AND hasTicket THEN\nSET allowed = 1\nEND IF",
    "c": "if (age >= 18 && hasTicket) {\nallowed = 1;\n}",
    "cpp": "if (age >= 18 && hasTicket) {\nallowed = 1;\n}"
  }
};
