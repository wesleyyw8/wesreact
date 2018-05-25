import availability from '../availabilityReducer';
import { EDIT_SEATS_LEFT, EDIT_AVAILABILITY } from 'actions';
 
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
  it('handles the availability when there is no action', () => {
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
  it('handles the EDIT_AVAILABILITY', () => {
    const action = {
      type: EDIT_AVAILABILITY,
      data: {
        groupIndex: 0,
        tourIndex: 0,
        isAvailable: false
      }
    }
    expect(availability(state, action)).toEqual({
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
          isAvailable: false
        }]
      }]
    });
  });
  it('handles the EDIT_TIMER', () => {
    state.groups[0].tours[0].timer = 'test';
    expect(availability(state)).toEqual({
      groups: [{
        groupName: 'Group1',
        tours: [{
          tourName: 'Tour Name 1',
          seatsLeft: 5,
          timer: 'test',
          isAvailable: true
        }]
      }]
    });
  });
});