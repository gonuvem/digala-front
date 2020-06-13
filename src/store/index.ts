import { createStore, Store } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { QuestionsState } from './ducks/questions/types';
import { FormsState } from './ducks/forms/types';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  questions: QuestionsState;
  forms: FormsState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  devToolsEnhancer({}),
);

export default store;
