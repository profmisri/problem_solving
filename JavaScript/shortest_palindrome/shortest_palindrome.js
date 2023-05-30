function shortestPalindrome(s) {
  // we can use two pointers
  let j = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    // right pointer moves while left stays until there is a match
    if (s[i] === s[j]) j++;
    // coz we want to know palindrome midpoint
  } //a n a
  if (j === s.length) return s;
  const palindromeEnd = s.substr(j); // nan
  return (
    palindromeEnd.split("").reverse().join("") +
    shortestPalindrome(s.substr(0, j)) +
    palindromeEnd
  );
}

console.log("output:", shortestPalindrome("aananan"));
