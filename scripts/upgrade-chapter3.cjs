
const fs = require("fs");
const path = require("path");

const root = path.join(
  process.cwd(),
  "src/data/worlds/01-coding-foundations/03-operators-and-expressions"
);

const upgrades = [
  {
    folder: "01-arithmetic-operators",
    question:
      "The variables width, height, and area already exist. Store width multiplied by height in area.",
    pseudo: [
      "SET area = width * height",
      "area = width * height",
    ],
    c: ["area = width * height;"],
    cpp: ["area = width * height;"],
    explanation:
      "Multiplication lets us calculate the area of a rectangle.",
  },
  {
    folder: "02-comparison-operators",
    question:
      "The variables temperature and isFreezing already exist. Set isFreezing to whether temperature is less than or equal to 0.",
    pseudo: [
      "SET isFreezing = temperature <= 0",
      "isFreezing = temperature <= 0",
    ],
    c: [
      "isFreezing = temperature <= 0;",
      "isFreezing = (temperature <= 0);",
    ],
    cpp: [
      "isFreezing = temperature <= 0;",
      "isFreezing = (temperature <= 0);",
    ],
    explanation:
      "The <= operator checks whether a value is less than or equal to another.",
  },
  {
    folder: "03-logical-operators",
    question:
      "The variables isWeekend, isHoliday, and dayOff already exist. Set dayOff to true when it is the weekend OR a holiday.",
    pseudo: [
      "SET dayOff = isWeekend OR isHoliday",
      "dayOff = isWeekend OR isHoliday",
    ],
    c: [
      "dayOff = isWeekend || isHoliday;",
      "dayOff = (isWeekend || isHoliday);",
    ],
    cpp: [
      "dayOff = isWeekend || isHoliday;",
      "dayOff = (isWeekend || isHoliday);",
    ],
    explanation:
      "Logical OR is true when at least one condition is true.",
  },
  {
    folder: "04-assignment-operators",
    question:
      "The variable lives already exists. The player loses one life. Update lives using the -= operator in C or C++.",
    pseudo: [
      "SET lives = lives - 1",
      "lives = lives - 1",
    ],
    c: ["lives -= 1;"],
    cpp: ["lives -= 1;"],
    explanation:
      "The -= operator subtracts a value from an existing variable.",
  },
  {
    folder: "05-order-of-operations",
    question:
      "The variables subtotal, tax, and total already exist. Set total to subtotal multiplied by (1 + tax). Use parentheses.",
    pseudo: [
      "SET total = subtotal * (1 + tax)",
      "total = subtotal * (1 + tax)",
    ],
    c: ["total = subtotal * (1 + tax);"],
    cpp: ["total = subtotal * (1 + tax);"],
    explanation:
      "Parentheses ensure the tax multiplier is calculated before multiplication.",
  },
  {
    folder: "06-building-expressions",
    question:
      "The variables hours, hourlyRate, bonus, and pay already exist. Calculate pay as hours times hourlyRate, plus bonus.",
    pseudo: [
      "SET pay = hours * hourlyRate + bonus",
      "pay = hours * hourlyRate + bonus",
    ],
    c: ["pay = hours * hourlyRate + bonus;"],
    cpp: ["pay = hours * hourlyRate + bonus;"],
    explanation:
      "This expression combines multiplication and addition to calculate pay.",
  },
  {
    folder: "07-operators-challenge",
    question:
      "Final challenge! The variables coins, levels, score, and bonusScore already exist. Write TWO instructions: first calculate score as coins + levels * 10, then add 50 to score and store the result in bonusScore.",
    pseudo: [
      "SET score = coins + levels * 10\nSET bonusScore = score + 50",
      "score = coins + levels * 10\nbonusScore = score + 50",
    ],
    c: [
      "score = coins + levels * 10;\nbonusScore = score + 50;",
    ],
    cpp: [
      "score = coins + levels * 10;\nbonusScore = score + 50;",
    ],
    explanation:
      "You combined arithmetic operators and used the result of one calculation in another!",
  },
];

for (const upgrade of upgrades) {
  const filename = path.join(
    root,
    upgrade.folder,
    "lesson.ts"
  );

  if (!fs.existsSync(filename)) {
    throw new Error(`Missing lesson file: ${filename}`);
  }

  const source = fs.readFileSync(filename, "utf8");

  // The original Chapter 3 generator produces a typed
  // export followed by a JSON-formatted lesson object.
  const match = source.match(
    /export const (\w+): Lesson = ([\s\S]*);\s*$/
  );

  if (!match) {
    throw new Error(
      `Unexpected lesson format: ${filename}`
    );
  }

  const variableName = match[1];
  const lesson = JSON.parse(match[2]);

  if (
    !Array.isArray(lesson.steps) ||
    lesson.steps.length !== 4 ||
    lesson.steps[3].type !== "code-input"
  ) {
    throw new Error(
      `Unexpected exercise structure: ${filename}`
    );
  }

  lesson.steps[3] = {
    type: "code-input",
    title:
      upgrade.folder === "07-operators-challenge"
        ? "Build a Two-Step Solution"
        : "Apply What You Learned",
    question: upgrade.question,
    codePrompt: {
      pseudo: "// Write your pseudocode solution",
      c: "// Write your C solution",
      cpp: "// Write your C++ solution",
    },
    acceptedAnswers: {
      pseudo: upgrade.pseudo,
      c: upgrade.c,
      cpp: upgrade.cpp,
    },
    explanation: upgrade.explanation,
  };

  const updatedSource =
    'import type { Lesson } from "../../../../types";\n\n' +
    `export const ${variableName}: Lesson = ` +
    JSON.stringify(lesson, null, 2) +
    ";\n";

  fs.writeFileSync(filename, updatedSource);

  console.log(`Updated: ${lesson.title}`);
}

console.log("Chapter 3 exercises upgraded!");
