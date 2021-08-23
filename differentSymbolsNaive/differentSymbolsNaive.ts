export function differentSymbolsNaive(s: string): number {
  let uniqueChars = {};
  for (let char of s) {
    uniqueChars[char] = 1;
  }
  return Object.keys(uniqueChars).length;
}

console.log(differentSymbolsNaive("cabca"));
