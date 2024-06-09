function dirReduc(arr: string[]): string[] {

  let i = 0
  while (i < arr.length - 1) {
    if (
      (arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH') ||
      (arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH') ||
      (arr[i] === 'WEST' && arr[i + 1] === 'EAST') ||
      (arr[i] === 'EAST' && arr[i + 1] === 'WEST')
    ) {
      arr.splice(i, 2)
      i = 0
    } else {
      i++
    }
  }

  return arr
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), `| Expected: ["WEST"]`);
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]), `| Expected: []`);