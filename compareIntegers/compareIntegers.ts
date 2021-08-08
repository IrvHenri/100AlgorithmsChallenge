export function compareIntegers(a: string, b: string): string {
  let aToNum = Number(a);
  let bToNum = Number(b);

  if(aToNum < bToNum){
    return 'less'
  }

  if(aToNum > bToNum){
    return 'greater'
  }
  
  if(aToNum === bToNum){
    return 'equal'
  }

}

console.log(compareIntegers("12", "13"));
console.log(compareIntegers("875", "799"));
console.log(compareIntegers("1000", "1000"));
