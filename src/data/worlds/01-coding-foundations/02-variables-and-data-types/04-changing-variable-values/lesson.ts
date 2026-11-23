
import type { Lesson } from "../../../../types";

export const changingVariableValues: Lesson = {
  id: "changing-variable-values",
  title: "Changing Variable Values",
  chapter: "Variables & Data Types",
  world: "Coding Foundations",
  xp: 20,
  steps: [
    {
      type: "explanation",
      title: "Variables Can Change",
      description:
        "A variable's value can be updated while a program runs. For example, score might start at 10 and later become 20. In C and C++, you declare a variable with its type once, then assign new values without repeating the type.",
    },
    {
      type: "quiz",
      title: "Predict the Result",
      question:
        "What is the final value of score?\n\nint score = 10;\nscore = 20;",
      options: ["10", "20", "30", "An error"],
      correctAnswer: 1,
      explanation: "The second assignment replaces the previous value.",
    },
    {
      type: "code-input",
      title: "Update the Score",
      question:
        "A variable named score already exists. Write one statement that changes its value to 50.",
      codePrompt: {
        pseudo: "SET score = 10\n\n// Change score to 50",
        c: "int score = 10;\n// Write the next statement",
        cpp: "int score = 10;\n// Write the next statement",
      },
      acceptedAnswers: {
        pseudo: ["SET score = 50", "score = 50"],
        c: ["score = 50;", "score=50;"],
        cpp: ["score = 50;", "score=50;"],
      },
      explanation:
        "Because score already exists, you only need an assignment.",
    },
    {
      type: "quiz",
      title: "Increase a Value",
      question:
        "What is the final value of lives?\n\nint lives = 3;\nlives = lives + 1;",
      options: ["1", "3", "4", "An error"],
      correctAnswer: 2,
      explanation:
        "The program adds 1 to the current value of 3, producing 4.",
    },
    {
      type: "code-input",
      title: "Add Points",
      question:
        "A variable named points already exists. Write one statement that increases points by 5.",
      codePrompt: {
        pseudo: "SET points = 10\n// Increase points by 5",
        c: "int points = 10;\n// Increase points by 5",
        cpp: "int points = 10;\n// Increase points by 5",
      },
      acceptedAnswers: {
        pseudo: [
          "SET points = points + 5",
          "points = points + 5",
        ],
        c: [
          "points = points + 5;",
          "points += 5;",
          "points=points+5;",
        ],
        cpp: [
          "points = points + 5;",
          "points += 5;",
          "points=points+5;",
        ],
      },
      explanation:
        "You used the current value to calculate and store a new value!",
    },
  ],
  codeExamples: {
    pseudo: "SET score = 10\nSET score = 20\nDISPLAY score",
    c: 'int score = 10;\nscore = 20;\nprintf("%d\\n", score);',
    cpp: "int score = 10;\nscore = 20;\ncout << score << endl;",
  },
};
