export function characterParity(symbol: string): string {
  let num = parseInt(symbol);
  if (num) {
    return num % 2 === 0 ? "even" : "odd";
  }
  return "not a digit";
}

console.log(characterParity("5"));
console.log(characterParity("8"));
console.log(characterParity("q"));
