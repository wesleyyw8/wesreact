import groups from '../groupsReducer';

describe('groups reducer', () => {
  const state = {
    test: 123
  };
  it('should equal true', () => {
    expect(groups(state)).toEqual({
      test: 123
    });
  });
});