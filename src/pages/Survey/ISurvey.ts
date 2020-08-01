export interface AnswerOption {
  _id: string;
  text: string;
  image?: string;
}

export interface SurveyQuestion {
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
      isTimeRequired: string;
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
  questions: SurveyQuestion[];
  numResponses?: number;
}
