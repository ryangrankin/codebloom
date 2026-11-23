
import type { Lesson } from "../../../../types";

export const creatingVariables: Lesson = {
  id: "creating-variables",
  title: "Creating Variables",
  chapter: "Variables & Data Types",
  world: "Coding Foundations",
  xp: 20,
  steps: [
    {
      type: "explanation",
      title: "Creating Variables",
      description:
        "A variable needs a name and a value. In C and C++, you also declare its type. For example, int age = 18; creates an integer variable named age and stores 18.",
    },
    {
      type: "quiz",
      title: "Choose a Variable Name",
      question: "Which is a valid variable name in C and C++?",
      options: ["2score", "player_score", "player-score", "my score"],
      correctAnswer: 1,
      explanation:
        "Variable names can contain letters, digits, and underscores, but cannot start with a digit.",
    },
    {
      type: "code-input",
      title: "Create an Age Variable",
      question: "Create an integer variable named age with the value 18.",
      codePrompt: {
        pseudo: "Create age and store 18.",
        c: "int main(void) {\n    // Your statement here\n    return 0;\n}",
        cpp: "int main() {\n    // Your statement here\n    return 0;\n}",
      },
      acceptedAnswers: {
        pseudo: ["SET age = 18", "age = 18"],
        c: ["int age = 18;", "int age=18;"],
        cpp: ["int age = 18;", "int age=18;"],
      },
      explanation: "You declared and initialized your variable!",
    },
    {
      type: "quiz",
      title: "Understand Initialization",
      question: "What does the = symbol do in int age = 18;?",
      options: [
        "Compares two values",
        "Assigns the value 18 to age",
        "Displays age",
        "Deletes the variable",
      ],
      correctAnswer: 1,
      explanation: "The assignment operator stores a value in a variable.",
    },
    {
      type: "code-input",
      title: "Create a Score Variable",
      question: "Create an integer variable named score with the value 100.",
      codePrompt: {
        pseudo: "Store 100 in score.",
        c: "// Write an integer declaration",
        cpp: "// Write an integer declaration",
      },
      acceptedAnswers: {
        pseudo: ["SET score = 100", "score = 100"],
        c: ["int score = 100;", "int score=100;"],
        cpp: ["int score = 100;", "int score=100;"],
      },
      explanation: "Great! You can now create your own integer variables.",
    },
  ],
  codeExamples: {
    pseudo: "SET age = 18\nDISPLAY age",
    c: '#include <stdio.h>\nint main(void) {\n    int age = 18;\n    printf("%d\\n", age);\n    return 0;\n}',
    cpp: '#include <iostream>\nusing namespace std;\nint main() {\n    int age = 18;\n    cout << age << endl;\n    return 0;\n}',
  },
};
