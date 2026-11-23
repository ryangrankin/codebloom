
const fs = require("fs");
const path = require("path");

const root = path.join(
  process.cwd(),
  "src/data/worlds/01-coding-foundations/05-loops-and-repetition"
);

const lessons = [
  {
    folder: "01-why-we-use-loops",
    variable: "whyWeUseLoops",
    id: "why-we-use-loops",
    title: "Why We Use Loops",
    xp: 20,
    description:
      "Loops repeat instructions without making us write the same code again and again. A loop has a condition or a fixed number of repetitions, and its body contains the instructions to repeat.",
    question: "What is the main purpose of a loop?",
    options: [
      "To repeat instructions",
      "To store information",
      "To compare two numbers",
      "To end a program",
    ],
    correctAnswer: 0,
    prompt1:
      "Write a loop that repeats exactly 3 times, using i as the counter. The variable i already exists.",
    answers1: {
      pseudo: ["FOR i = 0 TO 2\nEND FOR"],
      c: ["for (i = 0; i < 3; i++) {\n}"],
      cpp: ["for (i = 0; i < 3; i++) {\n}"],
    },
    prompt2:
      "The variables i and count already exist. Write a loop that repeats 5 times and increases count by 1 each time.",
    answers2: {
      pseudo: [
        "FOR i = 0 TO 4\nSET count = count + 1\nEND FOR",
      ],
      c: [
        "for (i = 0; i < 5; i++) {\ncount++;\n}",
        "for (i = 0; i < 5; i++) {\ncount += 1;\n}",
      ],
      cpp: [
        "for (i = 0; i < 5; i++) {\ncount++;\n}",
        "for (i = 0; i < 5; i++) {\ncount += 1;\n}",
      ],
    },
  },
  {
    folder: "02-for-loops",
    variable: "forLoops",
    id: "for-loops",
    title: "For Loops",
    xp: 25,
    description:
      "A for loop is useful when you know how many times something should repeat. In C and C++, it includes initialization, a condition, and an update: for (i = 0; i < 5; i++).",
    question: "How many times does for (i = 0; i < 4; i++) run?",
    options: ["3", "4", "5", "Forever"],
    correctAnswer: 1,
    prompt1:
      "The variable i already exists. Write a for loop that counts from 1 through 5. The loop body can be empty.",
    answers1: {
      pseudo: ["FOR i = 1 TO 5\nEND FOR"],
      c: ["for (i = 1; i <= 5; i++) {\n}"],
      cpp: ["for (i = 1; i <= 5; i++) {\n}"],
    },
    prompt2:
      "The variables i and total already exist. Write a for loop that adds the numbers 1 through 5 to total.",
    answers2: {
      pseudo: [
        "FOR i = 1 TO 5\nSET total = total + i\nEND FOR",
      ],
      c: [
        "for (i = 1; i <= 5; i++) {\ntotal += i;\n}",
        "for (i = 1; i <= 5; i++) {\ntotal = total + i;\n}",
      ],
      cpp: [
        "for (i = 1; i <= 5; i++) {\ntotal += i;\n}",
        "for (i = 1; i <= 5; i++) {\ntotal = total + i;\n}",
      ],
    },
  },
  {
    folder: "03-while-loops",
    variable: "whileLoops",
    id: "while-loops",
    title: "While Loops",
    xp: 25,
    description:
      "A while loop repeats as long as its condition is true. The loop body should usually change something that eventually makes the condition false.",
    question: "When does a while loop stop?",
    options: [
      "After one repetition",
      "When its condition becomes false",
      "Only when the app closes",
      "Whenever a variable exists",
    ],
    correctAnswer: 1,
    prompt1:
      "The variable count already exists and starts at 0. Write a while loop that increases count by 1 until it reaches 5.",
    answers1: {
      pseudo: [
        "WHILE count < 5\nSET count = count + 1\nEND WHILE",
      ],
      c: [
        "while (count < 5) {\ncount++;\n}",
        "while (count < 5) {\ncount += 1;\n}",
      ],
      cpp: [
        "while (count < 5) {\ncount++;\n}",
        "while (count < 5) {\ncount += 1;\n}",
      ],
    },
    prompt2:
      "The variable lives already exists and starts at 3. Write a while loop that decreases lives by 1 while lives > 0.",
    answers2: {
      pseudo: [
        "WHILE lives > 0\nSET lives = lives - 1\nEND WHILE",
      ],
      c: [
        "while (lives > 0) {\nlives--;\n}",
        "while (lives > 0) {\nlives -= 1;\n}",
      ],
      cpp: [
        "while (lives > 0) {\nlives--;\n}",
        "while (lives > 0) {\nlives -= 1;\n}",
      ],
    },
  },
  {
    folder: "04-loop-counters",
    variable: "loopCounters",
    id: "loop-counters",
    title: "Loop Counters",
    xp: 25,
    description:
      "Loop counters track how many repetitions have happened. They can count upward, downward, or in larger steps. Counters are also useful for keeping track of totals.",
    question: "What does i++ do in C or C++?",
    options: [
      "Adds 1 to i",
      "Subtracts 1 from i",
      "Sets i to 0",
      "Multiplies i by 2",
    ],
    correctAnswer: 0,
    prompt1:
      "The variable i already exists. Write a for loop that counts backward from 5 to 1. Leave the body empty.",
    answers1: {
      pseudo: ["FOR i = 5 DOWNTO 1\nEND FOR"],
      c: ["for (i = 5; i >= 1; i--) {\n}"],
      cpp: ["for (i = 5; i >= 1; i--) {\n}"],
    },
    prompt2:
      "The variable i already exists. Write a for loop that counts 0, 2, 4, 6, and 8. Leave the body empty.",
    answers2: {
      pseudo: ["FOR i = 0 TO 8 STEP 2\nEND FOR"],
      c: ["for (i = 0; i <= 8; i += 2) {\n}"],
      cpp: ["for (i = 0; i <= 8; i += 2) {\n}"],
    },
  },
  {
    folder: "05-nested-loops",
    variable: "nestedLoops",
    id: "nested-loops",
    title: "Nested Loops",
    xp: 30,
    description:
      "A nested loop is a loop inside another loop. The inner loop runs completely for every repetition of the outer loop. Nested loops are useful for grids, tables, and patterns.",
    question: "If an outer loop runs 3 times and its inner loop runs 4 times, how many inner-loop iterations occur?",
    options: ["3", "4", "7", "12"],
    correctAnswer: 3,
    prompt1:
      "The variables row and col already exist. Write nested loops for 2 rows and 3 columns. Leave the inner body empty.",
    answers1: {
      pseudo: [
        "FOR row = 0 TO 1\nFOR col = 0 TO 2\nEND FOR\nEND FOR",
      ],
      c: [
        "for (row = 0; row < 2; row++) {\nfor (col = 0; col < 3; col++) {\n}\n}",
      ],
      cpp: [
        "for (row = 0; row < 2; row++) {\nfor (col = 0; col < 3; col++) {\n}\n}",
      ],
    },
    prompt2:
      "The variables row, col, and count already exist. Write nested loops for 3 rows and 3 columns, increasing count by 1 for each grid cell.",
    answers2: {
      pseudo: [
        "FOR row = 0 TO 2\nFOR col = 0 TO 2\nSET count = count + 1\nEND FOR\nEND FOR",
      ],
      c: [
        "for (row = 0; row < 3; row++) {\nfor (col = 0; col < 3; col++) {\ncount++;\n}\n}",
      ],
      cpp: [
        "for (row = 0; row < 3; row++) {\nfor (col = 0; col < 3; col++) {\ncount++;\n}\n}",
      ],
    },
  },
  {
    folder: "06-infinite-loops",
    variable: "infiniteLoops",
    id: "infinite-loops",
    title: "Infinite Loops",
    xp: 25,
    description:
      "An infinite loop keeps running because its stopping condition never becomes false. A common mistake is forgetting to update the variable used in the condition.",
    question: "Why might while (x < 5) run forever?",
    options: [
      "Because x is never changed inside the loop",
      "Because x is a number",
      "Because while loops always run forever",
      "Because 5 is too small",
    ],
    correctAnswer: 0,
    prompt1:
      "The variable x already exists and starts at 0. Write a while loop that increments x until x reaches 5.",
    answers1: {
      pseudo: [
        "WHILE x < 5\nSET x = x + 1\nEND WHILE",
      ],
      c: ["while (x < 5) {\nx++;\n}"],
      cpp: ["while (x < 5) {\nx++;\n}"],
    },
    prompt2:
      "The variable energy already exists and starts at 10. Write a while loop that decreases energy by 2 while energy > 0.",
    answers2: {
      pseudo: [
        "WHILE energy > 0\nSET energy = energy - 2\nEND WHILE",
      ],
      c: ["while (energy > 0) {\nenergy -= 2;\n}"],
      cpp: ["while (energy > 0) {\nenergy -= 2;\n}"],
    },
  },
  {
    folder: "07-number-patterns",
    variable: "numberPatterns",
    id: "number-patterns",
    title: "Number Patterns",
    xp: 35,
    description:
      "Final challenge! Loops can generate number patterns by combining counters, arithmetic, and repetition. You'll use a loop to calculate a series of values.",
    question: "How many values are produced by a loop counting from 1 through 5?",
    options: ["4", "5", "6", "10"],
    correctAnswer: 1,
    prompt1:
      "The variables i and result already exist. Write a for loop that sets result to i * i for each value of i from 1 through 5.",
    answers1: {
      pseudo: [
        "FOR i = 1 TO 5\nSET result = i * i\nEND FOR",
      ],
      c: [
        "for (i = 1; i <= 5; i++) {\nresult = i * i;\n}",
      ],
      cpp: [
        "for (i = 1; i <= 5; i++) {\nresult = i * i;\n}",
      ],
    },
    prompt2:
      "Final challenge! The variables i, total, and square already exist. Write a loop from 1 through 5. Each time, calculate square = i * i, then add square to total.",
    answers2: {
      pseudo: [
        "FOR i = 1 TO 5\nSET square = i * i\nSET total = total + square\nEND FOR",
      ],
      c: [
        "for (i = 1; i <= 5; i++) {\nsquare = i * i;\ntotal += square;\n}",
      ],
      cpp: [
        "for (i = 1; i <= 5; i++) {\nsquare = i * i;\ntotal += square;\n}",
      ],
    },
  },
];

