const assert = require("chai").assert;
const middle = require("../middle");
describe("#middle", () => {
  it("returns [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [] for [1,2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [1] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
});
/*
const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

//const eqArrays = require('../eqArrays');
assertArraysEqual(middle([1, 2]), true);
assertArraysEqual(middle([1, 2, 3, 4, 5]), false);
assertArraysEqual(middle([1]), true);
assertArraysEqual(middle([1, 2, 3, 4]), false);
*/
