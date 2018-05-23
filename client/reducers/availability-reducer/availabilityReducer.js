import get from 'lodash/get';
import groups from './groups-reducer/groupsReducer';

function availability(state = {}, action) {
  switch (action.type) {
    case 'EDIT_SEATS_LEFT': 
      const groupIndex = get(action, 'data.groupIndex', null);
      return {
        asd: 3,
        groups: groups(state.groups[groupIndex], action)
      }
    default: 
      return state;
  }
};

export default availability;