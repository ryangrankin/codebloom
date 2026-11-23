import type { Lesson } from "../../../../types";

export const gradeCalculator: Lesson = {
  "id": "grade-calculator",
  "title": "Grade Calculator",
  "chapter": "Conditions & Decisions",
  "world": "Coding Foundations",
  "xp": 35,
  "steps": [
    {
      "type": "explanation",
      "title": "Grade Calculator",
      "description": "It's time to combine everything! A grade calculator checks a numeric score and assigns a grade. Order matters: check the highest score range first."
    },
    {
      "type": "quiz",
      "title": "Check Your Understanding",
      "question": "Why should a grade calculator check score >= 90 before score >= 80?",
      "options": [
        "Because the highest matching condition should run first",
        "Because 90 is an odd number",
        "Because else statements cannot compare numbers",
        "It makes no difference"
      ],
      "correctAnswer": 0,
      "explanation": "It's time to combine everything! A grade calculator checks a numeric score and assigns a grade. Order matters: check the highest score range first."
    },
    {
      "type": "code-input",
      "title": "Guided Coding",
      "question": "The variables score and grade already exist. Assign grade = 4 for scores >= 90, grade = 3 for scores >= 80, and grade = 2 otherwise. Write the complete conditional chain.",
      "codePrompt": {
        "pseudo": "// Write your pseudocode",
        "c": "// Write your C code",
        "cpp": "// Write your C++ code"
      },
      "acceptedAnswers": {
        "pseudo": [
          "IF score >= 90 THEN\nSET grade = 4\nELSE IF score >= 80 THEN\nSET grade = 3\nELSE\nSET grade = 2\nEND IF"
        ],
        "c": [
          "if (score >= 90) {\ngrade = 4;\n} else if (score >= 80) {\ngrade = 3;\n} else {\ngrade = 2;\n}"
        ],
        "cpp": [
          "if (score >= 90) {\ngrade = 4;\n} else if (score >= 80) {\ngrade = 3;\n} else {\ngrade = 2;\n}"
        ]
      },
      "explanation": "Great work! Your condition is correct."
    },

{
  type: "code-builder",
  title: "Build a Report Card Calculator! 📚",
  question:
    "A student scored 85 on an exam. Build a program that assigns grade A for scores of 90 or higher, B for 80 or higher, C for 70 or higher, and F otherwise. Arrange the blocks to calculate and display the letter grade.",
  codeBlocks: {
    pseudo: [
      "DISPLAY grade",
      "END IF",
      'ELSE\nSET grade = "F"',
      'ELSE IF score >= 70 THEN\nSET grade = "C"',
      'ELSE IF score >= 80 THEN\nSET grade = "B"',
      'IF score >= 90 THEN\nSET grade = "A"',
      "SET score = 85",
    ],
    c: [
      'printf("%c", grade);',
      "}",
      "} else {\n  grade = 'F';",
      "} else if (score >= 70) {\n  grade = 'C';",
      "} else if (score >= 80) {\n  grade = 'B';",
      "if (score >= 90) {\n  grade = 'A';",
      "int score = 85;\nchar grade = 'F';",
    ],
    cpp: [
      "cout << grade;",
      "}",
      "} else {\n  grade = 'F';",
      "} else if (score >= 70) {\n  grade = 'C';",
      "} else if (score >= 80) {\n  grade = 'B';",
      "if (score >= 90) {\n  grade = 'A';",
      "int score = 85;\nchar grade = 'F';",
    ],
  },
  correctBlockOrder: [6, 5, 4, 3, 2, 1, 0],
  explanation:
    "The score is 85. It doesn't meet the A requirement of 90, but it does meet the B requirement of 80. The program assigns grade B and skips the remaining branches. Checking the highest scores first ensures the correct grade!",
},

    {
      "type": "code-input",
      "title": "Independent Challenge",
      "question": "Final challenge! The variables score, grade, and passed already exist. First set grade to 4 when score >= 90, to 3 when score >= 80, otherwise to 2. Then set passed to 1 when score >= 70, otherwise to 0.",
      "codePrompt": {
        "pseudo": "// Build your solution",
        "c": "// Build your solution",
        "cpp": "// Build your solution"
      },
      "acceptedAnswers": {
        "pseudo": [
          "IF score >= 90 THEN\nSET grade = 4\nELSE IF score >= 80 THEN\nSET grade = 3\nELSE\nSET grade = 2\nEND IF\nIF score >= 70 THEN\nSET passed = 1\nELSE\nSET passed = 0\nEND IF"
        ],
        "c": [
          "if (score >= 90) {\ngrade = 4;\n} else if (score >= 80) {\ngrade = 3;\n} else {\ngrade = 2;\n}\nif (score >= 70) {\npassed = 1;\n} else {\npassed = 0;\n}"
        ],
        "cpp": [
          "if (score >= 90) {\ngrade = 4;\n} else if (score >= 80) {\ngrade = 3;\n} else {\ngrade = 2;\n}\nif (score >= 70) {\npassed = 1;\n} else {\npassed = 0;\n}"
        ]
      },
      "explanation": "You solved the challenge!"
    }
  ],
  "codeExamples": {
    "pseudo": "IF score >= 90 THEN\nSET grade = 4\nELSE IF score >= 80 THEN\nSET grade = 3\nELSE\nSET grade = 2\nEND IF",
    "c": "if (score >= 90) {\ngrade = 4;\n} else if (score >= 80) {\ngrade = 3;\n} else {\ngrade = 2;\n}",
    "cpp": "if (score >= 90) {\ngrade = 4;\n} else if (score >= 80) {\ngrade = 3;\n} else {\ngrade = 2;\n}"
  }
};
