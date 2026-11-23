import type { Lesson } from "../../../../types";

export const comparisonOperators: Lesson = {
  "id": "comparison-operators",
  "title": "Comparison Operators",
  "chapter": "Operators & Expressions",
  "world": "Coding Foundations",
  "xp": 20,
  "steps": [
    {
      "type": "explanation",
      "title": "Comparison Operators",
      "description": "Comparison operators check relationships between values. In C and C++, == checks equality, != checks inequality, and <, >, <=, >= compare magnitudes. Comparisons evaluate to true or false."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "Which operator checks whether two values are equal in C or C++?",
      "options": [
        "=",
        "==",
        "!=",
        ">"
      ],
      "correctAnswer": 1,
      "explanation": "Comparison operators check relationships between values. In C and C++, == checks equality, != checks inequality, and <, >, <=, >= compare magnitudes. Comparisons evaluate to true or false."
    },
    {
      "type": "code-input",
      "title": "Write the Expression",
      "question": "Store whether age is at least 18 in the existing variable eligible. Both variables already exist.",
      "codePrompt": {
        "pseudo": "// Write one pseudocode instruction",
        "c": "// Write one C statement",
        "cpp": "// Write one C++ statement"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET eligible = age >= 18",
          "eligible = age >= 18"
        ],
        "c": [
          "eligible = age >= 18;",
          "eligible = (age >= 18);"
        ],
        "cpp": [
          "eligible = age >= 18;",
          "eligible = (age >= 18);"
        ]
      },
      "explanation": "You built the expression correctly!"
    },

{
  type: "code-builder",
  title: "Build a Theme Park Checker! 🎢",
  question:
    "A theme park ride requires visitors to be at least 12 years old. Build a program that stores a visitor's age, checks whether they're old enough, and displays the result.",
  codeBlocks: {
    pseudo: [
      "DISPLAY canRide",
      "SET canRide = age >= 12",
      "SET age = 14",
    ],
    c: [
      'printf("%d", canRide);',
      "int canRide = age >= 12;",
      "int age = 14;",
    ],
    cpp: [
      "cout << canRide;",
      "bool canRide = age >= 12;",
      "int age = 14;",
    ],
  },
  correctBlockOrder: [2, 1, 0],
  explanation:
    "Great work! The visitor is 14, which is greater than or equal to 12. The comparison evaluates to true. In C, true is represented by 1; in C++, cout also displays true as 1 by default.",
},

    {
      "type": "code-input",
      "title": "Apply What You Learned",
      "question": "The variables temperature and isFreezing already exist. Set isFreezing to whether temperature is less than or equal to 0.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode solution",
        "c": "// Write your C solution",
        "cpp": "// Write your C++ solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET isFreezing = temperature <= 0",
          "isFreezing = temperature <= 0"
        ],
        "c": [
          "isFreezing = temperature <= 0;",
          "isFreezing = (temperature <= 0);"
        ],
        "cpp": [
          "isFreezing = temperature <= 0;",
          "isFreezing = (temperature <= 0);"
        ]
      },
      "explanation": "The <= operator checks whether a value is less than or equal to another."
    }
  ],
  "codeExamples": {
    "pseudo": "SET eligible = age >= 18",
    "c": "int age = 20;\nint eligible = age >= 18;",
    "cpp": "int age = 20;\nint eligible = age >= 18;"
  }
};
