export function missingLetters(str: string): string {
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    let nextChar = str.charCodeAt(i + 1);
    if (nextChar - char !== 1 && !isNaN(nextChar - char)) {
      return String.fromCharCode(nextChar - 1);
    }
  }
  return undefined;
}

console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));
