import React from 'react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from '../App';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Home from '../components/Home';

import store, {history} from '../stores/index';

var routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/page1" component={Page1}></Route>
        <Route path="/page2" component={Page2}></Route>
      </Route>
    </Router>
  </Provider>
)

export default routes;
