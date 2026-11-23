export type CodeLanguage = "pseudo" | "c" | "cpp";

export type LessonStep = {
  type: "explanation" | "quiz" | "ordering";
  title: string;
  description?: string;
  question?: string;
  options?: string[];
  correctAnswer?: number;
  correctOrder?: number[];
  explanation?: string;
};

export type Lesson = {
  id: string;
  title: string;
  chapter: string;
  world: string;
  xp: number;
  steps: LessonStep[];
  codeExamples?: Record<CodeLanguage, string>;
  orderingOptions?: Record<CodeLanguage, string[]>;
};