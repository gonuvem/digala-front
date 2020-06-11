import { createStore, Store } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { QuestionsState } from './ducks/questions/types';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  questions: QuestionsState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  devToolsEnhancer({}),
);

export default store;
