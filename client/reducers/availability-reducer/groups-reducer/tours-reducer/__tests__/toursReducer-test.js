import tours from '../toursReducer';

describe('tours reducer', () => {
  const state = {
    test: 123
  };
  it('should equal true', () => {
    expect(tours(state)).toEqual({
      test: 123
    });
  });
});