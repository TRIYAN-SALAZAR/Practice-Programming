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

    // console.log(multipleThree);
    // console.log(multipleFive);

    // let sumThree = 0;
    // let sumFive = 0;

    // for(num3 of multipleThree) {
    //     sumThree += num3;
    // }
    // for(num5 of multipleFive) {
    //     sumFive += num5;
    // }

    // console.log(sumThree)
    // console.log(sumFive)
    // return sumThree + sumFive;
}

// console.log(solution(20));

console.log('gika nyda 89'.includes('88'))