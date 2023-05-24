const str = "aabx";
const nonRepeated = (str) => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    obj[element] === undefined ? (obj[element] = 1) : obj[element]++;
  }
  for (let c of str) {
    if (obj[c] === 1) return c;
  }
  return "";
};
console.log(nonRepeated(str));
