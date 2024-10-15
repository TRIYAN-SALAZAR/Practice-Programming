function isValidWalk(walk) {
    const steps = walk.join('').split('');
    let n = 0, s = 0, e = 0, w = 0;
    if (steps.length > 10 || steps.length < 10) return false;
    steps.forEach((element) => {
        if (element === 'n') n++;
        if (element === 's') s++;
        if (element === 'e') e++;
        if (element === 'w') w++;
    });
    console.log(steps)
    return n - s === 0 && e - w === 0 ? true : false;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(isValidWalk(['e', 'w', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w']));
