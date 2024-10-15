function sumTwoSmallNumbers(numbers) {
    let sorted = numbers.sort((a, b) => a - b);
    let sum = sorted[0] + sorted[1];
    return sum;
}

console.log(sumTwoSmallNumbers([15, 28, 4, 2, 43]));