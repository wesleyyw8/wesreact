import get from 'lodash/get';
import { EDIT_SEATS_LEFT, EDIT_AVAILABILITY } from 'actions';

function tours(state = {}, action = {}) {
  switch (action.type) {
    case EDIT_SEATS_LEFT: 
    const { seatsLeft } = get(action, 'data', null)
      return {
        ...state,
        seatsLeft,
      }
    case EDIT_AVAILABILITY: 
      const { isAvailable } = get(action, 'data', null);
      return {
        ...state,
        isAvailable
      }
    default: 
      return state;
  }
};

export default tours