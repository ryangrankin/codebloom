export type CodeLanguage = "pseudo" | "c" | "cpp";

export type LessonStep = {
  type:
  | "explanation"
  | "quiz"
  | "ordering"
  | "code-input"
  | "code-builder";
  title: string;
  description?: string;
  question?: string;
  options?: string[];
  correctAnswer?: number;
  correctOrder?: number[];
  explanation?: string;
  codePrompt?: Record<CodeLanguage, string>;
  acceptedAnswers?: Record<CodeLanguage, string[]>;
  placeholder?: string; 
  codeBlocks?: Record<CodeLanguage, string[]>;
  correctBlockOrder?: number[];
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