export function isTandemRepeat(inputString: string): boolean {
  let middleIndex = inputString.length / 2;
  let firstWord = inputString.substring(0, middleIndex);
  let secondWord = inputString.substring(middleIndex);

  let isOdd = (inputString.length / 2) % 2 !== 0;
  if (isOdd) {
    return false;
  }
  return firstWord === secondWord;
}

console.log(isTandemRepeat("tandemtandem"));
console.log(isTandemRepeat("qqq"));
console.log(isTandemRepeat("2w2ww"));
