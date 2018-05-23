export function buildEditSeatsLeftAction(groupIndex, tourIndex, seatsLeft) {
  return {
    type: 'EDIT_SEATS_LEFT', 
    data: {
      groupIndex,
      tourIndex,
      seatsLeft
    }
  };
}