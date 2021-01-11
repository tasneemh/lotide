/*
Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
*/
const eqArrays = require("./eqArrays");

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

module.exports = eqObjects;
