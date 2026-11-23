import type { Lesson } from "../../../../types";

export const parametersAndArguments: Lesson = {
  "id": "parameters-and-arguments",
  "title": "Parameters and Arguments",
  "chapter": "Functions",
  "world": "Coding Foundations",
  "xp": 25,
  "steps": [
    {
      "type": "explanation",
      "title": "Parameters and Arguments",
      "description": "Parameters are variables listed in a function definition. Arguments are the values supplied when calling the function. Parameters let one function work with different inputs."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "In add(3, 4), what are 3 and 4?",
      "options": [
        "Arguments",
        "Function names",
        "Return types",
        "Loops"
      ],
      "correctAnswer": 0,
      "explanation": "Parameters are variables listed in a function definition. Arguments are the values supplied when calling the function. Parameters let one function work with different inputs."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "Write a function named doubleNumber that takes an integer n and returns n * 2.",
      "codePrompt": {
        "pseudo": "// Write pseudocode",
        "c": "// Write C code",
        "cpp": "// Write C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION doubleNumber(n)\nRETURN n * 2\nEND FUNCTION"
        ],
        "c": [
          "int doubleNumber(int n) {\nreturn n * 2;\n}"
        ],
        "cpp": [
          "int doubleNumber(int n) {\nreturn n * 2;\n}"
        ]
      },
      "explanation": "Great job defining your function!"
    },

{
  type: "code-builder",
  title: "Build a Movie Ticket Calculator! 🎬",
  question:
    "Movie tickets cost $12 each. Create a function named ticketCost that takes the number of tickets as a parameter and returns the total price. Then call the function with 3 tickets and display the result.",
  codeBlocks: {
    pseudo: [
      "DISPLAY ticketCost(3)",
      "END FUNCTION",
      "RETURN tickets * 12",
      "FUNCTION ticketCost(tickets)",
    ],
    c: [
      'printf("%d", ticketCost(3));',
      "}",
      "return tickets * 12;",
      "int ticketCost(int tickets) {",
    ],
    cpp: [
      "cout << ticketCost(3);",
      "}",
      "return tickets * 12;",
      "int ticketCost(int tickets) {",
    ],
  },
  correctBlockOrder: [3, 2, 1, 0],
  explanation:
    "The parameter tickets receives the argument 3 when ticketCost(3) is called. The function multiplies 3 by 12 and returns 36. Parameters make the function reusable because you can call it with different ticket quantities!",
},

    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "Write a function named add that takes two integers a and b and returns their sum.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FUNCTION add(a, b)\nRETURN a + b\nEND FUNCTION"
        ],
        "c": [
          "int add(int a, int b) {\nreturn a + b;\n}"
        ],
        "cpp": [
          "int add(int a, int b) {\nreturn a + b;\n}"
        ]
      },
      "explanation": "You completed the coding challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "FUNCTION doubleNumber(n)\nRETURN n * 2\nEND FUNCTION",
    "c": "int doubleNumber(int n) {\nreturn n * 2;\n}",
    "cpp": "int doubleNumber(int n) {\nreturn n * 2;\n}"
  }
};
