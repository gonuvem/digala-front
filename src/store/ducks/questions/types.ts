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
    validation?: boolean;
  };
  multipleChoice?: boolean;
  choiceMaxAmmount?: number;
  addOtherOption?: boolean;
  /* Icon Inputs */
  validatePattern?: boolean;
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
  hideValue?: boolean;
  /* Images Choice */
  imgChoices?: ListOptionsProps[];
  randomSort?: boolean;
  /* SortAnswers */
  answerOptions?: ListOptionsProps[];
  /* ShortText */
  placeholder?: string;
  limitCharacter?: boolean;
  shortTextMaxValue?: number;
  /* Numeric */
  stepSize?: number;
  limitMaxMin?: boolean;
  minValue?: number;
  maxValue?: number;
  /* SingleChoices */
  anotherOption?: boolean;
  rowDirection?: boolean;
  /* Matrix */
  columns?: string[];
  lines?: string[];
  /* Limit Choices */
  limitChoices?: boolean;
}

interface ListOptionsProps {
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
