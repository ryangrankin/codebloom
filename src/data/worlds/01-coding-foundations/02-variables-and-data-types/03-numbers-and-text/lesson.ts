
import type { Lesson } from "../../../../types";

export const numbersAndText: Lesson = {
  id: "numbers-and-text",
  title: "Numbers and Text",
  chapter: "Variables & Data Types",
  world: "Coding Foundations",
  xp: 20,
  steps: [
    {
      type: "explanation",
      title: "Different Kinds of Data",
      description:
        "Programs store different kinds of information. int stores whole numbers, double stores decimal numbers, and char stores a single character. C++ also supports string for text when you include the string header. In C, text is commonly stored in character arrays.",
    },
    {
      type: "quiz",
      title: "Choose a Data Type",
      question: "Which type would you use for a price of 9.99?",
      options: ["int", "double", "char", "void"],
      correctAnswer: 1,
      explanation: "double can store decimal values.",
    },
    {
      type: "code-input",
      title: "Store a Price",
      question: "Create a variable named price with the value 9.99.",
      codePrompt: {
        pseudo: "Store 9.99 in price.",
        c: "// Declare a double variable",
        cpp: "// Declare a double variable",
      },
      acceptedAnswers: {
        pseudo: ["SET price = 9.99", "price = 9.99"],
        c: ["double price = 9.99;", "double price=9.99;"],
        cpp: ["double price = 9.99;", "double price=9.99;"],
      },
      explanation: "You used a decimal data type correctly!",
    },
    {
      type: "quiz",
      title: "Single Characters",
      question: "Which declaration stores the character A?",
      options: [
        "char grade = 'A';",
        'int grade = "A";',
        "double grade = A;",
        "char grade = 65.5;",
      ],
      correctAnswer: 0,
      explanation: "A char stores a single character using single quotes.",
    },

{
  type: "code-builder",
  title: "Build a Student Profile! 🎓",
  question:
    "Create a student's age, GPA, and letter grade, then display the GPA. Arrange the code blocks in the correct order.",
  codeBlocks: {
    pseudo: [
      "DISPLAY gpa",
      'SET grade = "A"',
      "SET gpa = 3.8",
      "SET age = 20",
    ],
    c: [
      'printf("%.1f", gpa);',
      "char grade = 'A';",
      "double gpa = 3.8;",
      "int age = 20;",
    ],
    cpp: [
      "cout << gpa;",
      "char grade = 'A';",
      "double gpa = 3.8;",
      "int age = 20;",
    ],
  },
  correctBlockOrder: [3, 2, 1, 0],
  explanation:
    "Great work! You used int for a whole number, double for a decimal, and char for a single character. Then you displayed the GPA of 3.8.",
},

    {
      type: "code-input",
      title: "Store a Letter",
      question: "Create a variable named grade that stores the character A.",
      codePrompt: {
        pseudo: "Store the character A in grade.",
        c: "// Declare a char variable",
        cpp: "// Declare a char variable",
      },
      acceptedAnswers: {
        pseudo: ["SET grade = 'A'", 'SET grade = "A"'],
        c: ["char grade = 'A';"],
        cpp: ["char grade = 'A';"],
      },
      explanation: "You can now store whole numbers, decimals, and characters.",
    },
  ],
  codeExamples: {
    pseudo: 'SET age = 18\nSET price = 9.99\nSET grade = "A"',
    c: "int age = 18;\ndouble price = 9.99;\nchar grade = 'A';",
    cpp: "int age = 18;\ndouble price = 9.99;\nchar grade = 'A';",
  },
};
