export function integerToStringOfFixedWidth(
  number: number,
  width: number
): string {
  let numToString = number.toString();
  if (numToString.length > width) {
    return numToString.substring(width);
  }
  if (numToString.length === width) {
    return numToString;
  }
  if (numToString.length < width) {
    let difference = width - numToString.length;
    let trailingZeroes = "";
    for (let i = 0; i < difference; i++) {
      trailingZeroes += "0";
    }

    return trailingZeroes + numToString;
  }
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
