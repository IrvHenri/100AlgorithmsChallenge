export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
let myStrength = yourLeft + yourRight;
let friendsStrength = friendsRight + friendsLeft;
  
  if(myStrength === friendsStrength){
    return true
  }

return false;
}

// console.log(areEquallyStrong(10, 15, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 9))
