// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // const characters = [];
  // const reverseString = [];
  // for (const char of str) {
  //   characters.push(char);
  // }
  // for (const char in str) {
  //   reverseString.push(characters.pop());
  // }
  // return reverseString;

  // let reverse = "";
  // for (const char of str) {
  //   reverse = char + reverse;
  // }
  // return reverse;

  return str.split("").reduce((rev, char) => char + rev, "");
}
