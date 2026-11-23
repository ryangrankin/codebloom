
const fs = require("fs");
const path = require("path");

const root = path.join(
  process.cwd(),
  "src/data/worlds/01-coding-foundations/07-putting-it-together"
);

const lessons = [
  {
    folder: "01-reading-a-full-program",
    variable: "readingAFullProgram",
    id: "reading-a-full-program",
    title: "Reading a Full Program",
    xp: 25,
    description:
      "A complete program combines declarations, calculations, decisions, loops, and functions. Read code from its starting point and follow the order in which instructions execute.",
    question:
      "What does a return statement do inside a function?",
    options: [
      "Returns control and possibly a value to the caller",
      "Repeats the function",
      "Creates a loop",
      "Declares every variable",
    ],
    correct: 0,
    guided:
      "Write a function named doubleValue that takes an integer x and returns x * 2.",
    guidedAnswers: {
      pseudo: [
        "FUNCTION doubleValue(x)\nRETURN x * 2\nEND FUNCTION",
      ],
      c: [
        "int doubleValue(int x) {\nreturn x * 2;\n}",
      ],
      cpp: [
        "int doubleValue(int x) {\nreturn x * 2;\n}",
      ],
    },
    challenge:
      "Write TWO functions. Define doubleValue(x) to return x * 2. Then define calculate(x) to return doubleValue(x) + 5.",
    challengeAnswers: {
      pseudo: [
        "FUNCTION doubleValue(x)\nRETURN x * 2\nEND FUNCTION\nFUNCTION calculate(x)\nRETURN doubleValue(x) + 5\nEND FUNCTION",
      ],
      c: [
        "int doubleValue(int x) {\nreturn x * 2;\n}\nint calculate(int x) {\nreturn doubleValue(x) + 5;\n}",
      ],
      cpp: [
        "int doubleValue(int x) {\nreturn x * 2;\n}\nint calculate(int x) {\nreturn doubleValue(x) + 5;\n}",
      ],
    },
  },
  {
    folder: "02-tracing-code",
    variable: "tracingCode",
    id: "tracing-code",
    title: "Tracing Code",
    xp: 25,
    description:
      "Tracing code means following each instruction and recording how values change. It helps you understand program behavior and find mistakes.",
    question:
      "If x starts at 2 and a loop adds 3 to x twice, what is x afterward?",
    options: ["5", "6", "8", "12"],
    correct: 2,
    guided:
      "The variables x and i already exist. Write a loop that adds 3 to x exactly twice.",
    guidedAnswers: {
      pseudo: [
        "FOR i = 0 TO 1\nSET x = x + 3\nEND FOR",
      ],
      c: [
        "for (i = 0; i < 2; i++) {\nx += 3;\n}",
      ],
      cpp: [
        "for (i = 0; i < 2; i++) {\nx += 3;\n}",
      ],
    },
    challenge:
      "The variables i and total already exist. Write a loop that adds the numbers 1 through 4 to total.",
    challengeAnswers: {
      pseudo: [
        "FOR i = 1 TO 4\nSET total = total + i\nEND FOR",
      ],
      c: [
        "for (i = 1; i <= 4; i++) {\ntotal += i;\n}",
      ],
      cpp: [
        "for (i = 1; i <= 4; i++) {\ntotal += i;\n}",
      ],
    },
  },
  {
    folder: "03-planning-with-pseudocode",
    variable: "planningWithPseudocode",
    id: "planning-with-pseudocode",
    title: "Planning with Pseudocode",
    xp: 30,
    description:
      "Pseudocode describes an algorithm without requiring exact programming syntax. Start by identifying inputs, processing steps, decisions, and outputs. Then translate the plan into code.",
    question:
      "Why is pseudocode useful before programming?",
    options: [
      "It helps organize the algorithm",
      "It automatically compiles to C++",
      "It removes the need for testing",
      "It guarantees the program has no bugs",
    ],
    correct: 0,
    guided:
      "The variables score and passed already exist. Write a conditional that sets passed to 1 if score >= 70, otherwise 0.",
    guidedAnswers: {
      pseudo: [
        "IF score >= 70 THEN\nSET passed = 1\nELSE\nSET passed = 0\nEND IF",
      ],
      c: [
        "if (score >= 70) {\npassed = 1;\n} else {\npassed = 0;\n}",
      ],
      cpp: [
        "if (score >= 70) {\npassed = 1;\n} else {\npassed = 0;\n}",
      ],
    },
    challenge:
      "Write a function named isPassing that takes an integer score and returns 1 if score >= 70, otherwise 0.",
    challengeAnswers: {
      pseudo: [
        "FUNCTION isPassing(score)\nIF score >= 70 THEN\nRETURN 1\nELSE\nRETURN 0\nEND IF\nEND FUNCTION",
      ],
      c: [
        "int isPassing(int score) {\nif (score >= 70) {\nreturn 1;\n} else {\nreturn 0;\n}\n}",
      ],
      cpp: [
        "int isPassing(int score) {\nif (score >= 70) {\nreturn 1;\n} else {\nreturn 0;\n}\n}",
      ],
    },
  },
  {
    folder: "04-debugging",
    variable: "debugging",
    id: "debugging",
    title: "Debugging",
    xp: 30,
    description:
      "Debugging means identifying and fixing errors. Syntax errors prevent code from compiling. Logic errors allow code to run but produce incorrect results. Testing helps uncover both.",
    question:
      "A loop is supposed to run five times but runs forever. What should you inspect first?",
    options: [
      "Whether the loop condition can become false",
      "The app's background color",
      "The function name's length",
      "The number of comments",
    ],
    correct: 0,
    guided:
      "The variable count starts at 0. Fix an infinite loop by writing a while loop that increments count until it reaches 5.",
    guidedAnswers: {
      pseudo: [
        "WHILE count < 5\nSET count = count + 1\nEND WHILE",
      ],
      c: [
        "while (count < 5) {\ncount++;\n}",
      ],
      cpp: [
        "while (count < 5) {\ncount++;\n}",
      ],
    },
    challenge:
      "Write a function named safeDivide that takes integers a and b. Return 0 if b is 0; otherwise return a / b.",
    challengeAnswers: {
      pseudo: [
        "FUNCTION safeDivide(a, b)\nIF b == 0 THEN\nRETURN 0\nELSE\nRETURN a / b\nEND IF\nEND FUNCTION",
      ],
      c: [
        "int safeDivide(int a, int b) {\nif (b == 0) {\nreturn 0;\n} else {\nreturn a / b;\n}\n}",
      ],
      cpp: [
        "int safeDivide(int a, int b) {\nif (b == 0) {\nreturn 0;\n} else {\nreturn a / b;\n}\n}",
      ],
    },
  },
  {
    folder: "05-final-project",
    variable: "finalProject",
    id: "final-project",
    title: "Final Project",
    xp: 50,
    description:
      "Build a mini-program that combines functions, loops, arithmetic, and conditions. Break the problem into smaller functions and reuse them.",
    question:
      "What is a good first step when building a larger program?",
    options: [
      "Break the problem into smaller tasks",
      "Write every line without planning",
      "Avoid testing until the end",
      "Put all code in one enormous function",
    ],
    correct: 0,
    guided:
      "Write a function named bonus that takes integer score and returns score + 10.",
    guidedAnswers: {
      pseudo: [
        "FUNCTION bonus(score)\nRETURN score + 10\nEND FUNCTION",
      ],
      c: [
        "int bonus(int score) {\nreturn score + 10;\n}",
      ],
      cpp: [
        "int bonus(int score) {\nreturn score + 10;\n}",
      ],
    },
    challenge:
      "Build TWO functions. First, define bonus(score) to return score + 10. Then define finalScore(score) to return bonus(score) * 2 when score >= 50, otherwise return bonus(score).",
    challengeAnswers: {
      pseudo: [
        "FUNCTION bonus(score)\nRETURN score + 10\nEND FUNCTION\nFUNCTION finalScore(score)\nIF score >= 50 THEN\nRETURN bonus(score) * 2\nELSE\nRETURN bonus(score)\nEND IF\nEND FUNCTION",
      ],
      c: [
        "int bonus(int score) {\nreturn score + 10;\n}\nint finalScore(int score) {\nif (score >= 50) {\nreturn bonus(score) * 2;\n} else {\nreturn bonus(score);\n}\n}",
      ],
      cpp: [
        "int bonus(int score) {\nreturn score + 10;\n}\nint finalScore(int score) {\nif (score >= 50) {\nreturn bonus(score) * 2;\n} else {\nreturn bonus(score);\n}\n}",
      ],
    },
  },
  {
    folder: "06-world-mastery-quiz",
    variable: "worldMasteryQuiz",
    id: "world-mastery-quiz",
    title: "World Mastery Quiz",
    xp: 40,
    description:
      "Congratulations on reaching the final lesson of World 1! This challenge brings together variables, operators, conditions, loops, and functions.",
    question:
      "Which programming structure repeats instructions while a condition is true?",
    options: [
      "A while loop",
      "A variable",
      "A return statement",
      "An assignment",
    ],
    correct: 0,
    guided:
      "Write a function named triple that takes integer x and returns x * 3.",
    guidedAnswers: {
      pseudo: [
        "FUNCTION triple(x)\nRETURN x * 3\nEND FUNCTION",
      ],
      c: [
        "int triple(int x) {\nreturn x * 3;\n}",
      ],
      cpp: [
        "int triple(int x) {\nreturn x * 3;\n}",
      ],
    },
    challenge:
      "Final mastery challenge! Write a function named sumToN that takes integer n, uses a loop to add all integers from 1 through n, and returns the total.",
    challengeAnswers: {
      pseudo: [
        "FUNCTION sumToN(n)\nSET total = 0\nFOR i = 1 TO n\nSET total = total + i\nEND FOR\nRETURN total\nEND FUNCTION",
      ],
      c: [
        "int sumToN(int n) {\nint total = 0;\nfor (int i = 1; i <= n; i++) {\ntotal += i;\n}\nreturn total;\n}",
      ],
      cpp: [
        "int sumToN(int n) {\nint total = 0;\nfor (int i = 1; i <= n; i++) {\ntotal += i;\n}\nreturn total;\n}",
      ],
    },
  },
];

