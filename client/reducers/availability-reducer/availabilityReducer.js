import get from 'lodash/get';
import groups from './groups-reducer/groupsReducer';

function availability(state = {}, action = {}) {

  switch (action.type) {
    case 'EDIT_SEATS_LEFT': 
      const groupIndex = get(action, 'data.groupIndex', null);
      return {
        groups: [
          ...state.groups.slice(0, groupIndex),
          groups(state.groups[groupIndex], action),
          ...state.groups.slice(groupIndex+1)
        ]
      }
    default: 
      return state;
  }
};

export default availability;