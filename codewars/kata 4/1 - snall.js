class Snall {
    constructor(array) {
        this.array = array;
    }

    up() {
        return this.array.map(e => e.splice(0, 1)[0]).reverse();
    }

    down() {
        return this.array.map(e => e.splice(-1, 1)[0]);
    }

    left() {
        return this.array.pop().reverse();
    }

    right() {
        return this.array.shift();
    }

    get show() {
        return this.array;
    }

    get length(){
        return this.array.length
    }
}

function snail(array) {
    const SNALL = [];
    const snall = new Snall([...array]);

    console.time('time');
    do {
        SNALL.push(...snall.right());
        if (snall.length === 0) break;
        SNALL.push(...snall.down());
        if (snall.length === 0) break;
        SNALL.push(...snall.left());
        if (snall.length === 0) break;
        SNALL.push(...snall.up());
        if (snall.length === 0) break;
    } while (true);
    console.timeEnd('time');
    return SNALL;
}
// console.log(' result:  ' ,'\n', 'expected:',);
const sn1 = snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(' result:  ', sn1.join('-'), '\n', 'expected:', [1, 2, 3, 6, 9, 8, 7, 4, 5].join('-'));
console.log('longitud: ', sn1.length);
console.log('longitud expected: ', 9);
// console.log(' result:  ', snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), '\n', 'expected:', [1, 2, 3, 6, 9, 8, 7, 4, 5]);

console.log('----------------------------------------------------------------------------');
const sn2 = snail([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]);
// console.log(' result:  ', snail([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]),'\n', 'expected:', [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
console.log(' result:  ', sn2.join('-'), '\n', 'expected:', [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10].join('-'));
console.log('longitud: ', sn2.length);
console.log('longitud expected: ', 16);

console.log('----------------------------------------------------------------------------');
const sn3 = snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]);
// console.log(' result:  ', snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), '\n', 'expected:', [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
console.log(' result:  ', sn3.join('-'), '\n', 'expected:', [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13].join('-'));
console.log('longitud: ', sn3.length);
console.log('longitud expected: ', 25);

console.log('----------------------------------------------------------------------------');

const sn4 = snail([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18], [19, 20, 21, 22, 23, 24], [25, 26, 27, 28, 29, 30], [31, 32, 33, 34, 35, 36]]);
console.log(' result:  ', sn4.join('-'), '\n', 'expected:', [1, 2, 3, 4, 5, 6, 12, 18, 24, 30, 36, 35, 34, 33, 32, 31, 25, 19, 13, 7, 8, 9, 10, 11, 17, 23, 29, 28, 27, 26, 20, 14, 15, 16, 22, 21].join('-'));
console.log('longitud: ', sn4.length);
console.log('longitud expected: ', 36);