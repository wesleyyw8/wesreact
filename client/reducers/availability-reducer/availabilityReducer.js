import get from 'lodash/get';
import groups from './groups-reducer/groupsReducer';
import { EDIT_SEATS_LEFT, EDIT_AVAILABILITY, EDIT_TIMER } from 'actions';

function availability(state = {}, action = {}) {
  const groupIndex = get(action, 'data.groupIndex', null);
  switch (action.type) {
    case EDIT_SEATS_LEFT: 
      return {
        groups: [
          ...state.groups.slice(0, groupIndex),
          groups(state.groups[groupIndex], action),
          ...state.groups.slice(groupIndex+1)
        ]
      }
    case EDIT_AVAILABILITY:
      return {
        groups: [
          ...state.groups.slice(0, groupIndex),
          groups(state.groups[groupIndex], action),
          ...state.groups.slice(groupIndex+1)
        ]
      }
    case EDIT_TIMER: 
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