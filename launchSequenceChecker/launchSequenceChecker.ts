export function launchSequenceChecker(
  systemNames: string[],
  stepNumbers: number[]
): boolean {
  let masterLaunch = {};
  //store each stepnum for systemkey in array

  for (let i = 0; i < systemNames.length; i++) {
    let name = systemNames[i];
    if (masterLaunch[name]) {
      masterLaunch[name].push(stepNumbers[i]);
    } else {
      masterLaunch[name] = [stepNumbers[i]];
    }
  }

  // check if proceeding is larger then preceding number.
  let masterLaunchValues = Object.values(masterLaunch);
  for (let value of masterLaunchValues) {
    for (let i = 0; i < value.length; i++) {
      if (value[i] > value[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

console.log(
  launchSequenceChecker(
    ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"],
    [1, 10, 11, 2, 12, 111]
  )
);
console.log(
  launchSequenceChecker(
    ["stage_1", "stage_1", "stage_2", "dragon"],
    [2, 1, 12, 111]
  )
);