for (const lesson of lessons) {
  const dir = path.join(root, lesson.folder);
  fs.mkdirSync(dir, { recursive: true });

  const data = {
    id: lesson.id,
    title: lesson.title,
    chapter: "Putting It Together",
    world: "Coding Foundations",
    xp: lesson.xp,
    steps: [
      {
        type: "explanation",
        title: lesson.title,
        description: lesson.description,
      },
      {
        type: "quiz",
        title: "Check Your Understanding",
        question: lesson.question,
        options: lesson.options,
        correctAnswer: lesson.correct,
        explanation: lesson.description,
      },
      {
        type: "code-input",
        title: "Guided Coding",
        question: lesson.guided,
        codePrompt: {
          pseudo: "// Write your pseudocode",
          c: "// Write your C code",
          cpp: "// Write your C++ code",
        },
        acceptedAnswers: lesson.guidedAnswers,
        explanation: "Great work!",
      },
      {
        type: "code-input",
        title: "Independent Challenge",
        question: lesson.challenge,
        codePrompt: {
          pseudo: "// Build your solution",
          c: "// Build your solution",
          cpp: "// Build your solution",
        },
        acceptedAnswers: lesson.challengeAnswers,
        explanation: "You completed the challenge!",
      },
    ],
    codeExamples: {
      pseudo: lesson.guidedAnswers.pseudo[0],
      c: lesson.guidedAnswers.c[0],
      cpp: lesson.guidedAnswers.cpp[0],
    },
  };

  const source =
    'import type { Lesson } from "../../../../types";\n\n' +
    `export const ${lesson.variable}: Lesson = ` +
    JSON.stringify(data, null, 2) +
    ";\n";

  fs.writeFileSync(
    path.join(dir, "lesson.ts"),
    source
  );

  console.log(`Created: ${lesson.title}`);
}

console.log("Chapter 7 generated successfully!");
