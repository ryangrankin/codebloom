
import type { Lesson } from "../../../../types";

export const algorithmsInEverydayLife: Lesson = {
  id: "algorithms-in-everyday-life",
  title: "Algorithms in Everyday Life",
  chapter: "Thinking Like a Programmer",
  world: "Coding Foundations",
  xp: 15,

  steps: [
    {
      type: "explanation",
      title: "What Is an Algorithm? ",
      description:
        "An algorithm is a set of step-by-step instructions for solving a problem or completing a task.\n\n" +
        "You use algorithms every day, even when you're not programming!\n\n" +
        "Following a recipe, getting ready for school, and finding directions are all examples of algorithms.",
    },
    {
      type: "quiz",
      title: "Spot the Algorithm!",
      question: "Which of these is an example of an algorithm?",
      options: [
        "A random collection of words",
        "Step-by-step instructions for baking cookies",
        "A picture of a computer",
        "A list of favorite colors",
      ],
      correctAnswer: 1,
      explanation:
        "A recipe is an algorithm because it provides ordered instructions to complete a task.",
    },
    {
      type: "explanation",
      title: "Order Matters!",
      description:
        "Algorithms need instructions arranged in a logical order.\n\n" +
        "Imagine making a sandwich. You wouldn't eat it before putting the ingredients together!\n\n" +
        "Computers follow instructions exactly, so the order of operations can change the result.",
    },
    {
      type: "quiz",
      title: "Think It Through",
      question: "Why does the order of instructions matter?",
      options: [
        "Computers always fix incorrect instructions",
        "Instructions can produce different results depending on their order",
        "Algorithms must always have exactly five steps",
        "The order never matters",
      ],
      correctAnswer: 1,
      explanation:
        "Changing the order of instructions can change what an algorithm does or cause it to fail.",
    },
    {
      type: "ordering",
      title: "Build an Algorithm!",
      question:
        "Arrange these steps to calculate the total cost of two items.",
      correctOrder: [2, 0, 1],
      explanation:
        "First, get the two prices. Next, add them together. Finally, display the total.",
    },

{
  type: "code-builder",
  title: "Build a Price Calculator!",
  question:
    "Build a program that starts with two prices, calculates their total, and displays the result. Tap the blocks in the correct order.",
  codeBlocks: {
    pseudo: [
      "OUTPUT total",
      "SET total = price1 + price2",
      "SET price1 = 5",
      "SET price2 = 3",
    ],
    c: [
      'printf("%.2f", total);',
      "float total = price1 + price2;",
      "float price1 = 5;",
      "float price2 = 3;",
    ],
    cpp: [
      "cout << total;",
      "float total = price1 + price2;",
      "float price1 = 5;",
      "float price2 = 3;",
    ],
  },
  correctBlockOrder: [2, 3, 1, 0],
  explanation:
    "First, we create our two prices. Then we add them together and display the total. The result is 8!",
},

  ],

  codeExamples: {
    pseudo: `INPUT price1
INPUT price2
total ← price1 + price2
OUTPUT total`,

    c: `#include <stdio.h>

int main() {
  float price1, price2;
  scanf("%f", &price1);
  scanf("%f", &price2);

  float total = price1 + price2;
  printf("%.2f", total);

  return 0;
}`,

    cpp: `#include <iostream>
using namespace std;

int main() {
  float price1, price2;
  cin >> price1 >> price2;

  float total = price1 + price2;
  cout << total;

  return 0;
}`,
  },

  orderingOptions: {
    pseudo: [
      "total ← price1 + price2",
      "OUTPUT total",
      "INPUT price1, price2",
    ],
    c: [
      "float total = price1 + price2;",
      'printf("%.2f", total);',
      'scanf("%f", &price1); scanf("%f", &price2);',
    ],
    cpp: [
      "float total = price1 + price2;",
      "cout << total;",
      "cin >> price1 >> price2;",
    ],
  },
};
