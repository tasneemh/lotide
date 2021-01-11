const assert = require("chai").assert;
const letterPositions = require("../letterPositions");
describe("#letterPositions", () => {
  it("should return [1] for e", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("should return [2, 3] for l", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
});
