const eqArrays = function (arr1, arr2) {
  count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      count++;
    } else {
      count = count;
    }
  }
  if (count === arr1.length) {
    return true;
  } else {
    return false;
  }
};

const assertEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};
assertEqual([1, 2, 3], [1, 2, 3]);
assertEqual([1, 2, 3], [1, 2, "3"]);
