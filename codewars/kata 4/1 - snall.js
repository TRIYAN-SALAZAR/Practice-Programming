class Snall {
    constructor(array) {
        this.array = array;
    }

    up() {
        const value = [];
        const longitud = this.array.length - 1;

        for (let i = longitud; i >= 0; i--) {
            value.push(this.array[i].splice(0, 1)[0]);
        }

        return value;
    }

    down() {
        const value = [];
        const length = this.array.length;
        for (let i = 0; i < length; i++) {
            value.push(this.array[i].splice(-1, 1)[0]);
        }

        return value;
    }

    left() {
        return this.array.pop().reverse();
    }

    right() {
        return this.array.shift();
    }
}

function snail(array) {
    const SNALL = [];
    const snall = new Snall(array);
    const matrizLength = array.length - 1;

    do {
        SNALL.push(...snall.right());
        if (array.length === 0) break;
        SNALL.push(...snall.down());
        if (array.length === 0) break;
        SNALL.push(...snall.left());
        if (array.length === 0) break;
        SNALL.push(...snall.up());
    } while (SNALL.length !== matrizLength);

    return SNALL;
}
// console.log(' result:  ' ,'\n', 'expected:',);

console.log(' result:  ', snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]).join('-'), '\n', 'expected:', [1, 2, 3, 6, 9, 8, 7, 4, 5].join('-'));
console.log('longitud: ', snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]).length);
console.log('longitud expected: ', 9);
// console.log(' result:  ', snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), '\n', 'expected:', [1, 2, 3, 6, 9, 8, 7, 4, 5]);

console.log('----------------------------------------------------------------------------');

// console.log(' result:  ', snail([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]),'\n', 'expected:', [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
console.log(' result:  ', snail([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]).join('-'), '\n', 'expected:', [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10].join('-'));
console.log('longitud: ', snail([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]).length);
console.log('longitud expected: ', 16);

console.log('----------------------------------------------------------------------------');

// console.log(' result:  ', snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), '\n', 'expected:', [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
console.log(' result:  ', snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]).join('-'), '\n', 'expected:', [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13].join('-'));
console.log('longitud: ', snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]).length);
console.log('longitud expected: ', 25);

console.log('----------------------------------------------------------------------------');

console.log(' result:  ', snail([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18], [19, 20, 21, 22, 23, 24], [25, 26, 27, 28, 29, 30], [31, 32, 33, 34, 35, 36]]).join('-'), '\n', 'expected:', [1, 2, 3, 4, 5, 6, 12, 18, 24, 30, 36, 35, 34, 33, 32, 31, 25, 19, 13, 7, 8, 9, 10, 11, 17, 23, 29, 28, 27, 26, 21, 22, 26, 20, 14, 15, 16, 21].join('-'));
console.log('longitud: ', snail([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18], [19, 20, 21, 22, 23, 24], [25, 26, 27, 28, 29, 30], [31, 32, 33, 34, 35, 36]]).length);
console.log('longitud expected: ', 36);