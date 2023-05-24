// // const str = "bubble";
// // const shortest_palindrome = (str) => {
// //   let res = "";
// //   let i = 0,
// //     j = 1,
// //     chars = "";
// //   while (i < str.length && j < str.length) {
// //     console.log("str[i]", str[i], "str[j]", str[j]);
// //     if (str[i] !== str[j]) {
// //       console.log("j", j);
// //       j++;
// //     } else {
// //       let leng = str.length - j - 1;
// //       for (let k = 0; k < leng; k++) {
// //         chars += "x";
// //         console.log("here");
// //       }
// //       break;
// //     }
// //   }
// //   let index = str.length - 1;
// //   for (let n = 0; n < chars.length; n++) {
// //     res += str[index];
// //     index--;
// //   }
// //   res += str;
// //   return res;
// // };
// // console.log("result", shortest_palindrome("mohammed"));
// Find Shortest
// Palindrome Possible
// Question
// We have a string str like the following:
// anna
// JAVASCRIPT
// const str =

// Find a way to convert it to a palindrome by inserting characters
// in front of it. Recall that
// a palindrome is defined as
//"a word, phrase, or sequence that reads the same backward as
// forward".
// What's the shortest palindrome
// that can be returned? For example, the following above
// string should return:
// JAVASCRIPT
// shortestPalindrome("bubble")
// "elbbubble"
//  cbabc

//  abbazabba

// we check if the string is apal or not
//
const shortest = (str) => {
  str = str.split("");
  let i = 0;
  let j = str.length - 1;
  let res = [];
  while (i <= j) {
    if (str[i] === str[j] && str[i] !== str[j - 1]) {
      res.push(str[i]);
      i += 1;
      j -= 1;
    } else {
      res.push(str[j]);
      j -= 1;
    }
  }
  console.log(".............................", res, str);
  res.pop();
  res.push(...str);
  return res; // have to be odd
};
// the easy solution
elb bub ble
res elb
fz
ana zf
const shorted2 = (str) => {
  const arr = str.split("");
  const res = [];
  while (arr.length) {
    if (isPal(arr)) return res.join("") + arr.join("") + res.reverse().join("");
    res.push(arr.pop());
  }
};

function isPal(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] == arr[j]) {
      i += 1;
      j -= 1;
    } else return false;
  }
  return true;
}
console.log("shortest", shorted2("mohm"));
