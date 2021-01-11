const findKey = function (obj, callback) {
  let results = undefined;
  for (let item in obj) {
    console.log(item);
    if (callback(obj[item])) {
      return item;
    }
  }
  return results;
};

console.log(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  )
);
// => "noma"

module.exports = findKey;
