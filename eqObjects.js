/*
Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
*/

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
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};
const findKeyArray = function (object) {
  return Object.keys(object);
};
const eqObjects = function (object1, object2) {
  let found = false;
  const keyArray1 = findKeyArray(object1);
  const keyArray2 = findKeyArray(object2);
  if (keyArray1.length === keyArray2.length) {
    for (let key of keyArray1) {
      //arrays
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key])) {
          found = true;
        } else {
          found = false;
        }
      } else {
        //primitive values
        if (object1[key] === object2[key]) {
          found = true;
        } else {
          found = false;
        }
      }
    }
  } else {
    found = false;
  }
  return found;
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, ba));
console.log(eqObjects(ab, abc));
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2));
