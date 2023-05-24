const arr = [2, 4, 5, 6, 3, 6];
function subArrSum(arr, sum) {
  let res = 0;
  let i = 0;
  let j = 1;
  res += arr[0];
  while (j < arr.length && res !== sum) {
    if (res > sum) {
      res -= arr[i];
      i++;
    }
    if (res < sum) {
      res += arr[j];
      j++;
    }
  }
  if (res === sum) return true;
  return false;
}
console.log(subArrSum(arr, 5));
console.log(subArrSum(arr, 1));
