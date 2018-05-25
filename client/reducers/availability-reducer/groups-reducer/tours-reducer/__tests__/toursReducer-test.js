import tours from '../toursReducer';
import { EDIT_SEATS_LEFT, EDIT_AVAILABILITY, EDIT_TIMER } from 'actions';

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
      type: EDIT_SEATS_LEFT
    };

    expect(tours(state, action)).toEqual({
      test: 123,
      seatsLeft: 3
    });
  });
  it('handles the EDIT_AVAILABILITY', () => {
    const action = {
      data: {
        isAvailable: true
      },
      type: EDIT_AVAILABILITY
    };
    expect(tours(state, action)).toEqual({
      test: 123,
      isAvailable: true
    });
  });
  it('handles the EDIT_AVAILABILITY', () => {
    const action = {
      data: {
        isAvailable: false
      },
      type: EDIT_AVAILABILITY
    };
    expect(tours(state, action)).toEqual({
      test: 123,
      isAvailable: false
    });
  });
  it('handles the EDIT_AVAILABILITY with no action', () => {
    expect(tours(state)).toEqual({
      test: 123
    });
  });

  it('handles the EDIT_TIMER with no action', () => {
    expect(tours(state)).toEqual({
      test: 123
    });
  });
  it('handles the EDIT_TIMER', () => {
    const action = {
      type: EDIT_TIMER,
      data: {
        timer: {
          days: 10,
          hours: 12,
          minutes: 23,
          seconds: 20
        }
      }
    };
    expect(tours(state, action)).toEqual({
      test: 123,
      timer: {
        days: 10,
        hours: 12,
        minutes: 23,
        seconds: 20
      }
    });
  });
});