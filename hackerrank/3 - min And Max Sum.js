function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);

    let min = arr.slice(0, 4).reduce((a, b) => a + b);
    let max = arr.slice(1, 5).reduce((a, b) => a + b);

    return `${min} ${max}`;
}

console.log(miniMaxSum([2,3,4,5,1]))