export function lateRide(n: number): number {
  console.log(n / 60);
  let hours = n / 60;
  let isDecimal = hours % 1;
  if (isDecimal) {
    let hourString = hours.toString().split(".")[0];
    let remainder = (n / 60).toString().split(".")[1];
    let convertedMinutes = (parseInt(remainder) * 60)
      .toString()
      .substring(0, 2);
    let sum = [...hourString, ...convertedMinutes].reduce(
      (a, b) => a + parseInt(b),
      0
    );

    return sum;
  }

  return hours;
}

console.log(lateRide(240));
console.log(lateRide(808));
