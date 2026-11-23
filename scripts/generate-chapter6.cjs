
const fs = require("fs");
const path = require("path");

const root = path.join(
  process.cwd(),
  "src/data/worlds/01-coding-foundations/06-functions"
);

const examples = [
  {
    folder: "01-why-functions-matter",
    name: "whyFunctionsMatter",
    id: "why-functions-matter",
    title: "Why Functions Matter",
    xp: 20,
    description:
      "Functions group instructions into reusable pieces of code. Instead of repeating the same instructions throughout a program, you can define a function once and call it whenever you need it.",
    question: "What is the main benefit of using functions?",
    options: [
      "They make code reusable",
      "They make every program run forever",
      "They remove all variables",
      "They prevent programs from using loops",
    ],
    correct: 0,
    guided:
      "Write a function named greet that prints Hello.",
    guidedAnswers: {
      pseudo: [
        'FUNCTION greet()\nPRINT "Hello"\nEND FUNCTION',
      ],
      c: [
        'void greet() {\nprintf("Hello");\n}',
      ],
      cpp: [
        'void greet() {\ncout << "Hello";\n}',
      ],
    },
    challenge:
      "Write a function named welcome that prints Welcome.",
    challengeAnswers: {
      pseudo: [
        'FUNCTION welcome()\nPRINT "Welcome"\nEND FUNCTION',
      ],
      c: [
        'void welcome() {\nprintf("Welcome");\n}',
      ],
      cpp: [
        'void welcome() {\ncout << "Welcome";\n}',
      ],
    },
  },
  {
    folder: "02-defining-functions",
    name: "definingFunctions",
    id: "defining-functions",
    title: "Defining Functions",
    xp: 25,
    description:
      "A function definition gives a function its name and body. In C and C++, a void function performs an action without returning a value. A function only runs when it is called.",
    question: "What does void mean in a C or C++ function?",
    options: [
      "The function returns no value",
      "The function has no name",
      "The function must run forever",
      "The function cannot contain code",
    ],
    correct: 0,
    guided:
      "Write a void function named sayHi that prints Hi.",
    guidedAnswers: {
      pseudo: [
        'FUNCTION sayHi()\nPRINT "Hi"\nEND FUNCTION',
      ],
      c: [
        'void sayHi() {\nprintf("Hi");\n}',
      ],
      cpp: [
        'void sayHi() {\ncout << "Hi";\n}',
      ],
    },
    challenge:
      "Write a void function named showScore that prints 100.",
    challengeAnswers: {
      pseudo: [
        "FUNCTION showScore()\nPRINT 100\nEND FUNCTION",
      ],
      c: [
        'void showScore() {\nprintf("%d", 100);\n}',
      ],
      cpp: [
        "void showScore() {\ncout << 100;\n}",
      ],
    },
  },
  {
    folder: "03-parameters-and-arguments",
    name: "parametersAndArguments",
    id: "parameters-and-arguments",
    title: "Parameters and Arguments",
    xp: 25,
    description:
      "Parameters are variables listed in a function definition. Arguments are the values supplied when calling the function. Parameters let one function work with different inputs.",
    question: "In add(3, 4), what are 3 and 4?",
    options: [
      "Arguments",
      "Function names",
      "Return types",
      "Loops",
    ],
    correct: 0,
    guided:
      "Write a function named doubleNumber that takes an integer n and returns n * 2.",
    guidedAnswers: {
      pseudo: [
        "FUNCTION doubleNumber(n)\nRETURN n * 2\nEND FUNCTION",
      ],
      c: [
        "int doubleNumber(int n) {\nreturn n * 2;\n}",
      ],
      cpp: [
        "int doubleNumber(int n) {\nreturn n * 2;\n}",
      ],
    },
    challenge:
      "Write a function named add that takes two integers a and b and returns their sum.",
    challengeAnswers: {
      pseudo: [
        "FUNCTION add(a, b)\nRETURN a + b\nEND FUNCTION",
      ],
      c: [
        "int add(int a, int b) {\nreturn a + b;\n}",
      ],
      cpp: [
        "int add(int a, int b) {\nreturn a + b;\n}",
      ],
    },
  },
  {
    folder: "04-return-values",
    name: "returnValues",
    id: "return-values",
    title: "Return Values",
    xp: 25,
    description:
      "A return statement sends a value back to the code that called a function. A function with return type int must return an integer value along the paths it can finish.",
    question: "What does return do?",
    options: [
      "Sends a value back to the caller",
      "Repeats the function forever",
      "Deletes a variable",
      "Prints automatically",
    ],
    correct: 0,
    guided:
      "Write a function named square that takes integer x and returns x * x.",
    guidedAnswers: {
      pseudo: [
        "FUNCTION square(x)\nRETURN x * x\nEND FUNCTION",
      ],
      c: [
        "int square(int x) {\nreturn x * x;\n}",
      ],
      cpp: [
        "int square(int x) {\nreturn x * x;\n}",
      ],
    },
    challenge:
      "Write a function named maxTwo that takes integers a and b and returns the larger value. Use an if/else statement.",
    challengeAnswers: {
      pseudo: [
        "FUNCTION maxTwo(a, b)\nIF a > b THEN\nRETURN a\nELSE\nRETURN b\nEND IF\nEND FUNCTION",
      ],
      c: [
        "int maxTwo(int a, int b) {\nif (a > b) {\nreturn a;\n} else {\nreturn b;\n}\n}",
      ],
      cpp: [
        "int maxTwo(int a, int b) {\nif (a > b) {\nreturn a;\n} else {\nreturn b;\n}\n}",
      ],
    },
  },
  {
    folder: "05-variable-scope",
    name: "variableScope",
    id: "variable-scope",
    title: "Variable Scope",
    xp: 25,
    description:
      "Scope determines where a variable can be used. A variable declared inside a function is local to that function. Variables declared inside a nested block also have limited scope.",
    question: "Where can a local variable declared inside a function be accessed?",
    options: [
      "Within that function's scope",
      "From every other function automatically",
      "Only on the internet",
      "Only before it is declared",
    ],
    correct: 0,
    guided:
      "Write a function named getFive that declares a local integer named value equal to 5 and returns it.",
    guidedAnswers: {
      pseudo: [
        "FUNCTION getFive()\nSET value = 5\nRETURN value\nEND FUNCTION",
      ],
      c: [
        "int getFive() {\nint value = 5;\nreturn value;\n}",
      ],
      cpp: [
        "int getFive() {\nint value = 5;\nreturn value;\n}",
      ],
    },
    challenge:
      "Write a function named addBonus that takes integer score, declares a local integer bonus equal to 10, and returns score + bonus.",
    challengeAnswers: {
      pseudo: [
        "FUNCTION addBonus(score)\nSET bonus = 10\nRETURN score + bonus\nEND FUNCTION",
      ],
      c: [
        "int addBonus(int score) {\nint bonus = 10;\nreturn score + bonus;\n}",
      ],
      cpp: [
        "int addBonus(int score) {\nint bonus = 10;\nreturn score + bonus;\n}",
      ],
    },
  },
  {
    folder: "06-combining-functions",
    name: "combiningFunctions",
    id: "combining-functions",
    title: "Combining Functions",
    xp: 30,
    description:
      "Functions can call other functions. This lets you break a larger problem into smaller pieces. Each function can focus on one job.",
    question: "Why combine smaller functions?",
    options: [
      "To organize and reuse code",
      "To eliminate all return values",
      "To stop using parameters",
      "To make functions impossible to test",
    ],
    correct: 0,
    guided:
      "A function named square already exists and takes one integer. Write a function named quadruple that returns square(x) * 4.",
    guidedAnswers: {
      pseudo: [
        "FUNCTION quadruple(x)\nRETURN square(x) * 4\nEND FUNCTION",
      ],
      c: [
        "int quadruple(int x) {\nreturn square(x) * 4;\n}",
      ],
      cpp: [
        "int quadruple(int x) {\nreturn square(x) * 4;\n}",
      ],
    },
    challenge:
      "A function named add already exists and takes two integers. Write a function named addThree that takes integers a, b, and c, and returns add(add(a, b), c).",
    challengeAnswers: {
      pseudo: [
        "FUNCTION addThree(a, b, c)\nRETURN add(add(a, b), c)\nEND FUNCTION",
      ],
      c: [
        "int addThree(int a, int b, int c) {\nreturn add(add(a, b), c);\n}",
      ],
      cpp: [
        "int addThree(int a, int b, int c) {\nreturn add(add(a, b), c);\n}",
      ],
    },
  },
  {
    folder: "07-build-a-mini-program",
    name: "buildAMiniProgram",
    id: "build-a-mini-program",
    title: "Build a Mini Program",
    xp: 40,
    description:
      "Final challenge! Build a small program by defining reusable functions and calling them. This combines parameters, return values, and variable assignments.",
    question: "What is a good reason to split a program into multiple functions?",
    options: [
      "Each function can handle a smaller task",
      "It guarantees no bugs",
      "It removes the need to test code",
      "Functions cannot call each other",
    ],
    correct: 0,
    guided:
      "Write a function named multiply that takes integers a and b and returns a * b.",
    guidedAnswers: {
      pseudo: [
        "FUNCTION multiply(a, b)\nRETURN a * b\nEND FUNCTION",
      ],
      c: [
        "int multiply(int a, int b) {\nreturn a * b;\n}",
      ],
      cpp: [
        "int multiply(int a, int b) {\nreturn a * b;\n}",
      ],
    },
    challenge:
      "Build TWO functions. First, define add(a, b) to return a + b. Then define calculate(a, b, c) to return add(a, b) * c.",
    challengeAnswers: {
      pseudo: [
        "FUNCTION add(a, b)\nRETURN a + b\nEND FUNCTION\nFUNCTION calculate(a, b, c)\nRETURN add(a, b) * c\nEND FUNCTION",
      ],
      c: [
        "int add(int a, int b) {\nreturn a + b;\n}\nint calculate(int a, int b, int c) {\nreturn add(a, b) * c;\n}",
      ],
      cpp: [
        "int add(int a, int b) {\nreturn a + b;\n}\nint calculate(int a, int b, int c) {\nreturn add(a, b) * c;\n}",
      ],
    },
  },
];

for (const lesson of examples) {
  const dir = path.join(root, lesson.folder);
  fs.mkdirSync(dir, { recursive: true });

  const data = {
    id: lesson.id,
    title: lesson.title,
    chapter: "Functions",
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
          pseudo: "// Write pseudocode",
          c: "// Write C code",
          cpp: "// Write C++ code",
        },
        acceptedAnswers: lesson.guidedAnswers,
        explanation: "Great job defining your function!",
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
        explanation: "You completed the coding challenge!",
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
    `export const ${lesson.name}: Lesson = ` +
    JSON.stringify(data, null, 2) +
    ";\n";

  fs.writeFileSync(
    path.join(dir, "lesson.ts"),
    source
  );

  console.log(`Created: ${lesson.title}`);
}

console.log("Chapter 6 generated successfully!");
