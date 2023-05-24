const num = 1234;
const num1 = 10;
function sumDigits(num) {
  let sum = 0;
  const cycles = Math.ceil(Math.log10(num));
  let numOfdivision = 1;
  for (let i = 0; i <= cycles; i++) {
    sum += Math.floor(num / numOfdivision) % 10;
    numOfdivision *= 10;
  }

  return sum;
}
function oneDigit(num) {
  let oneNumSum = sumDigits(num);
  if (Math.floor(Math.log10(oneNumSum)) < 1) return oneNumSum;
  console.log(oneNumSum);
  return oneDigit(oneNumSum);
}

console.log(oneDigit(num));
