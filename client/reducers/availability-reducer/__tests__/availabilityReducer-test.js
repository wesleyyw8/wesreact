import availability from '../availabilityReducer';
import { EDIT_SEATS_LEFT, EDIT_AVAILABILITY, EDIT_TIMER } from 'actions';
 
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
  it('handles the availability when there is no action and no state', () => {
    expect(availability()).toEqual({});
  });
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
  it('handles the EDIT_SEATS_LEFT', () => {
    const action = {
      type: EDIT_SEATS_LEFT,
      data: {
        groupIndex: 0,
        tourIndex: 0,
        seatsLeft: 5
      }
    }
    expect(availability(state, action)).toEqual(state);
  });
  it('handles the EDIT_TIMER', () => {
    state.groups[0].tours[0].timer = 'test';
    const action = {
      type: EDIT_TIMER,
      data: {
        groupIndex: 0,
        tourIndex: 0,
        timer: 'abc'
      }
    }
    expect(availability(state, action)).toEqual({
      groups: [{
        groupName: 'Group1',
        tours: [{
          tourName: 'Tour Name 1',
          seatsLeft: 5,
          timer: 'abc',
          isAvailable: true
        }]
      }]
    });
  });
});