//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // 1st way
  // let reverse = "";
  // for (const char of str) {
  //   reverse = char + reverse;
  // }
  // return reverse;

  // // 2nd way

  // // "hello".split = ["h","e","l"....]

  // const characters = str.split("");
  // const reverseString = [];
  // for (const char in str) {
  //   reverseString.push(characters.pop());
  // }
  // return reverseString.join("");

  // 3rd way
  return str.split("").reduce((rev, char) => char + rev, "");
}
console.log("reverse", reverse("hello"));
// https://github.com/moemisri/problem_solving
