import { buildEditSeatsLeftAction, buildEditIsAvailableAction } from '../actionCreators';
import { EDIT_SEATS_LEFT, EDIT_AVAILABILITY } from 'actions';

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
});