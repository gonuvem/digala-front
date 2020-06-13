/**
 * Action Types
 */
export enum FormsTypes {
  LOAD_FORM = '@forms/LOAD_FORM',
}

/**
 * Data Types
 */
export interface Form {
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
  id: string;
}

/**
 * State Type
 */
export interface FormsState {
  readonly form: Form | null;
}
