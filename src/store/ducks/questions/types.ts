/**
 * Action Types
 */
export enum QuestionsTypes {
  ADD_QUESTION = '@questions/ADD_QUESTION',
  FOCUS_QUESTION = '@questions/FOCUS_QUESTION',
  REPLACE_QUESTION = '@questions/REPLACE_QUESTION',
  LOAD_QUESTIONS = '@questions/LOAD_QUESTIONS',
}

/**
 * Data Types
 */
export interface Question {
  alias: string;
  id: string;
  name: string;
  label?: string;
  description?: string;
  required?: boolean;
  link?: {
    validation?: boolean;
  };

  startZero?: boolean;
  scale?: number;
  showSubtitles?: boolean;
  leftSubtitle?: string;
  rightSubtitle?: string;
}

/**
 * State Type
 */
export interface QuestionsState {
  readonly questions: Question[];
  readonly focusedQuestion: string | null;
}
