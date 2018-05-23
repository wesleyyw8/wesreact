import get from 'lodash/get';
import tours from './tours-reducer/toursReducer';

function groups(state = {}, action = {}) {
  switch (action.type) {
    case 'EDIT_SEATS_LEFT': 
      const tourIndex = get(action, 'data.tourIndex', null)
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