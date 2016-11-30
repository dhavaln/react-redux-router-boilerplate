import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import page1 from './page1';
import page2 from './page2';

export const rootReducer = combineReducers({page1, page2, routing: routerReducer});
