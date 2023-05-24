const array = [
  [12, 16],
  [1, 4],
  [2, 5],
  [7, 10],
  [4, 5],
  [12, 22],
  [20, 23],
];

const mergeIntervals = (array) => {
  const result = [];
  if (array.length == 0) return result;
  array.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  console.log("array after sorting: ", array);
  let current = array[0];
  for (let i = 1; i < array.length; i++) {
    // current is the first array A
    // array[i] is th 2nd array B
    if (array[i][0] <= current[1]) {
      // A and B overlap
      current[1] = Math.max(current[1], array[i][1]);
      console.log("current 2nd element: ", current[1]);
      console.log("current: ", current);
    } else {
      result.push(current);
      console.log("what we're pushing: ", current);
      current = array[i];
      console.log("assign the current to: ", current);
    }
  }
  result.push(current);
  console.log("what we're pushing (after looping): ", current);
  return result;
};
console.log("the result", mergeIntervals(array));
