const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};
const tail = function (arr) {
  return arr.slice(1);
};
const result = tail([1, 2, 3]);
assertEqual(result.length, 2);
assertEqual(result[0], 2);
assertEqual(result[1], 3);
