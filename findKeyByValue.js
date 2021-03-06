/*
Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
*/

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const findKeyByValue = function (obj, string) {
  const keyArray = Object.keys(bestTVShowsByGenre);
  for (let key of keyArray) {
    if (string === bestTVShowsByGenre[key]) {
      return key;
    }
  }
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

module.exports = findKeyByValue;
