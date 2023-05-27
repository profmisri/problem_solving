const arr = [2, 5, 1, 4, 9, 6, 3, 7, 24];
const lowerBound = 1;
const upperBound = 25;

const hashTableWay = {};
const missingInUnsortedHashTableWay = (arr, lowerBound, upperBound) => {
  const missing = [];
  for (let i = lowerBound; i <= upperBound; i++) {
    const element = lowerBound++;
    hashTableWay[element] = false;
  }
  for (const num of arr) {
    hashTableWay[num] = true;
  }
  for (const num in hashTableWay) {
    if (Object.hasOwnProperty.call(hashTableWay, num)) {
      const element = hashTableWay[num];
      if (!element) {
        missing.push(num);
      }
    }
  }
  return missing;
};
const missingInUnsortedMathWay = (arr, lowerBound, upperBound) => {
  let array_sum = 0;
  const n = upperBound - lowerBound + 1;
  const range_sum = (n * (lowerBound + upperBound)) / 2;
  for (const num of arr) {
    array_sum += num;
  }
  const missing_number = range_sum - array_sum;
  return missing_number;
};
console.log(missingInUnsortedHashTableWay(arr, lowerBound, upperBound));

//console.log(missingInUnsortedHashTableWay(arr, lowerBound, upperBound));
