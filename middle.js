/*
const eqArrays = function (arr1, arr2) {
  count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      count++;
    }
  }
  if (count === arr1.length) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};
*/
//const arr = [1, 2];
const middle = function (arr) {
  let newArr = [];
  let found = "odd";
  const middleIndex = Math.floor(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    if (arr.length < 3) {
      return newArr;
    } else {
      //even
      if (arr.length % 2 === 0) {
        found = "even";
      } else {
        found = "odd";
      }
    }
  }
  if (found === "even") {
    newArr.push(arr[middleIndex - 1]);
    newArr.push(arr[middleIndex]);
  } else {
    newArr.push(arr[middleIndex]);
  }
  return newArr;
};
/*
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1]));
console.log(middle([1, 2, 3, 4]));

assertArraysEqual(middle([1, 2]), true);
assertArraysEqual(middle([1, 2, 3, 4, 5]), false);
assertArraysEqual(middle([1]), true);
assertArraysEqual(middle([1, 2, 3, 4]), false);
*/
module.exports = middle;
