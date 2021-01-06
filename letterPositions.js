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

const removeSpaces = function (sentence) {
  sentence = sentence.split(" ").join("");
  return sentence;
};

const letterPositions = function (string) {
  let sentence = removeSpaces(string);
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    //if the value is undefined, then it will enter the else loop and when the elements are found, then it will enter if loop . By default the first value is undefined
    if (result[sentence[i]]) {
      //since the array is already created we are pushing the elements to that array. Thus avaoiding creating new array everytime
      result[sentence[i]].push(i);
    } else {
      //we are creating an array when the element is found for the first time
      result[sentence[i]] = [i];
    }
  }
  return result;
};
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").o, [2]);
