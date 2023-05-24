const num = 100;
const num2 = 15;
const num3 = 1;
function primeSum(num) {
  const sum = 0;
  if (num > 41) {
    sum = great(num);
    sum += small(num);
  } else {
    sum = small(num);
  }
  return sum;
}
function small(num) {
  const smallSum = 0;
  for (let i = 1; i <= num; i++) {
    let first = 6 * num - 1;
    let sec = 6 * num + 1;
    smallSum += first + sec;
  }
  return smallSum;
}
function great(num) {
  const greatSum = 0;
  for (let i = 0; i <= num; i++) {
    greatSum += Math.pow(num, 2) + n + 41;
  }
  return greatSum;
}
console.log(primeSum(num2));
