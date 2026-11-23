
const fs = require("fs");
const path = require("path");

const root = path.join(
  process.cwd(),
  "src/data/worlds/01-coding-foundations/04-conditions-and-decisions"
);

const lessons = [
  {
    folder: "01-true-and-false-expressions",
    variable: "trueAndFalseExpressions",
    id: "true-and-false-expressions",
    title: "True and False Expressions",
    xp: 20,
    description:
      "Conditions are expressions that evaluate to true or false. They help programs decide what to do next. For example, age >= 18 checks whether someone is at least 18.",
    question: "What does 5 > 10 evaluate to?",
    options: ["True", "False", "5", "10"],
    correctAnswer: 1,
    prompt1:
      "The variables age and isAdult already exist. Store whether age is at least 18 in isAdult.",
    answers1: {
      pseudo: ["SET isAdult = age >= 18", "isAdult = age >= 18"],
      c: ["isAdult = age >= 18;"],
      cpp: ["isAdult = age >= 18;"],
    },
    prompt2:
      "The variables score and passed already exist. Store whether score is at least 70 in passed.",
    answers2: {
      pseudo: ["SET passed = score >= 70", "passed = score >= 70"],
      c: ["passed = score >= 70;"],
      cpp: ["passed = score >= 70;"],
    },
  },
  {
    folder: "02-if-statements",
    variable: "ifStatements",
    id: "if-statements",
    title: "If Statements",
    xp: 20,
    description:
      "An if statement runs code only when its condition is true. In C and C++, put the condition in parentheses and the instructions inside curly braces.",
    question: "When does the code inside an if statement run?",
    options: [
      "Always",
      "Only when the condition is true",
      "Only when the condition is false",
      "Never",
    ],
    correctAnswer: 1,
    prompt1:
      "The variables score and passed already exist. Write an if statement that sets passed to 1 when score >= 70.",
    answers1: {
      pseudo: [
        "IF score >= 70 THEN\nSET passed = 1\nEND IF",
        "IF score >= 70\nSET passed = 1\nEND IF",
      ],
      c: ["if (score >= 70) {\npassed = 1;\n}"],
      cpp: ["if (score >= 70) {\npassed = 1;\n}"],
    },
    prompt2:
      "The variables temperature and warning already exist. Write an if statement that sets warning to 1 when temperature > 100.",
    answers2: {
      pseudo: [
        "IF temperature > 100 THEN\nSET warning = 1\nEND IF",
        "IF temperature > 100\nSET warning = 1\nEND IF",
      ],
      c: ["if (temperature > 100) {\nwarning = 1;\n}"],
      cpp: ["if (temperature > 100) {\nwarning = 1;\n}"],
    },
  },
  {
    folder: "03-else-and-else-if",
    variable: "elseAndElseIf",
    id: "else-and-else-if",
    title: "Else and Else If",
    xp: 25,
    description:
      "Use else when you need an alternative action. Use else if to test additional conditions. The program follows the first matching branch.",
    question: "What happens when the if condition is false and there is an else block?",
    options: [
      "The program stops",
      "The else block runs",
      "Both blocks run",
      "The if block runs anyway",
    ],
    correctAnswer: 1,
    prompt1:
      "The variables score and passed already exist. Set passed to 1 if score >= 70, otherwise set passed to 0.",
    answers1: {
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
    prompt2:
      "The variables temperature and status already exist. Set status to 2 if temperature > 90, to 1 if temperature > 70, otherwise to 0.",
    answers2: {
      pseudo: [
        "IF temperature > 90 THEN\nSET status = 2\nELSE IF temperature > 70 THEN\nSET status = 1\nELSE\nSET status = 0\nEND IF",
      ],
      c: [
        "if (temperature > 90) {\nstatus = 2;\n} else if (temperature > 70) {\nstatus = 1;\n} else {\nstatus = 0;\n}",
      ],
      cpp: [
        "if (temperature > 90) {\nstatus = 2;\n} else if (temperature > 70) {\nstatus = 1;\n} else {\nstatus = 0;\n}",
      ],
    },
  },
  {
    folder: "04-nested-conditions",
    variable: "nestedConditions",
    id: "nested-conditions",
    title: "Nested Conditions",
    xp: 25,
    description:
      "A nested condition is an if statement inside another if statement. It lets programs make a second decision only after the first condition is satisfied.",
    question: "What is a nested if statement?",
    options: [
      "An if statement inside another if statement",
      "A loop",
      "A variable",
      "An if statement without a condition",
    ],
    correctAnswer: 0,
    prompt1:
      "The variables age, hasTicket, and allowed already exist. Use nested if statements to set allowed to 1 when age >= 18 and hasTicket is true.",
    answers1: {
      pseudo: [
        "IF age >= 18 THEN\nIF hasTicket THEN\nSET allowed = 1\nEND IF\nEND IF",
      ],
      c: [
        "if (age >= 18) {\nif (hasTicket) {\nallowed = 1;\n}\n}",
      ],
      cpp: [
        "if (age >= 18) {\nif (hasTicket) {\nallowed = 1;\n}\n}",
      ],
    },
    prompt2:
      "The variables loggedIn, isAdmin, and access already exist. Use nested if statements to set access to 1 only when loggedIn and isAdmin are true.",
    answers2: {
      pseudo: [
        "IF loggedIn THEN\nIF isAdmin THEN\nSET access = 1\nEND IF\nEND IF",
      ],
      c: [
        "if (loggedIn) {\nif (isAdmin) {\naccess = 1;\n}\n}",
      ],
      cpp: [
        "if (loggedIn) {\nif (isAdmin) {\naccess = 1;\n}\n}",
      ],
    },
  },
  {
    folder: "05-combining-conditions",
    variable: "combiningConditions",
    id: "combining-conditions",
    title: "Combining Conditions",
    xp: 25,
    description:
      "Logical operators let you combine conditions. In C and C++, && means AND, || means OR, and ! means NOT. Combining conditions can make decisions more concise.",
    question: "Which operator means OR in C and C++?",
    options: ["&&", "||", "!", "=="],
    correctAnswer: 1,
    prompt1:
      "The variables age, hasTicket, and allowed already exist. Use one if statement with AND to set allowed to 1 when age >= 18 and hasTicket is true.",
    answers1: {
      pseudo: [
        "IF age >= 18 AND hasTicket THEN\nSET allowed = 1\nEND IF",
      ],
      c: [
        "if (age >= 18 && hasTicket) {\nallowed = 1;\n}",
      ],
      cpp: [
        "if (age >= 18 && hasTicket) {\nallowed = 1;\n}",
      ],
    },
    prompt2:
      "The variables isWeekend, isHoliday, and dayOff already exist. Use one if statement with OR to set dayOff to 1 when either condition is true.",
    answers2: {
      pseudo: [
        "IF isWeekend OR isHoliday THEN\nSET dayOff = 1\nEND IF",
      ],
      c: [
        "if (isWeekend || isHoliday) {\ndayOff = 1;\n}",
      ],
      cpp: [
        "if (isWeekend || isHoliday) {\ndayOff = 1;\n}",
      ],
    },
  },
  {
    folder: "06-grade-calculator",
    variable: "gradeCalculator",
    id: "grade-calculator",
    title: "Grade Calculator",
    xp: 35,
    description:
      "It's time to combine everything! A grade calculator checks a numeric score and assigns a grade. Order matters: check the highest score range first.",
    question: "Why should a grade calculator check score >= 90 before score >= 80?",
    options: [
      "Because the highest matching condition should run first",
      "Because 90 is an odd number",
      "Because else statements cannot compare numbers",
      "It makes no difference",
    ],
    correctAnswer: 0,
    prompt1:
      "The variables score and grade already exist. Assign grade = 4 for scores >= 90, grade = 3 for scores >= 80, and grade = 2 otherwise. Write the complete conditional chain.",
    answers1: {
      pseudo: [
        "IF score >= 90 THEN\nSET grade = 4\nELSE IF score >= 80 THEN\nSET grade = 3\nELSE\nSET grade = 2\nEND IF",
      ],
      c: [
        "if (score >= 90) {\ngrade = 4;\n} else if (score >= 80) {\ngrade = 3;\n} else {\ngrade = 2;\n}",
      ],
      cpp: [
        "if (score >= 90) {\ngrade = 4;\n} else if (score >= 80) {\ngrade = 3;\n} else {\ngrade = 2;\n}",
      ],
    },
    prompt2:
      "Final challenge! The variables score, grade, and passed already exist. First set grade to 4 when score >= 90, to 3 when score >= 80, otherwise to 2. Then set passed to 1 when score >= 70, otherwise to 0.",
    answers2: {
      pseudo: [
        "IF score >= 90 THEN\nSET grade = 4\nELSE IF score >= 80 THEN\nSET grade = 3\nELSE\nSET grade = 2\nEND IF\nIF score >= 70 THEN\nSET passed = 1\nELSE\nSET passed = 0\nEND IF",
      ],
      c: [
        "if (score >= 90) {\ngrade = 4;\n} else if (score >= 80) {\ngrade = 3;\n} else {\ngrade = 2;\n}\nif (score >= 70) {\npassed = 1;\n} else {\npassed = 0;\n}",
      ],
      cpp: [
        "if (score >= 90) {\ngrade = 4;\n} else if (score >= 80) {\ngrade = 3;\n} else {\ngrade = 2;\n}\nif (score >= 70) {\npassed = 1;\n} else {\npassed = 0;\n}",
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
    chapter: "Conditions & Decisions",
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
        explanation: "Great work! Your condition is correct.",
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

console.log("Chapter 4 generated successfully!");
