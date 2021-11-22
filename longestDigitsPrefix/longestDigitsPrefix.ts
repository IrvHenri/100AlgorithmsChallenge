export function longestDigitsPrefix(inputString: string): string {
  let result = [];
  for (let i of inputString) {
    let toNum = parseInt(i, 10);
    if (!isNaN(toNum)) {
      result.push(i);
    } else {
      return result.join("");
    }
  }
}

console.log(longestDigitsPrefix("123aa1"));
