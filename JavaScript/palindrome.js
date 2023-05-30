// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
function palindrome(str) {
  const reversed = str.split("").reduce((rev, char) => char + rev);
  console.log("reversed", reversed, "   str", str);
  if (str === reversed) return true;
  return false;
}
console.log(palindrome("anna"));
console.log(palindrome("ann"));
console.log(palindrome("apple"));
console.log(palindrome("moe"));
