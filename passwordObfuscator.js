/*
Our program should define a function named obfuscate. This function should take a string as an argument and obfuscate it by applying the following rules:

Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).
The program should log to the console the final obfuscated password returned by our obfuscate function. As examples, consider the following few runs of the program and their results.

node password.js password
p4ssw0rd
node password.js abracadabra
4br4c4d4br4
node password.js audaciously
4ud4ci0us1y

The Rules / Guidelines:

Give your functions precise verb/action based names
Use camelCasedNames (like this one)
Properly indent the function code
Functions should focus on a single task: returning a value or causing a side effect. Break your function into additional smaller functions if you find it doing two or more things
One single task could be to compute and return a value (eg: zeroPad)
Another single task could be to perform a side effect such as logging a message to the screen (eg: printFarmInventory)
It is ideal if functions try to avoid reading outer scope variables. If a function needs some information / data, then that data should instead be passed in as a parameter, making it available within the function's inner scope.
*/
const getNewString = function () {
  const args = process.argv;
  const string = args[2];
  return string;
};

//using ternary operator
const obfuscate = function (getNewString) {
  let newPassword = "";
  const string = getNewString();
  console.log(string);
  for (let i = 0; i < string.length; i++) {
    string[i] === "a"
      ? (newPassword += "4")
      : string[i] === "e"
      ? (newPassword += "3")
      : string[i] === "o"
      ? (newPassword += "0")
      : string[i] === "l"
      ? (newPassword += "1")
      : (newPassword += string[i]);
  }
  return newPassword;
};
console.log(obfuscate(getNewString));

/*
//using if and else statement
const obfuscate = function (string) {
  let newPassword = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      newPassword += "4";
    } else if (string[i] === "e") {
      newPassword += "3";
    } else if (string[i] === "o") {
      newPassword += "0";
    } else if (string[i] === "l") {
      newPassword += "1";
    } else {
      newPassword += string[i];
    }
  }
  return newPassword;
};
console.log(obfuscate(string));
*/
