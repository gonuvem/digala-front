import { action } from 'typesafe-actions';
import { FormsTypes, Form } from './types';

export const loadForm = (form: Form): {} => action(FormsTypes.LOAD_FORM, form);

export const updateFormConfig = (newConfig: {}): {} =>
  action(FormsTypes.UPDATE_FORM_CONFIG, newConfig);

export const updateFormStyle = (newStyle: {}): {} =>
  action(FormsTypes.UPDATE_FORM_STYLE, newStyle);