for (const lesson of lessons) {
  const directory = path.join(root, lesson.folder);
  fs.mkdirSync(directory, { recursive: true });

  const data = {
    id: lesson.id,
    title: lesson.title,
    chapter: "Loops & Repetition",
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
        correctAnswer: lesson.correctAnswer,
        explanation: lesson.description,
      },
      {
        type: "code-input",
        title: "Guided Coding",
        question: lesson.prompt1,
        codePrompt: {
          pseudo: "// Write your pseudocode",
          c: "// Write your C code",
          cpp: "// Write your C++ code",
        },
        acceptedAnswers: lesson.answers1,
        explanation: "Great work! Your loop is correct.",
      },
      {
        type: "code-input",
        title: "Independent Challenge",
        question: lesson.prompt2,
        codePrompt: {
          pseudo: "// Build your solution",
          c: "// Build your solution",
          cpp: "// Build your solution",
        },
        acceptedAnswers: lesson.answers2,
        explanation: "You solved the challenge!",
      },
    ],
    codeExamples: {
      pseudo: lesson.answers1.pseudo[0],
      c: lesson.answers1.c[0],
      cpp: lesson.answers1.cpp[0],
    },
  };

  const source =
    'import type { Lesson } from "../../../../types";\n\n' +
    `export const ${lesson.variable}: Lesson = ` +
    JSON.stringify(data, null, 2) +
    ";\n";

  fs.writeFileSync(
    path.join(directory, "lesson.ts"),
    source
  );

  console.log(`Created: ${lesson.title}`);
}

console.log("Chapter 5 generated successfully!");
