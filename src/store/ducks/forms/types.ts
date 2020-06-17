/**
 * Action Types
 */
export enum FormsTypes {
  LOAD_FORM = '@forms/LOAD_FORM',
  UPDATE_FORM_CONFIG = '@forms/UPDATE_FORM_CONFIG',
  UPDATE_FORM_STYLE = '@forms/UPDATE_FORM_STYLE',
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
    progressBarType?: { value?: string; label?: string };
    canAllowMultipleSubmissions: boolean;
  };
  style: {
    background?: { value?: string; name?: string };
    logo?: string;
    headerText?: string;
    hasLogoInHeader: boolean;
    headerBackground?: { value?: string; name?: string };
    footerText?: string;
    footerBackground?: { value?: string; name?: string };
  };
  id: string;
}

/**
 * State Type
 */
export interface FormsState {
  readonly form: Form | null;
  readonly saved: boolean;
}
