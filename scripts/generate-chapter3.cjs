
const fs = require("fs");
const path = require("path");

const root = path.join(
  process.cwd(),
  "src/data/worlds/01-coding-foundations/03-operators-and-expressions"
);

const lessons = [
  {
    folder: "01-arithmetic-operators",
    variable: "arithmeticOperators",
    id: "arithmetic-operators",
    title: "Arithmetic Operators",
    xp: 20,
    description:
      "Arithmetic operators let programs calculate values. Use + for addition, - for subtraction, * for multiplication, / for division, and % for the remainder.",
    question: "What does 17 % 5 evaluate to?",
    options: ["3", "2", "12", "5"],
    correctAnswer: 1,
    prompt: "Write one statement that stores a + b in total. All variables already exist.",
    pseudo: ["SET total = a + b", "total = a + b"],
    c: ["total = a + b;"],
    cpp: ["total = a + b;"],
    example: "int a = 4;\nint b = 6;\nint total = a + b;",
  },
  {
    folder: "02-comparison-operators",
    variable: "comparisonOperators",
    id: "comparison-operators",
    title: "Comparison Operators",
    xp: 20,
    description:
      "Comparison operators check relationships between values. In C and C++, == checks equality, != checks inequality, and <, >, <=, >= compare magnitudes. Comparisons evaluate to true or false.",
    question: "Which operator checks whether two values are equal in C or C++?",
    options: ["=", "==", "!=", ">"],
    correctAnswer: 1,
    prompt: "Store whether age is at least 18 in the existing variable eligible. Both variables already exist.",
    pseudo: ["SET eligible = age >= 18", "eligible = age >= 18"],
    c: ["eligible = age >= 18;", "eligible = (age >= 18);"],
    cpp: ["eligible = age >= 18;", "eligible = (age >= 18);"],
    example: "int age = 20;\nint eligible = age >= 18;",
  },
  {
    folder: "03-logical-operators",
    variable: "logicalOperators",
    id: "logical-operators",
    title: "Logical Operators",
    xp: 20,
    description:
      "Logical operators combine conditions. && means AND, || means OR, and ! means NOT in C and C++. AND requires both conditions to be true; OR requires at least one.",
    question: "When is A && B true?",
    options: [
      "When A is true",
      "When B is true",
      "When both A and B are true",
      "When either is true",
    ],
    correctAnswer: 2,
    prompt: "Set the existing variable allowed to true only when age >= 18 AND hasTicket is true.",
    pseudo: [
      "SET allowed = age >= 18 AND hasTicket",
      "allowed = age >= 18 AND hasTicket",
    ],
    c: ["allowed = age >= 18 && hasTicket;", "allowed = (age >= 18) && hasTicket;"],
    cpp: ["allowed = age >= 18 && hasTicket;", "allowed = (age >= 18) && hasTicket;"],
    example: "int age = 20;\nint hasTicket = 1;\nint allowed = age >= 18 && hasTicket;",
  },
  {
    folder: "04-assignment-operators",
    variable: "assignmentOperators",
    id: "assignment-operators",
    title: "Assignment Operators",
    xp: 20,
    description:
      "Assignment operators update variables. In C and C++, += adds to an existing value, -= subtracts, *= multiplies, and /= divides. For example, score += 5 means score = score + 5.",
    question: "What is score after int score = 10; score += 5;?",
    options: ["5", "10", "15", "50"],
    correctAnswer: 2,
    prompt: "Increase the existing variable score by 10 using an assignment operator.",
    pseudo: ["SET score = score + 10", "score = score + 10"],
    c: ["score += 10;"],
    cpp: ["score += 10;"],
    example: "int score = 10;\nscore += 10;",
  },
  {
    folder: "05-order-of-operations",
    variable: "orderOfOperations",
    id: "order-of-operations",
    title: "Order of Operations",
    xp: 20,
    description:
      "Operators follow precedence rules. Multiplication and division happen before addition and subtraction. Parentheses let you control the order. For example, (2 + 3) * 4 evaluates to 20.",
    question: "What is 2 + 3 * 4?",
    options: ["20", "14", "24", "9"],
    correctAnswer: 1,
    prompt: "Set the existing variable result to the sum of a and b, multiplied by c. Use parentheses.",
    pseudo: ["SET result = (a + b) * c", "result = (a + b) * c"],
    c: ["result = (a + b) * c;"],
    cpp: ["result = (a + b) * c;"],
    example: "int a = 2;\nint b = 3;\nint c = 4;\nint result = (a + b) * c;",
  },
  {
    folder: "06-building-expressions",
    variable: "buildingExpressions",
    id: "building-expressions",
    title: "Building Expressions",
    xp: 25,
    description:
      "You can combine variables and operators to build useful expressions. A checkout calculation might multiply price by quantity, then subtract a discount.",
    question: "If price = 8, quantity = 3, and discount = 4, what is the total?",
    options: ["20", "28", "15", "24"],
    correctAnswer: 0,
    prompt: "Set the existing variable total to price times quantity, minus discount.",
    pseudo: [
      "SET total = price * quantity - discount",
      "total = price * quantity - discount",
    ],
    c: ["total = price * quantity - discount;"],
    cpp: ["total = price * quantity - discount;"],
    example: "int price = 8;\nint quantity = 3;\nint discount = 4;\nint total = price * quantity - discount;",
  },
  {
    folder: "07-operators-challenge",
    variable: "operatorsChallenge",
    id: "operators-challenge",
    title: "Operators Challenge",
    xp: 30,
    description:
      "Final challenge! A game awards points for collecting coins and completing levels. Calculate a player's total score using arithmetic expressions.",
    question: "If coins = 5, levels = 2, and each level is worth 10 points, what is the total score?",
    options: ["7", "20", "25", "50"],
    correctAnswer: 2,
    prompt: "Store coins + levels * 10 in the existing variable score.",
    pseudo: [
      "SET score = coins + levels * 10",
      "score = coins + levels * 10",
    ],
    c: ["score = coins + levels * 10;"],
    cpp: ["score = coins + levels * 10;"],
    example: "int coins = 5;\nint levels = 2;\nint score = coins + levels * 10;",
  },
];

