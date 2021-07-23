export function alphabeticShift(inputString: string): string {

let stringArray = [...inputString].map( (char,i) => {
  let charCode = inputString.charCodeAt(i)
  if(charCode === 122){
    return String.fromCharCode(charCode - 25)
  } 
  return String.fromCharCode(charCode + 1)
 
})

return stringArray.join('')
}

// console.log(alphabeticShift('crazy'));