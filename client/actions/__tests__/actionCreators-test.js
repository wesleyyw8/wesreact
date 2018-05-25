import { buildEditSeatsLeftAction, buildEditIsAvailableAction, buildEditTimerAction } from '../actionCreators';
import { EDIT_SEATS_LEFT, EDIT_AVAILABILITY, EDIT_TIMER } from 'actions';

describe('action creators', () => {
  it('handles the buildEditSeatsLeftAction', () => {
    expect(buildEditSeatsLeftAction(1, 2, 4)).toEqual({
      data: {
        'groupIndex': 1, 
        'seatsLeft': 4, 
        'tourIndex': 2
      }, 
      'type': EDIT_SEATS_LEFT
    });
  });
  it('handles the buildEditIsAvailableAction', () => {
    expect(buildEditIsAvailableAction(1, 2, false)).toEqual({
      data: {
        'groupIndex': 1, 
        'tourIndex': 2,
        'isAvailable': false
      }, 
      'type': EDIT_AVAILABILITY
    });
  });
  it('handles the buildEditTimerAction', () => {
    expect(buildEditTimerAction(0, 2, {
        days: 10,
        hours: 12,
        minutes: 23,
        seconds: 20
      })).toEqual({
      type: EDIT_TIMER,
      data: {
        timer: {
          days: 10,
          hours: 12,
          minutes: 23,
          seconds: 20
        },
        tourIndex: 2,
        groupIndex: 0
      }
    });
  });
});