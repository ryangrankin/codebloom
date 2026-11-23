
const assert = require("node:assert/strict");
const { test } = require("node:test");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const tempDir = fs.mkdtempSync(
  path.join(os.tmpdir(), "codebloom-validator-")
);

try {
  // Compile only the validator into temporary JavaScript.
  execFileSync(
    "npx",
    
     [
  "tsc",
  "--ignoreConfig",
  "src/data/codeValidator.ts",
  "--target", "ES2020",
  "--module", "commonjs",
  "--outDir", tempDir,
  "--skipLibCheck",
],
    
    { stdio: "inherit" }
  );

  const { validateCode } = require(
    path.join(tempDir, "codeValidator.js")
  );

  const check = (code, language, answer) =>
    validateCode(code, language, [answer]).correct;

  test("accepts an exact C++ solution", () => {
    assert.equal(
      check("total += i;", "cpp", "total += i;"),
      true
    );
  });

  test("accepts equivalent addition assignment", () => {
    assert.equal(
      check("total = total + i;", "cpp", "total += i;"),
      true
    );
  });

  test("ignores formatting and comments", () => {
    assert.equal(
      check(
        "total  +=  i; // add the value",
        "cpp",
        "total += i;"
      ),
      true
    );
  });

  test("preserves variable names", () => {
    assert.equal(
      check("total += j;", "cpp", "total += i;"),
      false
    );
  });

  test("does not merge separate identifiers", () => {
    assert.equal(
      check("intscore = 5;", "cpp", "int score = 5;"),
      false
    );
  });

  test("does not accept an empty answer", () => {
    assert.equal(
      check("", "cpp", "total += i;"),
      false
    );
  });

  test("accepts equivalent increment syntax", () => {
    assert.equal(
      check("i = i + 1;", "c", "i++;"),
      true
    );
  });

  test("does not change text inside strings", () => {
    assert.equal(
      check(
        'printf("Hello World");',
        "c",
        'printf("HelloWorld");'
      ),
      false
    );
  });

  test("recognizes case-insensitive pseudocode keywords", () => {
    assert.equal(
      check(
        "PRINT score",
        "pseudo",
        "print score"
      ),
      true
    );
  });
} finally {
  // Run the tests before deleting the temporary files.
  process.on("exit", () => {
    fs.rmSync(tempDir, { recursive: true, force: true });
  });
}
