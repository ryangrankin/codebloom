
import type { Lesson } from "../../../../types";

export const variablesChallenge: Lesson = {
  id: "variables-challenge",
  title: "Variables & Data Types Challenge",
  chapter: "Variables & Data Types",
  world: "Coding Foundations",
  xp: 30,

  steps: [
    {
      type: "explanation",
      title: "Build a Mini Checkout Program",
      description:
        "It's time to combine everything you've learned! You're building a checkout program that stores an item's price, reads how many items someone wants, calculates the total, and displays the result.",
    },
    {
      type: "code-input",
      title: "Step 1: Store the Price",
      question:
        "Create an integer variable named price with the value 5.",
      codePrompt: {
        pseudo: "// Store the item price",
        c: "int main(void) {\n    // Create price here\n}",
        cpp: "int main() {\n    // Create price here\n}",
      },
      acceptedAnswers: {
        pseudo: ["SET price = 5", "price = 5"],
        c: ["int price = 5;", "int price=5;"],
        cpp: ["int price = 5;", "int price=5;"],
      },
      explanation: "You stored the price of one item.",
    },
    {
      type: "code-input",
      title: "Step 2: Read the Quantity",
      question:
        "An integer variable named quantity already exists. Write a statement that reads the quantity from the user.",
      codePrompt: {
        pseudo: "SET price = 5\n// Read quantity",
        c: "int price = 5;\nint quantity;\n// Read quantity",
        cpp: "int price = 5;\nint quantity;\n// Read quantity",
      },
      acceptedAnswers: {
        pseudo: ["INPUT quantity", "READ quantity"],
        c: ['scanf("%d", &quantity);'],
        cpp: ["cin >> quantity;", "std::cin >> quantity;"],
      },
      explanation: "Your program can now receive a quantity.",
    },
    {
      type: "code-input",
      title: "Step 3: Calculate the Total",
      question:
        "The variables price, quantity, and total already exist. Calculate the total cost.",
      codePrompt: {
        pseudo: "SET price = 5\nINPUT quantity\n// Calculate total",
        c: "int price = 5;\nint quantity;\nint total;\n// Calculate total",
        cpp: "int price = 5;\nint quantity;\nint total;\n// Calculate total",
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
      explanation: "You calculated the total using multiplication.",
    },
    {
      type: "code-input",
      title: "Step 4: Display the Result",
      question:
        "The variable total already contains the calculated cost. Write a statement that displays it.",
      codePrompt: {
        pseudo: "SET total = price * quantity\n// Display total",
        c: "// total is an integer\n// Display total",
        cpp: "// total is an integer\n// Display total",
      },
      acceptedAnswers: {
        pseudo: ["DISPLAY total", "PRINT total", "OUTPUT total"],
        c: ['printf("%d", total);', 'printf("%d\\n", total);'],
        cpp: [
          "cout << total;",
          "cout << total << endl;",
          "std::cout << total;",
          "std::cout << total << std::endl;",
        ],
      },
      explanation: "You displayed the total cost to the user!",
    },
    {
      type: "quiz",
      title: "Final Check",
      question:
        "If price is 5 and the user enters quantity = 4, what should the program display?",
      options: ["9", "20", "54", "1"],
      correctAnswer: 1,
      explanation:
        "The program multiplies 5 by 4 and displays 20.",
    },
  ],

  codeExamples: {
    pseudo:
      "SET price = 5\nINPUT quantity\nSET total = price * quantity\nDISPLAY total",
    c: '#include <stdio.h>\nint main(void) {\n    int price = 5;\n    int quantity;\n    scanf("%d", &quantity);\n    int total = price * quantity;\n    printf("%d\\n", total);\n    return 0;\n}',
    cpp: '#include <iostream>\nusing namespace std;\nint main() {\n    int price = 5;\n    int quantity;\n    cin >> quantity;\n    int total = price * quantity;\n    cout << total << endl;\n    return 0;\n}',
  },
};
