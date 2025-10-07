function stringToInt(str) {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    num = num * 10 + (str.charCodeAt(i) - 48);
  }
  return num;
}

console.log(stringToInt("1234")); // Output: 1234
