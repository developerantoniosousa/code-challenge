const binarySearch = require("./binary");

const sequence = [1, 2, 3, 4, 5];

test(`given [${sequence}] and 1, returns 1`, () => {
  expect(binarySearch(sequence, 1)).toBe(1);
});

test(`given [${sequence}] and 2, returns 2`, () => {
  expect(binarySearch(sequence, 2)).toBe(2);
});

test(`given [${sequence}] and 3, returns 3`, () => {
  expect(binarySearch(sequence, 3)).toBe(3);
});

test(`given [${sequence}] and 4, returns 4`, () => {
  expect(binarySearch(sequence, 4)).toBe(4);
});

test(`given ${sequence} and 5, returns 5`, () => {
  expect(binarySearch(sequence, 5)).toBe(5);
});
