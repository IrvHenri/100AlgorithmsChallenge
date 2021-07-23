export function addTwoDigits(n: any): number {
return n.toString().split('').map(num => Number(num)).reduce((acc,val ) => acc + val,0)
}

console.log(addTwoDigits(29));