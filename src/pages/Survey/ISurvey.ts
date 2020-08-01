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
