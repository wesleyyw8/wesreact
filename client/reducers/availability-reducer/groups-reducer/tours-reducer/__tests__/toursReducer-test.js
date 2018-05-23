import tours from '../toursReducer';

describe('tours reducer', () => {
  const state = {
    test: 123
  };
  it('handles the EDIT_SEATS_LEFT when there is no action', () => {
    expect(tours(state)).toEqual({
      test: 123
    });
  });
  it('handles the EDIT_SEATS_LEFT ', () => {
    const action = {
      data: {
        seatsLeft: 3
      },
      type: 'EDIT_SEATS_LEFT'
    };

    expect(tours(state, action)).toEqual({
      test: 123,
      seatsLeft: 3
    });
  });
});