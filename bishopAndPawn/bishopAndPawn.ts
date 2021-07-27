export function bishopAndPawn(bishop: string, pawn: string): boolean {
  let columns = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let boardRowLength = 8;
  let bishopX = bishop[0];
  let bishopY = parseInt(bishop[1]);
  let bishopXIndex = columns.indexOf(bishopX);
  let bishopAttackCoords = [];
  for (let i = 0; i < boardRowLength; i++) {
    bishopAttackCoords.push(`${columns[bishopXIndex]}${bishopY}`);
    bishopY += 1;
    bishopXIndex += 1;
  }

  if (bishopAttackCoords.includes(pawn)) {
    return true;
  }
  return false;
}

console.log(bishopAndPawn("a1", "c3"));
