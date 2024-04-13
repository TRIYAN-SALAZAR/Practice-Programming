function solution(number) {
    if (number < 4) return 0;

    const multipleThree = [];
    const multipleFive = [];

    for (let i = 0; i < number; i++) {
        multipleFive.push(i * 5);
        if (multipleThree[i] >= number) {
            multipleThree.push(i * 3);
        }
    }

    for (let i = 0; i < number; i++) {
        if (multipleFive[i] >= number) {
            multipleFive.pop();
            break;
        }
    }
}

console.log('gika nyda 88'.includes('88'))