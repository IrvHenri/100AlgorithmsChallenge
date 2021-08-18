export function differentSymbolsNaive(s: string): number {
  let uniqueChars = [];
  for (let char of s) {
    if (!uniqueChars.includes(char)) {
      uniqueChars.push(char);
    }
  }
  return uniqueChars.length;
}

console.log(differentSymbolsNaive("cabca"));
