export function firstNotRepeatingCharacter(s: string): string {
  let instancesofChar = {};
  for (let char of s) {
    if (instancesofChar[char]) {
      instancesofChar[char] += 1;
    } else {
      instancesofChar[char] = 1;
    }
  }
  for (let key in instancesofChar) {
    if (instancesofChar[key] < 2) {
      return key;
    }
  }

  return "_";
}

console.log(firstNotRepeatingCharacter("abacabad"));
console.log(firstNotRepeatingCharacter("abacabaabacaba"));
