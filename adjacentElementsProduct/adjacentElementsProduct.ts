export function adjacentElementsProduct(inputArray: number[]): number {
  let max = 0;

  for (let i = 0; i < inputArray.length; i++){
    if(inputArray[i] && inputArray[i + 1]){
      let product = inputArray[i] * inputArray[i + 1]
        max = product > max ? product : max
    }
  }
  return max
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));