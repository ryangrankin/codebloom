
import type { Lesson } from "../../../../types";

export const workingWithUserInput: Lesson = {
  id: "working-with-user-input",
  title: "Working with User Input",
  chapter: "Variables & Data Types",
  world: "Coding Foundations",
  xp: 20,

  steps: [
    {
      type: "explanation",
      title: "Programs Can Ask Questions",
      description:
        "Programs don't always know their values ahead of time. User input lets someone provide information while a program runs. For example, a game might ask for the player's age or a store might ask how many items someone wants.",
    },
    {
      type: "explanation",
      title: "Reading Input",
      description:
        "In pseudocode, we can write INPUT age. In C, scanf can read a number into a variable. In C++, cin can read a value into a variable. The variable must already be declared in C and C++.",
    },
    {
      type: "quiz",
      title: "Input or Output?",
      question: "Which action is an example of user input?",
      options: [
        "Displaying a score",
        "Asking someone to enter their age",
        "Printing a receipt",
        "Showing an error message",
      ],
      correctAnswer: 1,
      explanation:
        "Input brings information into the program. Output sends information out.",
    },
    {
      type: "code-input",
      title: "Read an Age",
      question:
        "The integer variable age already exists. Write a statement that reads a value into age.",
      codePrompt: {
        pseudo: "Write an instruction that receives age from the user.",
        c: "#include <stdio.h>\nint main(void) {\n    int age;\n    // Read age here\n    return 0;\n}",
        cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int age;\n    // Read age here\n    return 0;\n}",
      },
      acceptedAnswers: {
        pseudo: ["INPUT age", "READ age"],
        c: ['scanf("%d", &age);'],
        cpp: ["cin >> age;", "std::cin >> age;"],
      },
      explanation:
        "Great! Your statement reads an integer entered by the user.",
    },
    {
      type: "code-input",
      title: "Read a Quantity",
      question:
        "The integer variable quantity already exists. Write a statement that reads a value into quantity.",
      codePrompt: {
        pseudo: "INPUT ______",
        c: "int quantity;\n// Read an integer into quantity",
        cpp: "int quantity;\n// Read an integer into quantity",
      },
      acceptedAnswers: {
        pseudo: ["INPUT quantity", "READ quantity"],
        c: ['scanf("%d", &quantity);'],
        cpp: ["cin >> quantity;", "std::cin >> quantity;"],
      },
      explanation:
        "You can now read values into different variables.",
    },
  ],

  codeExamples: {
    pseudo: "INPUT age\nDISPLAY age",
    c: '#include <stdio.h>\nint main(void) {\n    int age;\n    scanf("%d", &age);\n    printf("%d\\n", age);\n    return 0;\n}',
    cpp: '#include <iostream>\nusing namespace std;\nint main() {\n    int age;\n    cin >> age;\n    cout << age << endl;\n    return 0;\n}',
  },
};
