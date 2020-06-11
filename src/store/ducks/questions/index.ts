import { Reducer } from 'redux';
import { QuestionsTypes, QuestionsState } from './types';

const INITIAL_STATE: QuestionsState = {
  questions: [],
};

const reducer: Reducer<QuestionsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuestionsTypes.ADD_QUESTION:
      return { ...state, questions: [...state.questions, action.payload] };
    case QuestionsTypes.LOAD_QUESTIONS:
      return { ...state, questions: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
