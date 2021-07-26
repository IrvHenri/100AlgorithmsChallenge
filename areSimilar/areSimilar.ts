export function areSimilar(a: number[], b: number[]): boolean {
  let result = false;
  let uniqueNumbers = {};
  for (let i = 0; i < a.length; i++) {
    if (uniqueNumbers[a[i]]) {
      break;
    } else {
      uniqueNumbers[a[i]] = a[i];
    }
  }
  let uniqueArray = Object.values(uniqueNumbers);
  if (uniqueArray.length !== b.length) {
    return false;
  }

  for (let val of a) {
    if (b.includes(val)) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
}

// console.log(areSimilar([1, 2, 3], [1, 2, 3]));
// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
// console.log(areSimilar([1, 2, 2], [2, 1, 1]));
