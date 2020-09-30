import { Reducer } from 'redux';
import { QuestionsTypes, QuestionsState } from './types';

const INITIAL_STATE: QuestionsState = {
  questions: [],
  focusedQuestion: null,
};

const reducer: Reducer<QuestionsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuestionsTypes.ADD_QUESTION:
      return { ...state, questions: [...state.questions, action.payload] };
    case QuestionsTypes.LOAD_QUESTIONS:
      return { ...state, questions: action.payload };
    case QuestionsTypes.FOCUS_QUESTION:
      return { ...state, focusedQuestion: action.payload };
    case QuestionsTypes.CLEAR_FOCUSED_QUESTION:
      return { ...state, focusedQuestion: null };
    case QuestionsTypes.REPLACE_QUESTION:
      return {
        ...state,
        questions: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
