let arr1 = ["3", "a", "3", "A", "3"];
const reverseAlpabateci = (arr) => {
  let p1 = 0;
  let p2 = arr.length - 1;
  while (p1 < p2) {
    let firstChar = arr[p1];
    let lastChar = arr[p2];
    if (isAlpha(firstChar) && isAlpha(lastChar)) {
      arr[p1] = lastChar;
      arr[p2] = firstChar;
      p1++;
      p2--;
    } else if (!isAlpha(firstChar) && !isAlpha(lastChar)) {
      p1++;
      p2--;
    } else if (!isAlpha(firstChar)) {
      p1++;
    } else {
      p2--;
    }
  }
  return arr;
};
function isAlpha(char) {
  if ((char <= "z" && char >= "a") || (char <= "Z" && char >= "A")) return true;

  return false;
}
// console.log(reverseAlpabateci(arr1))
