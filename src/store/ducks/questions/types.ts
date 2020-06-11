/**
 * Action Types
 */
export enum QuestionsTypes {
  ADD_QUESTION = '@questions/ADD_QUESTION',
  LOAD_QUESTIONS = '@questions/LOAD_QUESTIONS',
}

/**
 * Data Types
 */
export interface Question {
  alias: string;
}

/**
 * State Type
 */
export interface QuestionsState {
  readonly questions: Question[];
}
