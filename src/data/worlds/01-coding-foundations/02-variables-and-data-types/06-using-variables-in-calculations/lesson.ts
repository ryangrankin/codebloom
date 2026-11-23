
import type { Lesson } from "../../../../types";

export const usingVariablesInCalculations: Lesson = {
  id: "using-variables-in-calculations",
  title: "Using Variables in Calculations",
  chapter: "Variables & Data Types",
  world: "Coding Foundations",
  xp: 20,

  steps: [
    {
      type: "explanation",
      title: "Make Variables Do Math",
      description:
        "Variables become especially useful when we combine them with arithmetic. Programs can add (+), subtract (-), multiply (*), and divide (/). For example, total = price * quantity calculates the cost of several items.",
    },
    {
      type: "quiz",
      title: "Predict the Total",
      question:
        "If price = 5 and quantity = 3, what is price * quantity?",
      options: ["8", "15", "53", "2"],
      correctAnswer: 1,
      explanation: "5 multiplied by 3 equals 15.",
    },
    {
      type: "code-input",
      title: "Calculate a Total",
      question:
        "The variables price, quantity, and total already exist. Write a statement that stores price multiplied by quantity in total.",
      codePrompt: {
        pseudo: "SET price = 5\nSET quantity = 3\n// Calculate total",
        c: "int price = 5;\nint quantity = 3;\nint total;\n// Calculate total",
        cpp: "int price = 5;\nint quantity = 3;\nint total;\n// Calculate total",
      },
      acceptedAnswers: {
        pseudo: [
          "SET total = price * quantity",
          "total = price * quantity",
        ],
        c: [
          "total = price * quantity;",
          "total=price*quantity;",
        ],
        cpp: [
          "total = price * quantity;",
          "total=price*quantity;",
        ],
      },
      explanation:
        "You used multiplication to calculate the total cost.",
    },
    {
      type: "quiz",
      title: "Understand Division",
      question:
        "In C or C++, what is the result of 7 / 2 when both values are integers?",
      options: ["3.5", "3", "4", "An error"],
      correctAnswer: 1,
      explanation:
        "Integer division discards the fractional part. To get 3.5, at least one operand must be a floating-point value.",
    },
    {
      type: "code-input",
      title: "Calculate an Average",
      question:
        "Two integer variables, score1 and score2, already exist. A double variable named average also exists. Write a statement that calculates their average without integer division.",
      codePrompt: {
        pseudo: "SET score1 = 7\nSET score2 = 8\n// Calculate average",
        c: "int score1 = 7;\nint score2 = 8;\ndouble average;\n// Calculate average",
        cpp: "int score1 = 7;\nint score2 = 8;\ndouble average;\n// Calculate average",
      },
      acceptedAnswers: {
        pseudo: [
          "SET average = (score1 + score2) / 2",
          "average = (score1 + score2) / 2",
          "SET average = (score1 + score2) / 2.0",
        ],
        c: [
          "average = (score1 + score2) / 2.0;",
          "average=(score1+score2)/2.0;",
        ],
        cpp: [
          "average = (score1 + score2) / 2.0;",
          "average=(score1+score2)/2.0;",
        ],
      },
      explanation:
        "Using 2.0 ensures floating-point division, so the result can include decimals.",
    },
  ],

  codeExamples: {
    pseudo:
      "SET price = 5\nSET quantity = 3\nSET total = price * quantity\nDISPLAY total",
    c: '#include <stdio.h>\nint main(void) {\n    int price = 5;\n    int quantity = 3;\n    int total = price * quantity;\n    printf("%d\\n", total);\n    return 0;\n}',
    cpp: '#include <iostream>\nusing namespace std;\nint main() {\n    int price = 5;\n    int quantity = 3;\n    int total = price * quantity;\n    cout << total << endl;\n    return 0;\n}',
  },
};
