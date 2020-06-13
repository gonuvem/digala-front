import { Reducer } from 'redux';
import { FormsTypes, FormsState } from './types';

const INITIAL_STATE: FormsState = {
  form: null,
};

const reducer: Reducer<FormsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FormsTypes.LOAD_FORM:
      return { ...state, form: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
