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
  name: string;
  id: string;
}

/**
 * State Type
 */
export interface FormsState {
  readonly form: Form | null;
}
