import type { Lesson } from "../../../../types";

export const buildingExpressions: Lesson = {
  "id": "building-expressions",
  "title": "Building Expressions",
  "chapter": "Operators & Expressions",
  "world": "Coding Foundations",
  "xp": 25,
  "steps": [
    {
      "type": "explanation",
      "title": "Building Expressions",
      "description": "You can combine variables and operators to build useful expressions. A checkout calculation might multiply price by quantity, then subtract a discount."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "If price = 8, quantity = 3, and discount = 4, what is the total?",
      "options": [
        "20",
        "28",
        "15",
        "24"
      ],
      "correctAnswer": 0,
      "explanation": "You can combine variables and operators to build useful expressions. A checkout calculation might multiply price by quantity, then subtract a discount."
    },
    {
      "type": "code-input",
      "title": "Write the Expression",
      "question": "Set the existing variable total to price times quantity, minus discount.",
      "codePrompt": {
        "pseudo": "// Write one pseudocode instruction",
        "c": "// Write one C statement",
        "cpp": "// Write one C++ statement"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET total = price * quantity - discount",
          "total = price * quantity - discount"
        ],
        "c": [
          "total = price * quantity - discount;"
        ],
        "cpp": [
          "total = price * quantity - discount;"
        ]
      },
      "explanation": "You built the expression correctly!"
    },

{
  type: "code-builder",
  title: "Build a Shopping Discount! 🛍️",
  question:
    "A shirt costs $20, and a customer buys 3 shirts with a $5 discount on the entire purchase. Arrange the code blocks to calculate and display the final price.",
  codeBlocks: {
    pseudo: [
      "DISPLAY total",
      "SET total = subtotal - discount",
      "SET discount = 5",
      "SET subtotal = price * quantity",
      "SET quantity = 3",
      "SET price = 20",
    ],
    c: [
      'printf("%d", total);',
      "int total = subtotal - discount;",
      "int discount = 5;",
      "int subtotal = price * quantity;",
      "int quantity = 3;",
      "int price = 20;",
    ],
    cpp: [
      "cout << total;",
      "int total = subtotal - discount;",
      "int discount = 5;",
      "int subtotal = price * quantity;",
      "int quantity = 3;",
      "int price = 20;",
    ],
  },
  correctBlockOrder: [5, 4, 2, 3, 1, 0],
  explanation:
    "You multiplied $20 by 3 to get $60, then subtracted the $5 discount. The final price is $55!",
},

    {
      "type": "code-input",
      "title": "Apply What You Learned",
      "question": "The variables hours, hourlyRate, bonus, and pay already exist. Calculate pay as hours times hourlyRate, plus bonus.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode solution",
        "c": "// Write your C solution",
        "cpp": "// Write your C++ solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "SET pay = hours * hourlyRate + bonus",
          "pay = hours * hourlyRate + bonus"
        ],
        "c": [
          "pay = hours * hourlyRate + bonus;"
        ],
        "cpp": [
          "pay = hours * hourlyRate + bonus;"
        ]
      },
      "explanation": "This expression combines multiplication and addition to calculate pay."
    }
  ],
  "codeExamples": {
    "pseudo": "SET total = price * quantity - discount",
    "c": "int price = 8;\nint quantity = 3;\nint discount = 4;\nint total = price * quantity - discount;",
    "cpp": "int price = 8;\nint quantity = 3;\nint discount = 4;\nint total = price * quantity - discount;"
  }
};
