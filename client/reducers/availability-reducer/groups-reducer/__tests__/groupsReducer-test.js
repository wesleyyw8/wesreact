import groups from '../groupsReducer';
import { EDIT_SEATS_LEFT, EDIT_AVAILABILITY, EDIT_TIMER } from 'actions';

describe('groups reducer', () => {
  const state = {
    groupName: 'Group1',
    tours: [{
      tourName: 'Tour Name 1',
      seatsLeft: 5,
      isAvailable: true,
      timer: {
        days: 182,
        hours: 15,
        minutes: 20,
        seconds: 0
      },
    },{
      tourName: 'Tour Name 2',
      seatsLeft: 3,
      isAvailable: true,
      timer: {
        days: 181,
        hours: 15,
        minutes: 20,
        seconds: 0
      }
    }]
  };
  it('handles the group reducer with no action and no state', () => {
    expect(groups()).toEqual({});
  });
  it('handles the group reducer with no action', () => {
    expect(groups(state)).toEqual(state);
  });

  it('handles the EDIT_SEATS_LEFT', () => {
    const action = {
      data: {
        seatsLeft: 3,
        groupIndex: 0,
        tourIndex: 0
      },
      type: EDIT_SEATS_LEFT
    };
    expect(groups(state, action)).toEqual({
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
      },{
        tourName: 'Tour Name 2',
        seatsLeft: 3,
        timer: {
          days: 181,
          hours: 15,
          minutes: 20,
          seconds: 0
        },
        isAvailable: true
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
    expect(groups(state, action)).toEqual({
      groupName: 'Group1',
      tours: [{
        tourName: 'Tour Name 1',
        seatsLeft: 5,
        isAvailable: false,
        timer: {
          days: 182,
          hours: 15,
          minutes: 20,
          seconds: 0
        },
      },{
        tourName: 'Tour Name 2',
        seatsLeft: 3,
        isAvailable: true,
        timer: {
          days: 181,
          hours: 15,
          minutes: 20,
          seconds: 0
        },
      }]
    });
  });

  it ('handles the EDIT_TIMER', () => {
    const action = {
      type: EDIT_TIMER,
      data: {
        tourIndex: 0,
        timer: 'abc'
      }
    }
    state.tours[0].timer = 'abc';
    expect(groups(state, action)).toEqual(state);
  });
});