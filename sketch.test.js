const { sum, multiply } = require('./sketch');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('adds 1 + 2 to equal 3', sumTest);

function sumTest() {
  expect(sum(1, 2)).toBe(3);
}

test('adds 1 * 2 to equal 2', multiplyTest);

function sumTest() {
  expect(multiply(1, 2)).toBe(2);
}
