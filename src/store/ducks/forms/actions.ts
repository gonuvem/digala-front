import { action } from 'typesafe-actions';
import { FormsTypes, Form } from './types';

export const loadForm = (form: Form): {} => action(FormsTypes.LOAD_FORM, form);
