
import type { Lesson } from "../../../../types";

export const planAnAlgorithm: Lesson = {
  id: "plan-an-algorithm",
  title: "Plan an Algorithm",
  chapter: "Thinking Like a Programmer",
  world: "Coding Foundations",
  xp: 20,

  steps: [
    {
      type: "explanation",
      title: "Put Your Skills Together",
      description:
        "You've learned what programming is, how algorithms work, how to write pseudocode, why sequencing matters, and how to find logical errors. Now it's time to combine those skills to plan your own algorithm!",
    },
    {
      type: "explanation",
      title: "Understand the Problem",
      description:
        "Imagine you're building a checkout program for a small store. A customer buys two items, and your program needs to calculate the total cost. Before writing code, think about three things: What information does the program need? What calculations should it perform? What result should it display?",
    },
    {
      type: "quiz",
      title: "Identify the Inputs",
      question:
        "You're planning a program that calculates the total cost of two items. What information does the program need?",
      options: [
        "The customer's favorite color",
        "The prices of both items",
        "The name of the store's owner",
        "The number of computers in the store",
      ],
      correctAnswer: 1,
      explanation:
        "The program needs the prices of both items so it can add them together and calculate the total.",
    },
    {
      type: "ordering",
      title: "Build Your Algorithm",
      question:
        "Arrange these instructions to calculate and display the total price of two items.",
      options: [
        "DISPLAY the total",
        "GET the prices of both items",
        "ADD the two prices together",
      ],
      correctOrder: [1, 2, 0],
      explanation:
        "First, get the two prices. Next, add them together. Finally, display the total. This follows the input → process → output pattern.",
    },
    {
      type: "quiz",
      title: "Find the Mistake",
      question:
        "Your program receives prices of $8 and $4, but displays $4 instead of $12. Which instruction is most likely causing the problem?",
      options: [
        "SET total = price1 + price2",
        "DISPLAY total",
        "SET total = price1 - price2",
        "GET price1 and price2",
      ],
      correctAnswer: 2,
      explanation:
        "Subtracting 4 from 8 produces 4, not 12. The algorithm needs addition to calculate the total cost.",
    },
    {
      type: "quiz",
      title: "Think Like a Programmer",
      question:
        "Why is it useful to plan an algorithm before writing a program?",
      options: [
        "Planning guarantees the program will never have bugs",
        "Planning means you don't need to test your program",
        "Planning helps you organize the inputs, steps, and expected output",
        "Planning makes every program run instantly",
      ],
          correctAnswer: 2,
    explanation:
      "Planning helps you understand the problem and organize a solution before dealing with programming-language syntax.",
  },

{
  type: "code-builder",
  title: "Build a Checkout Program! 🛒",
  question:
    "A customer buys two items costing $8 and $4. Build a program that calculates the total, applies a $2 discount, and displays the final price.",
  codeBlocks: {
    pseudo: [
      "DISPLAY finalTotal",
      "SET finalTotal = total - 2",
      "SET price1 = 8",
      "SET total = price1 + price2",
      "SET price2 = 4",
    ],
    c: [
      'printf("%d", finalTotal);',
      "int finalTotal = total - 2;",
      "int price1 = 8;",
      "int total = price1 + price2;",
      "int price2 = 4;",
    ],
    cpp: [
      "cout << finalTotal;",
      "int finalTotal = total - 2;",
      "int price1 = 8;",
      "int total = price1 + price2;",
      "int price2 = 4;",
    ],
  },
  correctBlockOrder: [2, 4, 3, 1, 0],
  explanation:
    "Great work! You created two prices, calculated their total of $12, subtracted a $2 discount, and displayed the final price of $10.",
},

  {
    type: "code-input",
    title: "Write Your First Code!",
    question:
      "Write one instruction that displays the message Hello, CodeBloom!",
    codePrompt: {
      pseudo: 'Write a DISPLAY instruction:',
      c: `#include <stdio.h>

int main(void) {
    // Write your instruction here
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

int main() {
    // Write your instruction here
    return 0;
}`,
    },
    acceptedAnswers: {
      pseudo: [
        'DISPLAY "Hello, CodeBloom!"',
      ],
      c: [
        'printf("Hello, CodeBloom!");',
        'puts("Hello, CodeBloom!");',
      ],
      cpp: [
        'cout << "Hello, CodeBloom!";',
        'std::cout << "Hello, CodeBloom!";',
      ],
    },
    placeholder: "Type your code here...",
    explanation:
      "You just wrote a real output instruction! Different languages use different syntax, but the goal is the same: display a message.",
  },
],

  codeExamples: {
    pseudo: `INPUT price1
INPUT price2
SET total = price1 + price2
DISPLAY total`,

    c: `#include <stdio.h>

int main(void) {
    double price1;
    double price2;
    double total;

    scanf("%lf", &price1);
    scanf("%lf", &price2);

    total = price1 + price2;

    printf("%.2f\\n", total);
    return 0;
}`,

    cpp: `#include <iostream>
using namespace std;

int main() {
    double price1;
    double price2;

    cin >> price1;
    cin >> price2;

    double total = price1 + price2;

    cout << total << endl;
    return 0;
}`,
  },

  orderingOptions: {
    pseudo: [
      "DISPLAY the total",
      "GET the prices of both items",
      "ADD the two prices together",
    ],

    c: [
      'printf("%.2f\\n", total);',
      'scanf("%lf", &price1); scanf("%lf", &price2);',
      "total = price1 + price2;",
    ],

    cpp: [
      "cout << total << endl;",
      "cin >> price1; cin >> price2;",
      "double total = price1 + price2;",
    ],
  },
};
