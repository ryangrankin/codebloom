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
  type: "code-builder",
  title: "Build a Concert Entry Checker! 🎟️",
  question:
    "A concert requires visitors to be at least 18 years old AND have a ticket. Build a program that checks both requirements and displays whether a visitor can enter.",
  codeBlocks: {
    pseudo: [
      "DISPLAY canEnter",
      "SET canEnter = age >= 18 AND hasTicket",
      "SET hasTicket = TRUE",
      "SET age = 20",
    ],
    c: [
      'printf("%d", canEnter);',
      "int canEnter = age >= 18 && hasTicket;",
      "int hasTicket = 1;",
      "int age = 20;",
    ],
    cpp: [
      "cout << canEnter;",
      "bool canEnter = age >= 18 && hasTicket;",
      "bool hasTicket = true;",
      "int age = 20;",
    ],
  },
  correctBlockOrder: [3, 2, 1, 0],
  explanation:
    "Great job! The visitor is 20 years old and has a ticket. Both conditions are true, so canEnter is true. AND requires both conditions to be true.",
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
