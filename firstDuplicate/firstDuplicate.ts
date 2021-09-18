export function firstDuplicate(a: number[]): number {
  let occurances = {};
  //Assign Unique keys and occurances in object
  for (let i = 0; i < a.length; i++) {
    let currentNum = a[i];
    // check if occurances has property
    if (occurances[currentNum]) {
      //if it already does then return because this is the FIRST instance of a duplicate number
      return currentNum;
    } else {
      occurances[currentNum] = currentNum;
    }
  }
  return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
