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
  /* DateTime */
  dateFormat?: 'monthYear' | 'dayMonthYear' | 'dayMonth';
  timeFormat?: 'hourMinute' | 'hourMinuteSecond';
  dateRequired?: boolean;
  timeRequired?: boolean;
  selectRange?: boolean;
  /* Nps */
  startZero?: boolean;
  scale?: number;
  showSubtitles?: boolean;
  leftSubtitle?: string;
  rightSubtitle?: string;
  /* Slider */
  lowerLimit?: number;
  upperLimit?: number;

  listOptions?: ListOptionsProps[];
  randomSort?: boolean;
}

interface ListOptionsProps {
  id: string;
  content: string;
}

/**
 * State Type
 */
export interface QuestionsState {
  readonly questions: Question[];
  readonly focusedQuestion: string | null;
}
