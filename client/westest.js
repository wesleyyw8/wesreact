import React from 'react';

import { render } from 'react-dom';

import css from  './styles/style.styl';

//import components
import MainConnectors from './components/Main-connectors';
import Groups from './components/Groups';
import Tour from './components/Tour';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={MainConnectors}>
        <IndexRoute component={Groups}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));