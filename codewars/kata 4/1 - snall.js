snail = function (array) {
    const SNALL = [];
    const STEPS_ = array.length * array.length;
    let aux = 0;
    let aux2 = 0;

    let state = 'RIGHT';
    let count = 0;

    do {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 0) array.splice(i, 1);
        }

        count++;
        aux2 = array.length;

        switch (state) {
            case 'RIGHT':
                for (let i = 0; i < array[aux].length;) {
                    SNALL.push(array[aux].splice(0, 1)[0]);
                }
                state = 'DOWN';
                break;
            case 'DOWN':
                for (let i = 0; i < aux2; i++) {
                    SNALL.push(array[i].splice(aux2 - 1, 1)[0])
                }
                aux = array.length - 1;
                state = 'LEFT';
                break;

            case 'LEFT':
                for (let i = aux2; i > 0; i--) {
                    SNALL.push(array[aux].splice(-1, 1)[0]);
                }
                aux = 0;
                state = 'UP';
                break;

            case 'UP':
                for (let i = aux2; i > 0; i--) {
                    SNALL.push(array[i - 1].splice(aux, 1)[0]);
                }
                aux = 0;
                state = 'RIGHT';
                break;
        }
    } while (count < STEPS_);

    return SNALL.filter(e => e !== undefined);
}
// console.log(' result:  ' ,'\n', 'expected:',);

// console.log(' result:  ', snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]).join('-'), '\n', 'expected:', [1, 2, 3, 6, 9, 8, 7, 4, 5].join('-'));
// console.log(' result:  ', snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), '\n', 'expected:', [1, 2, 3, 6, 9, 8, 7, 4, 5]);



// console.log(' result:  ', snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), '\n', 'expected:', [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
console.log(' result:  ', snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]).join('-'), '\n', 'expected:', [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13].join('-'));

