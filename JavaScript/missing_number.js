const arr = [2, 5, 1, 4, 9, 6, 3, 7];
const low = 1;
const high = 9;
function iMissU(arr, l, h) {
  const n = h - l + 1;
  const sum = (n + 1) * (n / 2);
  let arrSum = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  return sum - arrSum;
}
console.log(iMissU(arr, low, high));
