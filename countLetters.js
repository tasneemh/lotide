/*
Create a function called countLetters.

The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

For example, countLetters('LHL') should return results indicating that L appears twice, and H once.
*/

//function to remove spaces from the string
const removeSpaces = function (string) {
  const noSpaces = string.split(" ").join("");
  return noSpaces;
};
//function to count the letters in a string and the result is an object
const countLetters = function (string) {
  const noSpaces = removeSpaces(string);
  const result = {};
  for (let char of noSpaces) {
    //if the result[char] is undefined then it will enter else loop and when result[char] >=1 then it will enter the of loop. By default the first value will be undefined
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
};
const obj = countLetters("lighthouse in the house");
console.log(obj);
const obj2 = countLetters("apple");
console.log(obj2);
module.exports = countLetters;
