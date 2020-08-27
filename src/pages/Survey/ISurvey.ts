interface AnswerOption {
  _id: string;
  text: string;
  image?: string;
}

export interface QuestionResponse {
  _id: string;
  formPage: number;
  position: number;
  type: {
    alias: string;
  };
  config: {
    name: string;
    description?: string;
    isRequired: boolean;
    email: {
      hasValidation: boolean;
    };
    link: {
      hasValidation: boolean;
    };
    date: {
      isDateRequired: boolean;
      isTimeRequired: boolean;
      canCaptureInterval: boolean;
      dateFormat?: 'monthYear' | 'dayMonthYear' | 'dayMonth';
      timeFormat?: 'hourMinute' | 'hourMinuteSecond';
    };
    imageChoice: {
      isMultipleChoice: boolean;
      maxChoices?: number;
      hasRandomResponsesOrder: boolean;
      answerOptions: AnswerOption[];
    };
    radioButton: {
      hasHorizontalAlignment: boolean;
      hasRandomResponsesOrder: boolean;
      answerOptions: AnswerOption[];
    };
    dropDown: {
      hasRandomResponsesOrder: boolean;
      answerOptions: AnswerOption[];
    };
    checkBox: {
      hasHorizontalAlignment: boolean;
      hasRandomResponsesOrder: boolean;
      hasLimitedChoices: boolean;
      maxChoices: number;
      answerOptions: AnswerOption[];
    };
    nps: {
      canDisplayLabels: boolean;
      leftLabel?: string;
      rightLabel?: string;
      canStartAtZero: boolean;
      escale: string;
    };
    number: {
      hasMaxMinLimit: boolean;
      maxValue?: number;
      minValue?: number;
      incValue?: number;
    };
    sortList: {
      hasRandomResponsesOrder: boolean;
      answerOptions: AnswerOption[];
    };
    slider: {
      minValue: number;
      minLabel?: string;
      maxValue: number;
      maxLabel?: string;
      canHideValue: boolean;
    };
    matrix: {
      isMultipleChoice: boolean;
      rowsLabels: string[];
      colsLabels: string[];
    };
    phone: {
      hasValidation: boolean;
    };
    shortText: {
      placeholder?: string;
      hasLimitedChars: boolean;
      maxChars?: number;
    };
    longText: {
      placeholder?: string;
      hasLimitedChars: boolean;
      maxChars?: number;
    };
  };
}

export interface ISurvey {
  _id: string;
  config: {
    name: string;
    description?: string;
    beginDate?: Date;
    endDate?: Date;
    hasLimitedResponses: boolean;
    maxResponses?: number;
    isTotemMode: boolean;
    canDisplayProgressBar: boolean;
    progressBarType?: string;
    canAllowMultipleSubmissions: boolean;
  };
  style: {
    background?: string;
    logo?: string;
    headerText?: string;
    hasLogoInHeader: boolean;
    headerBackground?: string;
    footerText?: string;
    footerBackground?: string;
  };
  questions: QuestionResponse[];
  numResponses?: number;
  numPages: number;
}
