
import type { Lesson } from "../../../../types";

export const writingYourFirstPseudocode: Lesson = {
  id: "writing-your-first-pseudocode",
  title: "Writing Your First Pseudocode",
  chapter: "Thinking Like a Programmer",
  world: "Coding Foundations",
  xp: 15,

  steps: [
    {
      type: "explanation",
      title: "What Is Pseudocode?",
      description:
        "Pseudocode is a way to plan a program using simple, human-readable instructions. It looks a little like code, but it doesn't have to follow the strict rules of a programming language. Programmers use it to organize their ideas before writing real code.",
    },
    {
      type: "explanation",
      title: "Writing Instructions",
      description:
        "Good pseudocode describes actions clearly and in the order they should happen. For example, to greet someone, you could write: 1. Ask for their name. 2. Save their answer. 3. Display a greeting using their name. The goal is to describe the logic, not memorize programming syntax.",
    },
    {
      type: "quiz",
      title: "Choose the Best Pseudocode",
      question:
        "Which instruction is the clearest example of pseudocode?",
      options: [
        "DISPLAY 'Hello, world!'",
        "printf(\"Hello, world!\");",
        "Make the computer do something nice",
        "#include <stdio.h>",
      ],
      correctAnswer: 0,
      explanation:
        "DISPLAY 'Hello, world!' describes an action clearly without requiring the exact syntax of a programming language.",
    },
    {
      type: "ordering",
      title: "Build Your First Algorithm",
      question:
        "Arrange these instructions to create a program that asks for someone's name and greets them.",
      options: [
        "DISPLAY a greeting with the name",
        "ASK the user for their name",
        "STORE the name",
      ],
      correctOrder: [1, 2, 0],
      explanation:
        "First, ask for the name. Next, store the answer. Finally, use the stored name to display a greeting.",
    },
    {
      type: "quiz",
      title: "Think Like a Programmer",
      question:
        "Why might a programmer write pseudocode before writing C or C++?",
      options: [
        "Because pseudocode automatically runs on a computer",
        "Because pseudocode replaces all programming languages",
        "Because pseudocode helps plan the steps of a program",
        "Because pseudocode must use perfect C++ syntax",
      ],
      correctAnswer: 2,
      explanation:
        "Pseudocode helps programmers focus on the logic of a solution before worrying about language-specific syntax.",
    },

{
  type: "code-builder",
  title: "Build a Greeting Program! 🌸",
  question:
    "Build a program that stores a person's name and displays a greeting. Put the code blocks in the correct order.",
  codeBlocks: {
    pseudo: [
      'DISPLAY "Hello, " + name',
      'SET name = "Alex"',
    ],
    c: [
      'printf("Hello, %s!", name);',
      'char name[] = "Alex";',
    ],
    cpp: [
      'cout << "Hello, " << name << "!";',
      'string name = "Alex";',
    ],
  },
  correctBlockOrder: [1, 0],
  explanation:
    "First, we store the name Alex in a variable. Then we use that variable to display a personalized greeting!",
},

  ],

  codeExamples: {
    pseudo: `ASK user for name
STORE name
DISPLAY "Hello, " + name`,

    c: `#include <stdio.h>

int main(void) {
    char name[50];

    printf("What is your name? ");
    scanf("%49s", name);

    printf("Hello, %s!\\n", name);

    return 0;
}`,

    cpp: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;

    cout << "What is your name? ";
    getline(cin, name);

    cout << "Hello, " << name << "!" << endl;

    return 0;
}`,
  },

  orderingOptions: {
    pseudo: [
      "DISPLAY a greeting with the name",
      "ASK the user for their name",
      "STORE the name",
    ],

    c: [
      'printf("Hello, %s!\\n", name);',
      'printf("What is your name? ");',
      'scanf("%49s", name);',
    ],

    cpp: [
      'cout << "Hello, " << name << "!";',
      'cout << "What is your name? ";',
      "getline(cin, name);",
    ],
  },
};
