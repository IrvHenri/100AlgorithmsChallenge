export function evenDigitsOnly(n: number): boolean {
  const isEveryNumEven = [...n.toString()].every(
    (num) => parseInt(num, 10) % 2 === 0
  );

  return isEveryNumEven;
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
