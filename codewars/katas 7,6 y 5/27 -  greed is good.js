function score(dice) {
    const points = [1000, 200, 300, 400, 500, 600];

    let score = 0;
    const countMap = new Map();

    dice.forEach(e => countMap.set(e, (countMap.get(e) || 0) + 1));

    countMap.forEach((value, key) => {
        if (value >= 3) {
            score += points[key - 1];
            countMap.set(key, value - 3);
        }
    });
    countMap.forEach((value, key) => key === 1 ? score += (value * 100) : key === 5 ? score += (value * 50) : null);

    return score;
}

console.log(score([2, 3, 2, 1, 2]));
console.log(score([3, 3, 5, 5, 3]));
console.log(score([1, 1, 1, 3, 3]));
