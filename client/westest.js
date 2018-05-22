import React from 'react';

import { render } from 'react-dom';

import css from  './styles/style.styl';

//import components
import App from './components/App';
import Groups from './components/Groups';
import Tour from './components/Tour';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Groups}></IndexRoute>
        <Route path="/tour/:tourId" component={Tour}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));