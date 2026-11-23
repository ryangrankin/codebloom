
import type { Lesson } from "../../../../types";

export const whatIsAVariable: Lesson = {
  id: "what-is-a-variable",
  title: "What Is a Variable?",
  chapter: "Variables & Data Types",
  world: "Coding Foundations",
  xp: 20,

  steps: [
    {
      type: "explanation",
      title: "Meet Variables!",
      description:
        "Imagine you have a box with a label on it. You can put something inside the box and use the label to find it later. A variable works in a similar way! It gives a name to a place where your program stores information.",
    },
    {
      type: "explanation",
      title: "Give Your Information a Name",
      description:
        "Let's say you're making a game and want to remember a player's score. You could create a variable named score and give it the value 10. Later, your program can use that name to access the value. Different programming languages have different ways to create variables.",
    },
    {
      type: "quiz",
      title: "Check Your Understanding",
      question: "What is the main purpose of a variable?",
      options: [
        "To store information that a program can use",
        "To automatically fix errors in code",
        "To make a computer run faster",
        "To permanently save every program",
      ],
      correctAnswer: 0,
      explanation:
        "Variables let programs store and access information using meaningful names.",
    },
    {
      type: "ordering",
      title: "Use a Variable",
      question:
        "Put these instructions in the correct order to create and display a player's score.",
      options: [
        "DISPLAY the player's score",
        "CREATE a variable named score",
        "STORE the value 10 in score",
      ],
      correctOrder: [1, 2, 0],
      explanation:
        "First create the variable, then store a value in it, and finally display that value.",
    },

{
  type: "code-builder",
  title: "Build a Player Profile! 🎮",
  question:
    "You're creating a game! Build a program that stores a player's score and number of lives, then displays their score. Arrange the code blocks in the correct order.",
  codeBlocks: {
    pseudo: [
      "DISPLAY score",
      "SET lives = 3",
      "SET score = 10",
    ],
    c: [
      'printf("%d", score);',
      "int lives = 3;",
      "int score = 10;",
    ],
    cpp: [
      "cout << score;",
      "int lives = 3;",
      "int score = 10;",
    ],
  },
  correctBlockOrder: [2, 1, 0],
  explanation:
    "Great job! You created two variables: score stores 10, and lives stores 3. Then you displayed the player's score.",
},

    {
      type: "code-input",
      title: "Write Your First Variable!",
      question:
        "Create a variable named score and store the number 10 in it. Type only the requested statement.",
      codePrompt: {
        pseudo: `A player's score is 10.

Write a statement to store 10 in a variable named score.`,

        c: `int main(void) {
    // Declare an integer variable named score
    // and initialize it to 10.
    return 0;
}`,

        cpp: `int main() {
    // Declare an integer variable named score
    // and initialize it to 10.
    return 0;
}`,
      },
      acceptedAnswers: {
        pseudo: [
          "SET score = 10",
          "score = 10",
        ],
        c: [
          "int score = 10;",
          "int score=10;",
        ],
        cpp: [
          "int score = 10;",
          "int score=10;",
        ],
      },
      placeholder: "Write your code here...",
      explanation:
        "You created a variable named score and gave it the value 10! In C and C++, int tells the computer that score stores an integer, or whole number.",
    },
    {
      type: "quiz",
      title: "Read the Code",
      question:
        "A program contains the instruction SET lives = 3. What information is stored in the variable lives?",
      options: [
        "The number 3",
        "The word lives",
        "The number 0",
        "Nothing",
      ],
      correctAnswer: 0,
      explanation:
        "The variable is named lives, and its stored value is 3. The name helps us understand what the number represents.",
    },
  ],

  codeExamples: {
    pseudo: `SET score = 10
DISPLAY score`,

    c: `#include <stdio.h>

int main(void) {
    int score = 10;
    printf("%d\\n", score);
    return 0;
}`,

    cpp: `#include <iostream>
using namespace std;

int main() {
    int score = 10;
    cout << score << endl;
    return 0;
}`,
  },

  orderingOptions: {
    pseudo: [
      "DISPLAY score",
      "CREATE a variable named score",
      "SET score = 10",
    ],

    c: [
      'printf("%d\\n", score);',
      "Declare an integer variable named score",
      "int score = 10;",
    ],

    cpp: [
      "cout << score << endl;",
      "Declare an integer variable named score",
      "int score = 10;",
    ],
  },
};
