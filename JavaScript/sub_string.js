const str = "adfkdjfjkdjalsjioenfcnneoi"; // length = 8;
console.log("adfkdjfj".length);
const subStr = "kdjals";
function subString(str, subStr) {
  let i = 0;
  let j = 0;
  let matchingChars = 0;
  let arr = [];
  while (i <= str.length || j <= subStr.length) {
    if (matchingChars === subStr.length) {
      arr = [i - j - 1, i - 1];
      return arr;
    } else if (str[i] === subStr[j]) {
      matchingChars++;
      i++;
      j++;
    } else if (str[i] !== subStr[j]) {
      i++;
      j = 0;
      matchingChars = 0;
    }
  }

  if (matchingChars !== subStr.length) return;
  return arr;
}
console.log(subString(str, subStr));
