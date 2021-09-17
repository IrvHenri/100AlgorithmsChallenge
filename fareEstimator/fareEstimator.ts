export function fareEstimator(
  ride_time: number,
  ride_distance: number,
  cost_per_minute: number[],
  cost_per_mile: number[]
): number[] {
  // (Cost per minute) * (ride time) + (Cost per mile) * (ride distance)
  let cspByRt = cost_per_minute.map((cost) => cost * ride_time);
  let csmRd = cost_per_mile.map((cost) => cost * ride_distance);
  let result: number[] = [];
  cspByRt.forEach((cost, i) => {
    let fare = Number((cost + csmRd[i]).toFixed(1));

    result.push(fare);
  });
  return result;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
