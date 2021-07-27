export function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  let result = [];
  for (let num of inputArray) {
    if (num === elemToReplace) {
      result.push(substitutionElem);
    } else {
      result.push(num);
    }
  }

  return result;
}

// console.log(arrayReplace([1, 2, 1], 1, 3));
