/*
Implement without which will return a subset of a given array, removing unwanted elements.

This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

Here are a couple examples, but please don't limit your testing to just these scenarios:

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
*/
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
const without = function (arr1, arr2) {
  let newArr = [];
  let i = 0;
  while (i < arr1.length) {
    let j = 0;
    let found = false;
    while (j < arr2.length) {
      if (arr1[i] !== arr2[j]) {
        found = false;
      } else {
        found = true;
      }
      j++;
    }
    if (!found) {
      newArr.push(arr1[i]);
    }
    i++;
  }
  console.log("newArr", newArr);
};
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
