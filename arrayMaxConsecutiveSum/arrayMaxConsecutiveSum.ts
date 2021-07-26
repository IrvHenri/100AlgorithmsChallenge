export function arrayMaxConsecutiveSum(
  inputArray: number[],
  k: number
): number {
 
  let max = inputArray[0] + inputArray[1]
  for (let i = 0; i < inputArray.length; i++) {
    if(inputArray[i] + inputArray[i + 1] > max){
      max = inputArray[i] + inputArray[i + 1]
    }
  }
  return max
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
