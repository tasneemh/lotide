const sortArray = function (arr) {
  arr.sort((a, b) => a - b);
  return arr;
};
const eqArrays = function (arr1, arr2) {
  count = 0;
  const sortedArray1 = sortArray(arr1);
  const sortedArray2 = sortArray(arr2);
  if (sortedArray1.length === sortedArray2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (sortedArray1[i] === sortedArray2[i]) {
        count++;
      }
    }
  } else {
    return false;
  }

  if (count === arr1.length) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;
