const assert = require("chai").assert;
const flatten = require("../flatten");
describe("#flatten", () => {
  it("should return [1, 2, 3, 4, 5, 6 ]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("should return [3, 4, 5, 6 ]", () => {
    assert.deepEqual(flatten([[3, 4], 5, [6]]), [3, 4, 5, 6]);
  });
});
