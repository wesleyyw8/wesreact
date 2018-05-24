import get from 'lodash/get';
import tours from './tours-reducer/toursReducer';
import { EDIT_SEATS_LEFT, EDIT_AVAILABILITY } from 'actions';

function groups(state = {}, action = {}) {
  const tourIndex = get(action, 'data.tourIndex', null)
  switch (action.type) {
    case EDIT_SEATS_LEFT: 
      return {
        groupName: state.groupName,
        tours: [
          ...state.tours.slice(0, tourIndex),
          tours(state.tours[tourIndex], action),
          ...state.tours.slice(tourIndex+1),
        ]
      }
    case EDIT_AVAILABILITY: 
      return {
        groupName: state.groupName,
        tours: [
          ...state.tours.slice(0, tourIndex),
          tours(state.tours[tourIndex], action),
          ...state.tours.slice(tourIndex+1),
        ]
      }
    default: 
      return state;
  }
};

export default groups;