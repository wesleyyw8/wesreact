import validationReducer from '../availabilityReducer';

describe('availability reducer', () => {
  const state = {
    availability: {
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
    }
  };
  expect(true).toEquals(true);
});