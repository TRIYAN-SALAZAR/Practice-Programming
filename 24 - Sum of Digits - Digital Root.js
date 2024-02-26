function digitalRoot(n) {
    let total;
    let num = n;

    do {
        total = 0;
        total += num % 10;
        num = Math.floor(num / 10);
        num += total;
    } while(num >= 10)

    return num
}

console.log(digitalRoot(16));
// console.log(digitalRoot(942));
// console.log(digitalRoot(132189));
// console.log(digitalRoot(493193));