import { combineReducers } from 'redux';

import questions from './questions';
import forms from './forms';

export default combineReducers({
  questions,
  forms,
});
