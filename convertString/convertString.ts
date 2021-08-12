export function convertString(s: string, t: string): boolean {
  let convertedS = [...s];
  let tIndex = 0;
  let word = "";

  for (let i = 0; i < convertedS.length; i++) {
    if (convertedS[i] === t[tIndex]) {
      word = word.concat(convertedS[i]);
      tIndex++;
      if (word === t) {
        return true;
      }
    }
  }

  return false;
}

console.log(convertString("ceoydefthf5iyg5h5yts", "codefights"));
console.log(convertString("addbyca", "abcd"));
