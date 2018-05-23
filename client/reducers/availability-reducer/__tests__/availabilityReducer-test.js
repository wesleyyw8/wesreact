import availability from '../availabilityReducer';

describe('availability reducer', () => {
  const state = {
    availability: {
      test: 123
    }
  };
  it('should equal true', () => {
    expect(availability(state)).toEqual({
      availability: {
        test: 123
      }
    });
  });
});