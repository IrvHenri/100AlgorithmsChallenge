export function addBorder(picture: string[]): string[] {
  let starWall = ""
  let starWallLength = picture[0].length + 2

  while(starWall.length < starWallLength){
    starWall += '*'
  }

  let newArray = picture.map(string => `*${string}*`)
  newArray.unshift(starWall)
  newArray.push(starWall)

  return newArray
}

// console.log(addBorder(["abc", "ded"]));