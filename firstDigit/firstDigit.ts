export function firstDigit(inputString: string): string {
  let stringArr = [...inputString];
  let result;
  stringArr.forEach((char) => {
    let toNum = parseInt(char, 10);
    if (!isNaN(toNum)) {
      result = char;
    }
  });

  return result;
}

console.log(firstDigit("var_1__Int"));
console.log(firstDigit("q2q-q"));
console.log(firstDigit("0ss"));
