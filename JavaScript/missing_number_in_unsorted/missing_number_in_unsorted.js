/*
Problem:
Given an unsorted array of numbers, find the missing number in the series of n consecutive numbers when the array is sorted. You are given a lower bound and an upper bound for this sequence.

Example:
For example, consider the following array:
[2, 5, 1, 4, 9, 6, 3, 7]

If the lower bound is 1 and the upper bound is 9, the missing number in the unsorted series bounded by these two numbers is 8.

Challenge:
Can you find the missing number in O(n) time complexity without sorting the array?

Write a function missingInUnsorted that takes in three parameters: the array of unsorted numbers, the lower bound, and the upper bound. The function should return the missing number.

Example usage:
const arr = [2, 5, 1, 4, 9, 6, 3, 7];
const lowerBound = 1;
const upperBound = 9;

console.log(missingInUnsorted(arr, lowerBound, upperBound));
// Expected output: 8
*/
const arr = [2, 5, 1, 4, 9, 6, 3, 7];
const lowerBound = 1;
const upperBound = 9;
const missingInUnsorted = (arr, lowerBound, upperBound) => {
  // write your code here
};
console.log(missingInUnsorted(arr, lowerBound, upperBound));
// Expected output: 8

const arr2 = [3, 1, 4, 6, 7, 2];
const lowerBound2 = 1;
const upperBound2 = 7;

console.log(missingInUnsorted(arr2, lowerBound2, upperBound2));
// Expected output: 5

const arr3 = [2, 5, 1, 4, 9, 6, 3, 7];
const lowerBound3 = 1;
const upperBound3 = 10;

console.log(missingInUnsorted(arr3, lowerBound3, upperBound3));
// Expected output: 8 (10 is the missing number, but it's outside the range)

const arr4 = [4, 5, 2, 1, 3];
const lowerBound4 = 1;
const upperBound4 = 5;

console.log(missingInUnsorted(arr4, lowerBound4, upperBound4));
// Expected output: No missing number (all numbers in the range are present)

const arr5 = [6, 4, 1, 2, 3];
const lowerBound5 = 1;
const upperBound5 = 6;

console.log(missingInUnsorted(arr5, lowerBound5, upperBound5));
// Expected output: 5
