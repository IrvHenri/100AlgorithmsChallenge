export function absoluteValuesSumMinimization(a: number[]): number {
    
     if(a.length % 2 !== 0){
        let index = Math.floor(a.length / 2) 
         return  a[index]
     }
     let index = Math.floor(a.length / 2)
    return a[index - 1];
}

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));