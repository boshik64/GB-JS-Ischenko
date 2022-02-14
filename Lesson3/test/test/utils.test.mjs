const { pow } = require('../src/utils.js');


test('3^2 равно 9', () => {
  expect(pow(3, 2)).toBe(9);
});

test('-2^2 равно -4', () => {
  expect(pow(-2, 2)).toBe(-4);
});

test('2^0 равно 2', () => {
  expect(pow(2, 0)).toBe(1);
});

test('2^-2 равно 0.25', () => {
  expect(pow(2, -2)).toBe(0.25);
});

test('0^2 равно 0', () => {
  expect(pow(0, 2)).toBe(0);
});
