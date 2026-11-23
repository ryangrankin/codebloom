
import type { CodeLanguage } from "./types";

export type ValidationResult = {
  correct: boolean;
  feedback: string;
};

type Token = {
  kind: "word" | "number" | "string" | "symbol";
  value: string;
};

function tokenize(code: string): Token[] | null {
  const tokens: Token[] = [];
  const pattern =
    /\s+|\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|[A-Za-z_]\w*|\d+(?:\.\d+)?|(?:==|!=|<=|>=|\+\+|--|\+=|-=|\*=|\/=|&&|\|\||<<|>>)|[^\s]/gy;

  let position = 0;

  while (position < code.length) {
    pattern.lastIndex = position;
    const match = pattern.exec(code);

    if (!match) return null;

    const value = match[0];
    position = pattern.lastIndex;

    if (/^\s+$/.test(value)) continue;
    if (value.startsWith("//") || value.startsWith("/*")) {
      continue;
    }

    let kind: Token["kind"] = "symbol";

    if (/^[A-Za-z_]\w*$/.test(value)) kind = "word";
    else if (/^\d/.test(value)) kind = "number";
    else if (/^["']/.test(value)) kind = "string";

    tokens.push({ kind, value });
  }

  return tokens;
}

function canonicalTokens(
  code: string,
  language: CodeLanguage
): string[] | null {
  const cleaned = code
    .trim()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'");

  const tokens = tokenize(cleaned);
  if (!tokens) return null;

  const result: string[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const current = tokens[i];
    const next = tokens[i + 1];

    // Recognize a few equivalent assignment forms.
    if (
      current.kind === "word" &&
      next?.value === "+=" &&
      tokens[i + 2]
    ) {
      result.push(
        current.value,
        "=",
        current.value,
        "+",
        tokens[i + 2].value
      );
      i += 2;
      continue;
    }

    if (
      current.kind === "word" &&
      next?.value === "++"
    ) {
      result.push(
        current.value,
        "=",
        current.value,
        "+",
        "1"
      );
      i++;
      continue;
    }

    if (language === "pseudo" && current.kind !== "string") {
      result.push(current.value.toLowerCase());
    } else {
      result.push(current.value);
    }
  }

  return result;
}

export function validateCode(
  code: string,
  language: CodeLanguage,
  acceptedAnswers: string[]
): ValidationResult {
  if (!code.trim()) {
    return {
      correct: false,
      feedback: "Write some code before checking your answer.",
    };
  }

  const submitted = canonicalTokens(code, language);

  if (!submitted) {
    return {
      correct: false,
      feedback:
        "Check your comments, quotation marks, and syntax.",
    };
  }

  const correct = acceptedAnswers.some((answer) => {
    const expected = canonicalTokens(answer, language);
    return (
      expected !== null &&
      JSON.stringify(submitted) === JSON.stringify(expected)
    );
  });

  if (correct) {
    return {
      correct: true,
      feedback: "Your solution matches an accepted answer!",
    };
  }

  return {
    correct: false,
    feedback:
      "Your answer doesn't match a recognized solution yet. Check your logic, variable names, operators, and syntax. A different correct approach may not be recognized by this checker.",
  };
}
