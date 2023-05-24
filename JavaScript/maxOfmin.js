const arr = [-1, 3, 4, 6, 7, 2];
function maxOfMin(arr) {
  arr.sort();
  const res = [];
  for (let i = 0; i < arr.length; i += 2) {
    res.push([arr[i], arr[i + 1]]);
  }

  return res;
}
console.log(maxOfMin(arr));
