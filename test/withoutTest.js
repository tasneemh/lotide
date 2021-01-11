const assert = require("chai").assert;
const without = require("../without");
describe("#without", () => {
  const words = ["hello", "world", "lighthouse"];
  it("should return [ 'hello', 'world' ]", () => {
    assert.deepEqual(without(words, ["lighthouse"]));
  });
});
