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

const map = function (array, callBack) {
  const results = [];
  for (let item of array) {
    results.push(callBack(item));
  }

  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
console.log(results1);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results1, ["c", "t", "m", "t"]);
