import get from 'lodash/get';
import tours from './tours-reducer/toursReducer';

function groups(state = {}, action = {}) {
  switch (action.type) {
    case 'EDIT_SEATS_LEFT': 
      const tourIndex = get(action, 'data.tourIndex', null)
      return {
        ...state,
        tours: tours(state.tours[tourIndex], action)
      }
    default: 
      return state;
  }
};

export default groups;