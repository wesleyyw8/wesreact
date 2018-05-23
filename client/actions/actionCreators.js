export function buildEditSeatsLeftAction(groupIndex, tourIndex, seatsLeft) {
  console.log(`groupIndex: ${groupIndex}`)
  console.log(`tourIndex: ${tourIndex}`)
  return {
    type: 'EDIT_SEATS_LEFT', 
    data: {
      groupIndex,
      tourIndex,
      seatsLeft
    }
  };
}