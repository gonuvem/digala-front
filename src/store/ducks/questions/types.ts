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
export interface ImageChoice {
  image: string;
  text?: string;
  loading: boolean;
  id: string;
}

export interface Question {
  alias: string;
  id: string;
  name: string;
  label?: string;
  description?: string;
  isRequired: boolean;
  link?: {
    hasValidation?: boolean;
  };
  isMultipleChoice?: boolean;
  maxChoices?: number;
  addOtherOption?: boolean;
  /* Icon Inputs */
  hasValidation?: boolean;
  /* DateTime */
  dateFormat?: 'monthYear' | 'dayMonthYear' | 'dayMonth';
  timeFormat?: 'hourMinute' | 'hourMinuteSecond';
  isDateRequired?: boolean;
  isTimeRequired?: boolean;
  canCaptureInterval?: boolean;
  /* Nps */
  canStartAtZero?: boolean;
  escale?: number;
  canDisplayLabels?: boolean;
  leftLabel?: string;
  rightLabel?: string;
  /* Slider */
  minLabel?: string;
  maxLabel?: string;
  canHideValue?: boolean;
  /* Images Choice */
  imgChoices?: ListOptionsProps[];
  hasRandomResponsesOrder?: boolean;
  /* SortAnswers */
  answerOptions?: ListOptionsProps[];
  /* ShortText */
  placeholder?: string;
  hasLimitedChars?: boolean;
  maxChars?: number;
  /* Numeric */
  incValue?: number;
  hasMaxMinLimit?: boolean;
  minValue?: number;
  maxValue?: number;
  /* SingleChoices */
  anotherOption?: boolean;
  hasHorizontalAlignment?: boolean;
  /* Matrix */
  colsLabels?: string[];
  rowsLabels?: string[];
  /* Limit Choices */
  hasLimitedChoices?: boolean;
}

export interface ListOptionsProps {
  _id: string;
  text: string;
  value?: string;
  label?: string;
  image?: string;
  loading?: boolean;
}

/**
 * State Type
 */
export interface QuestionsState {
  readonly questions: Question[];
  readonly focusedQuestion: string | null;
}
