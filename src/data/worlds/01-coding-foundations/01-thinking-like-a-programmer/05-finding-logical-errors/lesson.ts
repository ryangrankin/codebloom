
import type { Lesson } from "../../../../types";

export const findingLogicalErrors: Lesson = {
  id: "finding-logical-errors",
  title: "Finding Logical Errors",
  chapter: "Thinking Like a Programmer",
  world: "Coding Foundations",
  xp: 15,

  steps: [
    {
      type: "explanation",
      title: "What Is a Logical Error?",
      description:
        "Sometimes a program runs without crashing, but the result is still wrong. This is called a logical error. The computer follows the instructions exactly, but those instructions don't accomplish what the programmer intended.",
    },
    {
      type: "explanation",
      title: "Finding the Mistake",
      description:
        "Imagine a program that calculates the total price of two items. One costs $5 and the other costs $3. The programmer accidentally subtracts the prices instead of adding them. The program runs, but displays $2 instead of $8. The mistake is in the logic, not the programming syntax.",
    },
    {
      type: "quiz",
      title: "Spot the Logical Error",
      question:
        "A program should calculate the total of two prices:\n\nSET price1 = 5\nSET price2 = 3\nSET total = price1 - price2\nDISPLAY total\n\nWhat is the logical error?",
      options: [
        "The program should multiply the prices",
        "The program subtracts instead of adding",
        "The program needs another variable",
        "The program cannot display numbers",
      ],
      correctAnswer: 1,
      explanation:
        "The goal is to calculate a total, so the program should add the two prices rather than subtract them.",
    },
    {
      type: "ordering",
      title: "Fix the Program",
      question:
        "Arrange the instructions to correctly calculate the total of two prices.",
      options: [
        "DISPLAY total",
        "SET price1 = 5 and price2 = 3",
        "SET total = price1 + price2",
      ],
      correctOrder: [1, 2, 0],
      explanation:
        "First, assign the prices. Next, add them together. Finally, display the total of 8.",
    },
    {
      type: "quiz",
      title: "Debugging a Program",
      question:
        "A program is supposed to display 10, but it displays 5 instead. It runs without crashing. What should the programmer do first?",
      options: [
        "Delete the entire program",
        "Assume the computer is broken",
        "Check whether the instructions produce the intended result",
        "Change to a different programming language",
      ],
      correctAnswer: 2,
      explanation:
        "Debugging starts by examining what the program actually does and comparing it with what it is supposed to do. This helps identify where the logic went wrong.",
    },

{
  type: "code-builder",
  title: "Debug the Score! 🐛",
  question:
    "This program is supposed to display a final score of 15, but its instructions are mixed up! Rearrange the code blocks so the program works correctly.",
  codeBlocks: {
    pseudo: [
      "DISPLAY score",
      "SET score = score + 5",
      "SET score = 10",
    ],
    c: [
      'printf("%d", score);',
      "score += 5;",
      "int score = 10;",
    ],
    cpp: [
      "cout << score;",
      "score += 5;",
      "int score = 10;",
    ],
  },
  correctBlockOrder: [2, 1, 0],
  explanation:
    "You fixed the logical error! The program must first create score with a value of 10, then add 5, and finally display 15. Displaying the score too early would show the wrong result.",
},

  ],

  codeExamples: {
    pseudo: `SET price1 = 5
SET price2 = 3
SET total = price1 + price2
DISPLAY total`,

    c: `#include <stdio.h>

int main(void) {
    int price1 = 5;
    int price2 = 3;
    int total = price1 + price2;

    printf("%d\\n", total);
    return 0;
}`,

    cpp: `#include <iostream>
using namespace std;

int main() {
    int price1 = 5;
    int price2 = 3;
    int total = price1 + price2;

    cout << total << endl;
    return 0;
}`,
  },

  orderingOptions: {
    pseudo: [
      "DISPLAY total",
      "SET price1 = 5 and price2 = 3",
      "SET total = price1 + price2",
    ],

    c: [
      'printf("%d\\n", total);',
      "int price1 = 5; int price2 = 3;",
      "int total = price1 + price2;",
    ],

    cpp: [
      "cout << total << endl;",
      "int price1 = 5; int price2 = 3;",
      "int total = price1 + price2;",
    ],
  },
};

