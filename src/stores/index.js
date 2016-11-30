import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import { rootReducer } from '../reducers/index';

import page1 from '../data/page1' ;
import page2 from '../data/page2';

const defaultState = {
  page1,
  page2
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
