import groups from '../groupsReducer';

describe('groups reducer', () => {
  it('handles the EDIT_SEATS_LEFT when there is no action', () => {
    const state = {
      test: 123
    };
    expect(groups(state)).toEqual({
      test: 123
    });
  });
  it('handles the EDIT_SEATS_LEFT', () => {
    const state = {
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
    };
    const action = {
      data: {
        seatsLeft: 3,
        groupIndex: 0,
        tourIndex: 0
      },
      type: 'EDIT_SEATS_LEFT'
    };
    expect(groups(state, action)).toEqual([{
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
    }]);
  });
});