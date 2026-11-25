import type { Lesson } from "../../../../types";

export const infiniteLoops: Lesson = {
  "id": "infinite-loops",
  "title": "Infinite Loops",
  "chapter": "Loops & Repetition",
  "world": "Coding Foundations",
  "xp": 25,
  "steps": [
    {
      "type": "explanation",
      "title": "Infinite Loops",
      "description": "An infinite loop keeps running because its stopping condition never becomes false. A common mistake is forgetting to update the variable used in the condition."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "Why might while (x < 5) run forever?",
      "options": [
        "Because x is never changed inside the loop",
        "Because x is a number",
        "Because while loops always run forever",
        "Because 5 is too small"
      ],
      "correctAnswer": 0,
      "explanation": "An infinite loop keeps running because its stopping condition never becomes false. A common mistake is forgetting to update the variable used in the condition."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "The variable x already exists and starts at 0. Write a while loop that increments x until x reaches 5.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode",
        "c": "// Write your C code",
        "cpp": "// Write your C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "WHILE x < 5\nSET x = x + 1\nEND WHILE"
        ],
        "c": [
          "while (x < 5) {\nx++;\n}"
        ],
        "cpp": [
          "while (x < 5) {\nx++;\n}"
        ]
      },
      "explanation": "Great work! Your loop is correct."
    },

{
  type: "code-builder",
  title: "Fix the Robot's Infinite Loop! 🤖",
  question:
    "A robot has 5 units of battery remaining. It uses 1 unit each time it moves. Arrange the blocks so the robot moves while it has battery, decreases its battery after every move, and stops when the battery reaches 0.",
  codeBlocks: {
    pseudo: [
      'DISPLAY "Robot stopped!"',
      "END WHILE",
      "SET battery = battery - 1",
      'DISPLAY "Robot moving!"',
      "WHILE battery > 0",
      "SET battery = 5",
    ],
    c: [
      'printf("Robot stopped!");',
      "}",
      "battery--;",
      'printf("Robot moving!\\n");',
      "while (battery > 0) {",
      "int battery = 5;",
    ],
    cpp: [
      'cout << "Robot stopped!";',
      "}",
      "battery--;",
      'cout << "Robot moving!" << endl;',
      "while (battery > 0) {",
      "int battery = 5;",
    ],
  },
  correctBlockOrder: [5, 4, 3, 2, 1, 0],
  explanation:
    "The robot starts with 5 battery units. Each time the loop runs, it moves and loses 1 battery unit. When battery reaches 0, the condition battery > 0 becomes false and the loop stops. Without battery--, the robot would keep moving forever!",
},

    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "The variable energy already exists and starts at 10. Write a while loop that decreases energy by 2 while energy > 0.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "WHILE energy > 0\nSET energy = energy - 2\nEND WHILE"
        ],
        "c": [
          "while (energy > 0) {\nenergy -= 2;\n}"
        ],
        "cpp": [
          "while (energy > 0) {\nenergy -= 2;\n}"
        ]
      },
      "explanation": "You solved the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "WHILE x < 5\nSET x = x + 1\nEND WHILE",
    "c": "while (x < 5) {\nx++;\n}",
    "cpp": "while (x < 5) {\nx++;\n}"
  }
};
