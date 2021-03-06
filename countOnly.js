const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];
const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    //console.log(item);
    //console.log(item, results[item]);
    //console.log("itemsToCount[item]: ", itemsToCount[item]);
    //itemsToCount[item] will have 3 different values undefined, true & false. the value is true only then it will enter the below loop
    if (itemsToCount[item]) {
      //console.log("itemsToCount[item]: ", itemsToCount[item]);

      //initially results[item] = undefined as Karl the first key is not available in the object yet. undefined is falsy value so Karl will first enter else statement and result[item] becomes 1
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});
console.log(result1);

module.exports = countOnly;
