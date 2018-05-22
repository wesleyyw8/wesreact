export function test(index) {
  console.log('action!!!');
  return {
    type: 'TEST',
    index
  };
}