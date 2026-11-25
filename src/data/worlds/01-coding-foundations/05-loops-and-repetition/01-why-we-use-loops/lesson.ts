import type { Lesson } from "../../../../types";

export const whyWeUseLoops: Lesson = {
  "id": "why-we-use-loops",
  "title": "Why We Use Loops",
  "chapter": "Loops & Repetition",
  "world": "Coding Foundations",
  "xp": 20,
  "steps": [
    {
      "type": "explanation",
      "title": "Why We Use Loops",
      "description": "Loops repeat instructions without making us write the same code again and again. A loop has a condition or a fixed number of repetitions, and its body contains the instructions to repeat."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "What is the main purpose of a loop?",
      "options": [
        "To repeat instructions",
        "To store information",
        "To compare two numbers",
        "To end a program"
      ],
      "correctAnswer": 0,
      "explanation": "Loops repeat instructions without making us write the same code again and again. A loop has a condition or a fixed number of repetitions, and its body contains the instructions to repeat."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "Write a loop that repeats exactly 3 times, using i as the counter. The variable i already exists.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode",
        "c": "// Write your C code",
        "cpp": "// Write your C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FOR i = 0 TO 2\nEND FOR"
        ],
        "c": [
          "for (i = 0; i < 3; i++) {\n}"
        ],
        "cpp": [
          "for (i = 0; i < 3; i++) {\n}"
        ]
      },
      "explanation": "Great work! Your loop is correct."
    },

{
  type: "code-builder",
  title: "Build a Countdown! 🚀",
  question:
    "A rocket needs to count down from 5 to 1 before launch. Arrange the code blocks to create a loop that displays each number, then prints 'Blast off!' after the loop finishes.",
  codeBlocks: {
    pseudo: [
      'DISPLAY "Blast off!"',
      "END FOR",
      "DISPLAY i",
      "FOR i = 5 DOWNTO 1",
    ],
    c: [
      'printf("Blast off!");',
      "}",
      'printf("%d\\n", i);',
      "for (int i = 5; i >= 1; i--) {",
    ],
    cpp: [
      'cout << "Blast off!";',
      "}",
      "cout << i << endl;",
      "for (int i = 5; i >= 1; i--) {",
    ],
  },
  correctBlockOrder: [3, 2, 1, 0],
  explanation:
    "The loop starts at 5, decreases the counter by 1 each time, and stops after displaying 1. Once the loop finishes, the program displays 'Blast off!' exactly once!",
},

    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "The variables i and count already exist. Write a loop that repeats 5 times and increases count by 1 each time.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "FOR i = 0 TO 4\nSET count = count + 1\nEND FOR"
        ],
        "c": [
          "for (i = 0; i < 5; i++) {\ncount++;\n}",
          "for (i = 0; i < 5; i++) {\ncount += 1;\n}"
        ],
        "cpp": [
          "for (i = 0; i < 5; i++) {\ncount++;\n}",
          "for (i = 0; i < 5; i++) {\ncount += 1;\n}"
        ]
      },
      "explanation": "You solved the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "FOR i = 0 TO 2\nEND FOR",
    "c": "for (i = 0; i < 3; i++) {\n}",
    "cpp": "for (i = 0; i < 3; i++) {\n}"
  }
};
