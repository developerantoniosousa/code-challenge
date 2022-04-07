module.exports = function binarySearch(array, value) {
  let middleIndex = Math.floor(array.length / 2);
  const middleValue = array[middleIndex];

  if (value === middleValue) {
    return middleValue;
  }
  if (value < middleValue) {
    const leftSide = array.slice(0, middleIndex);
    return binarySearch(leftSide, value);
  } else {
    const rightSide = array.slice(middleIndex++, array.length);
    return binarySearch(rightSide, value);
  }
};
