import { EDIT_SEATS_LEFT, EDIT_AVAILABILITY } from 'actions';

export function buildEditSeatsLeftAction(groupIndex, tourIndex, seatsLeft) {
  return {
    type: EDIT_SEATS_LEFT, 
    data: {
      groupIndex,
      tourIndex,
      seatsLeft
    }
  };
}

export function buildEditIsAvailableAction(groupIndex, tourIndex, isAvailable) {
  return {
    type: EDIT_AVAILABILITY, 
    data: {
      groupIndex,
      tourIndex,
      isAvailable
    }
  }; 
}