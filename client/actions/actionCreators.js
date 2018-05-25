import { EDIT_SEATS_LEFT, EDIT_AVAILABILITY, EDIT_TIMER } from 'actions';

export const buildEditSeatsLeftAction = (groupIndex, tourIndex, seatsLeft) => {
  return {
    type: EDIT_SEATS_LEFT, 
    data: {
      groupIndex,
      tourIndex,
      seatsLeft
    }
  };
}

export const buildEditIsAvailableAction = (groupIndex, tourIndex, isAvailable) => {
  return {
    type: EDIT_AVAILABILITY, 
    data: {
      groupIndex,
      tourIndex,
      isAvailable
    }
  }; 
}

export const buildEditTimerAction = (groupIndex, tourIndex, timer) => {
  return {
    type: EDIT_TIMER,
    data: {
      groupIndex,
      tourIndex,
      timer
    }
  }
}