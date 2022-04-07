module.exports = function binarySearch(array, value) {
  let middleIndex = Math.floor(array.length / 2);

  if (value === array[middleIndex]) {
    return array[middleIndex];
  }
  if (value < array[middleIndex]) {
    const leftSide = array.slice(0, middleIndex);
    return binarySearch(leftSide, value);
  } else {
    const rightSide = array.slice(middleIndex++, array.length);
    return binarySearch(rightSide, value);
  }
};
