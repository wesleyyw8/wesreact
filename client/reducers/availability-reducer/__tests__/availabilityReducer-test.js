import availability from '../availabilityReducer';
import { EDIT_SEATS_LEFT } from 'actions';
 
describe('availability reducer', () => {
  const state = {
    groups: [{
      groupName: 'Group1',
      tours: [{
        tourName: 'Tour Name 1',
        seatsLeft: 5,
        timer: {
          days: 182,
          hours: 15,
          minutes: 20,
          seconds: 0
        },
        isAvailable: true
      }]
    }]
  };
  it('handles the EDIT_SEATS_LEFT when there is no action', () => {
    expect(availability(state)).toEqual({
      groups: [{
        groupName: 'Group1',
        tours: [{
          tourName: 'Tour Name 1',
          seatsLeft: 5,
          timer: {
            days: 182,
            hours: 15,
            minutes: 20,
            seconds: 0
          },
          isAvailable: true
        }]
      }]
    });
  });
  it('handles the EDIT_SEATS_LEFT', () => {
    const action = {
      type: EDIT_SEATS_LEFT,
      data: {
        groupIndex: 0,
        tourIndex: 0,
        seatsLeft: 3
      }
    }
    expect(availability(state, action)).toEqual({
      groups: [{
        groupName: 'Group1',
        tours: [{
          tourName: 'Tour Name 1',
          seatsLeft: 3,
          timer: {
            days: 182,
            hours: 15,
            minutes: 20,
            seconds: 0
          },
          isAvailable: true
        }]
      }]
    });
  });
});