import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import availability from './availability';

const rootReducer = combineReducers({
  availability, routing: routerReducer
})

export default rootReducer;