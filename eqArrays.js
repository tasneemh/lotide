const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function (arr1, arr2) {
  count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      count++;
    } else {
      count = count;
    }
  }
  if (count === 3) {
    return true;
  } else {
    return false;
  }
};
console.log(eqArrays([1, 2, 3], [1, 2, "3"]));
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
