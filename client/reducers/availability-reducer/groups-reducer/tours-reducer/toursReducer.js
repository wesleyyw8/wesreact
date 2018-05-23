import get from 'lodash/get';

function tours(state = {}, action = {}) {
  switch (action.type) {
    case 'EDIT_SEATS_LEFT': 
    const seatsLeft = get(action, 'data.seatsLeft', 0)
      return {
        ...state,
        seatsLeft: { ...state.seatsLeft, ...data.seatsLeft },
      }
    default: 
      return state;
  }
};

export default tours