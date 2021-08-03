export function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let indexOfCell1 = alphabet.indexOf(cell1[0]);
  let indexOfCell2 = alphabet.indexOf(cell2[0]);

  if (checkEven(indexOfCell1) && checkEven(indexOfCell2)) {
    return true;
  }
  return false;
}

const checkEven = (index) => {
  return index % 2 === 0;
};

// console.log(chessBoardCellColor("A1", "C3"));
console.log(chessBoardCellColor("A1", "H3"));
