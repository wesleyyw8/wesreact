import get from 'lodash/get';

function tours(state = {}, action = {}) {
  switch (action.type) {
    case 'EDIT_SEATS_LEFT': 
    const { seatsLeft } = get(action, 'data', null)
      return [{
        ...state,
        seatsLeft,
      }]
    default: 
      return state;
  }
};

export default tours