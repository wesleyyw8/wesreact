import { buildEditSeatsLeftAction } from '../actionCreators';

describe('action creators', () => {
  it('handles the buildEditSeatsLeftAction', () => {
    expect(buildEditSeatsLeftAction(1, 2, 4)).toEqual({
      data: {
        'groupIndex': 1, 
        'seatsLeft': 4, 
        'tourIndex': 2
      }, 
      'type': 'EDIT_SEATS_LEFT'
    });
  });
});