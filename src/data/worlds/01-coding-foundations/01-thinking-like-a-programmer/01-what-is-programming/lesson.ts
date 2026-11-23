
import type { Lesson } from "../../../../types";

export const whatIsProgramming: Lesson = {
  id: "what-is-programming",
  title: "What Is Programming?",
  chapter: "Thinking Like a Programmer",
  world: "Coding Foundations",
  xp: 15,

  steps: [
    {
      type: "explanation",
      title: "Welcome to Coding!",
      description:
        "Programming is the process of giving a computer instructions to complete a task.\n\n" +
        "These instructions are written using programming languages such as C and C++.\n\n" +
        "Before writing code, programmers break problems into smaller steps.",
    },
    {
      type: "quiz",
      title: "Quick Check!",
      question: "What is programming?",
      options: [
        "Giving a computer instructions",
        "Building computers",
        "Using the internet",
        "Designing websites only",
      ],
      correctAnswer: 0,
      explanation:
        "Programming means writing instructions that tell a computer what to do.",
    },
    {
      type: "quiz",
      title: "Think Like a Programmer",
      question: "Why do programmers break problems into smaller steps?",
      options: [
        "To make programs longer",
        "To make problems easier to solve",
        "Because computers cannot run large programs",
        "To avoid using programming languages",
      ],
      correctAnswer: 1,
      explanation:
        "Breaking a problem into smaller steps makes it easier to understand, solve, and debug.",
    },
    {
      type: "quiz",
      title: "Knowledge Check",
      question: "Which of these is a programming language?",
      options: ["Google", "Wi-Fi", "C++", "Keyboard"],
      correctAnswer: 2,
      explanation:
        "C++ is a programming language used to write instructions for computers.",
    },
    {
      type: "ordering",
      title: "Think Like a Programmer 🧩",
      question: "Put these instructions in the correct order.",
      correctOrder: [1, 2, 0],
      explanation:
        "First, get the input. Next, process it. Finally, display the output.",
    },
  ],

  codeExamples: {
    pseudo: `INPUT number
result ← number * 2
OUTPUT result`,

    c: `#include <stdio.h>

int main() {
  int number;
  scanf("%d", &number);

  int result = number * 2;
  printf("%d", result);

  return 0;
}`,

    cpp: `#include <iostream>
using namespace std;

int main() {
  int number;
  cin >> number;

  int result = number * 2;
  cout << result;

  return 0;
}`,
  },

  orderingOptions: {
    pseudo: [
      "OUTPUT result",
      "INPUT number",
      "result ← number * 2",
    ],
    c: [
      'printf("%d", result);',
      'scanf("%d", &number);',
      "int result = number * 2;",
    ],
    cpp: [
      "cout << result;",
      "cin >> number;",
      "int result = number * 2;",
    ],
  },
};
