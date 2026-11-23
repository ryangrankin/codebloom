import type { Lesson } from "../../../../types";

export const definingFunctions: Lesson = {
  "id": "defining-functions",
  "title": "Defining Functions",
  "chapter": "Functions",
  "world": "Coding Foundations",
  "xp": 25,
  "steps": [
    {
      "type": "explanation",
      "title": "Defining Functions",
      "description": "A function definition gives a function its name and body. In C and C++, a void function performs an action without returning a value. A function only runs when it is called."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "What does void mean in a C or C++ function?",
      "options": [
        "The function returns no value",
        "The function has no name",
        "The function must run forever",
        "The function cannot contain code"
      ],
      "correctAnswer": 0,
      "explanation": "A function definition gives a function its name and body. In C and C++, a void function performs an action without returning a value. A function only runs when it is called."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "Write a void function named sayHi that prints Hi.",
      "codePrompt": {
        "pseudo": "// Write pseudocode",
        "c": "// Write C code",
        "cpp": "// Write C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION sayHi()\nPRINT \"Hi\"\nEND FUNCTION"
        ],
        "c": [
          "void sayHi() {\nprintf(\"Hi\");\n}"
        ],
        "cpp": [
          "void sayHi() {\ncout << \"Hi\";\n}"
        ]
      },
      "explanation": "Great job defining your function!"
    },

{
  type: "code-builder",
  title: "Build a Game Score Display! 🏆",
  question:
    "A video game needs a function named showScore that displays 'Your score: 100'. Arrange the blocks to define the function, put the message inside it, and call the function to display the score.",
  codeBlocks: {
    pseudo: [
      "showScore()",
      "END FUNCTION",
      'PRINT "Your score: 100"',
      "FUNCTION showScore()",
    ],
    c: [
      "showScore();",
      "}",
      'printf("Your score: 100");',
      "void showScore() {",
    ],
    cpp: [
      "showScore();",
      "}",
      'cout << "Your score: 100";',
      "void showScore() {",
    ],
  },
  correctBlockOrder: [3, 2, 1, 0],
  explanation:
    "The function definition tells the program what showScore does. The print statement belongs inside the function body. Calling showScore() executes that code and displays the player's score. Since the function returns no value, it uses void in C and C++.",
},

    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "Write a void function named showScore that prints 100.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION showScore()\nPRINT 100\nEND FUNCTION"
        ],
        "c": [
          "void showScore() {\nprintf(\"%d\", 100);\n}"
        ],
        "cpp": [
          "void showScore() {\ncout << 100;\n}"
        ]
      },
      "explanation": "You completed the coding challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "FUNCTION sayHi()\nPRINT \"Hi\"\nEND FUNCTION",
    "c": "void sayHi() {\nprintf(\"Hi\");\n}",
    "cpp": "void sayHi() {\ncout << \"Hi\";\n}"
  }
};
