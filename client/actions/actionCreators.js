export function buildRemoveSeatsLeftAction(groupIndex, tourIndex) {
  console.log('action!!!');
  return {
    type: 'REMOVE_SEATS_LEFT',
    groupIndex,
    tourIndex
  };
}