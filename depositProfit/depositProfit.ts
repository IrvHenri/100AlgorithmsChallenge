export function depositProfit(
  deposit: number,
  rate: number,
  threshold: number
): number {
  let initialDeposit = deposit;
  let years = 0;

  while (threshold > initialDeposit) {
    let appreciation = initialDeposit * (rate / 100);
    initialDeposit += appreciation;
    years++;
  }

  return years;
}

console.log(depositProfit(100, 20, 170));