for (const lesson of lessons) {
  const directory = path.join(root, lesson.folder);
  fs.mkdirSync(directory, { recursive: true });

  const data = {
    id: lesson.id,
    title: lesson.title,
    chapter: "Operators & Expressions",
    world: "Coding Foundations",
    xp: lesson.xp,
    steps: [
      {
        type: "explanation",
        title: lesson.title,
        description: lesson.description,
      },
      {
        type: "quiz",
        title: "Check Your Understanding",
        question: lesson.question,
        options: lesson.options,
        correctAnswer: lesson.correctAnswer,
        explanation: lesson.description,
      },
      {
        type: "code-input",
        title: "Write the Expression",
        question: lesson.prompt,
        codePrompt: {
          pseudo: "// Write one pseudocode instruction",
          c: "// Write one C statement",
          cpp: "// Write one C++ statement",
        },
        acceptedAnswers: {
          pseudo: lesson.pseudo,
          c: lesson.c,
          cpp: lesson.cpp,
        },
        explanation: "You built the expression correctly!",
      },
      {
        type: "code-input",
        title: "Practice Again",
        question: lesson.prompt,
        codePrompt: {
          pseudo: "// Write the expression independently",
          c: "// Write the expression independently",
          cpp: "// Write the expression independently",
        },
        acceptedAnswers: {
          pseudo: lesson.pseudo,
          c: lesson.c,
          cpp: lesson.cpp,
        },
        explanation: "Nice work! Practice helps build fluency.",
      },
    ],
    codeExamples: {
      pseudo: lesson.pseudo[0],
      c: lesson.example,
      cpp: lesson.example,
    },
  };

  const source =
    'import type { Lesson } from "../../../../types";\n\n' +
    `export const ${lesson.variable}: Lesson = ` +
    JSON.stringify(data, null, 2) +
    ";\n";

  fs.writeFileSync(
    path.join(directory, "lesson.ts"),
    source
  );

  console.log(`Created ${lesson.title}`);
}

console.log("Chapter 3 lesson files generated!");
