
import type { Lesson } from "../../../../types";

export const sequencingInstructions: Lesson = {
  id: "sequencing-instructions",
  title: "Sequencing Instructions",
  chapter: "Thinking Like a Programmer",
  world: "Coding Foundations",
  xp: 15,

  steps: [
    {
      type: "explanation",
      title: "Order Matters!",
      description:
        "A sequence is a set of instructions performed in a specific order. Computers normally execute instructions from top to bottom, one at a time. Changing the order can change what a program does.",
    },
    {
      type: "explanation",
      title: "Think About Making Toast",
      description:
        "Imagine making toast. First, put bread in the toaster. Next, toast the bread. Finally, spread butter on the toast. If you change the order and try to spread butter before putting bread in the toaster, you'll get a different result! Programs work the same way: instructions need to be arranged logically.",
    },
    {
      type: "quiz",
      title: "What Happens First?",
      question:
        "A program follows these instructions:\n\n1. SET score = 0\n2. ADD 10 to score\n3. DISPLAY score\n\nWhat number will appear?",
      options: ["0", "10", "1", "An error"],
      correctAnswer: 1,
      explanation:
        "The program starts with score = 0, adds 10, and then displays the updated value of 10.",
    },
    {
      type: "ordering",
      title: "Put the Steps in Order",
      question:
        "Arrange the instructions so the program starts with 5, adds 3, and then displays the result.",
      options: [
        "DISPLAY number",
        "SET number = 5",
        "ADD 3 to number",
      ],
      correctOrder: [1, 2, 0],
      explanation:
        "First, create the variable with a value of 5. Next, add 3 to it. Finally, display the result, which is 8.",
    },
    {
      type: "quiz",
      title: "Changing the Sequence",
      question:
        "What happens if you DISPLAY a number before adding 3 to it?",
      options: [
        "The program automatically fixes the order",
        "The number is displayed before it is updated",
        "The computer skips the DISPLAY instruction",
        "The number is always 0",
      ],
      correctAnswer: 1,
      explanation:
        "Instructions execute in order. If DISPLAY happens before the addition, the program shows the original value rather than the updated one.",
    },
  ],

  codeExamples: {
    pseudo: `SET number = 5
ADD 3 to number
DISPLAY number`,

    c: `#include <stdio.h>

int main(void) {
    int number = 5;
    number = number + 3;
    printf("%d\\n", number);
    return 0;
}`,

    cpp: `#include <iostream>
using namespace std;

int main() {
    int number = 5;
    number = number + 3;
    cout << number << endl;
    return 0;
}`,
  },

  orderingOptions: {
    pseudo: [
      "DISPLAY number",
      "SET number = 5",
      "ADD 3 to number",
    ],

    c: [
      'printf("%d\\n", number);',
      "int number = 5;",
      "number = number + 3;",
    ],

    cpp: [
      "cout << number << endl;",
      "int number = 5;",
      "number = number + 3;",
    ],
  },
};
