import type { Lesson } from "../../../../types";

export const logicalOperators: Lesson = {
  "id": "logical-operators",
  "title": "Logical Operators",
  "chapter": "Operators & Expressions",
  "world": "Coding Foundations",
  "xp": 20,
  "steps": [
    {
      "type": "explanation",
      "title": "Logical Operators",
      "description": "Logical operators combine conditions. && means AND, || means OR, and ! means NOT in C and C++. AND requires both conditions to be true; OR requires at least one."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "When is A && B true?",
      "options": [
        "When A is true",
        "When B is true",
        "When both A and B are true",
        "When either is true"
      ],
      "correctAnswer": 2,
      "explanation": "Logical operators combine conditions. && means AND, || means OR, and ! means NOT in C and C++. AND requires both conditions to be true; OR requires at least one."
    },
    {
      "type": "code-input",
      "title": "Write the Expression",
      "question": "Set the existing variable allowed to true only when age >= 18 AND hasTicket is true.",
      "codePrompt": {
        "pseudo": "// Write one pseudocode instruction",
        "c": "// Write one C statement",
        "cpp": "// Write one C++ statement"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET allowed = age >= 18 AND hasTicket",
          "allowed = age >= 18 AND hasTicket"
        ],
        "c": [
          "allowed = age >= 18 && hasTicket;",
          "allowed = (age >= 18) && hasTicket;"
        ],
        "cpp": [
          "allowed = age >= 18 && hasTicket;",
          "allowed = (age >= 18) && hasTicket;"
        ]
      },
      "explanation": "You built the expression correctly!"
    },
    {
      "type": "code-input",
      "title": "Apply What You Learned",
      "question": "The variables isWeekend, isHoliday, and dayOff already exist. Set dayOff to true when it is the weekend OR a holiday.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode solution",
        "c": "// Write your C solution",
        "cpp": "// Write your C++ solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET dayOff = isWeekend OR isHoliday",
          "dayOff = isWeekend OR isHoliday"
        ],
        "c": [
          "dayOff = isWeekend || isHoliday;",
          "dayOff = (isWeekend || isHoliday);"
        ],
        "cpp": [
          "dayOff = isWeekend || isHoliday;",
          "dayOff = (isWeekend || isHoliday);"
        ]
      },
      "explanation": "Logical OR is true when at least one condition is true."
    }
  ],
  "codeExamples": {
    "pseudo": "SET allowed = age >= 18 AND hasTicket",
    "c": "int age = 20;\nint hasTicket = 1;\nint allowed = age >= 18 && hasTicket;",
    "cpp": "int age = 20;\nint hasTicket = 1;\nint allowed = age >= 18 && hasTicket;"
  }
};
