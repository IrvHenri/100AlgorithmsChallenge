export function allLongestStrings(inputArray: string[]): string[] {
let maxLength = inputArray[0].length

for (let val of inputArray){
  maxLength = val.length > maxLength ? val.length : maxLength
}
return inputArray.filter( string => string.length >= maxLength)
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));