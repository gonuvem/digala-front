import { Reducer } from 'redux';
import { FormsTypes, FormsState } from './types';

const INITIAL_STATE: FormsState = {
  form: null,
  saved: true,
};

const reducer: Reducer<FormsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FormsTypes.LOAD_FORM:
      return { ...state, form: action.payload };
    case FormsTypes.UPDATE_FORM_CONFIG:
      return {
        ...state,
        form: { ...state.form, config: action.payload },
        saved: false,
      };
    case FormsTypes.UPDATE_FORM_STYLE:
      return {
        ...state,
        form: { ...state.form, style: action.payload },
        saved: false,
      };
    default:
      return { ...state };
  }
};

export default reducer;
