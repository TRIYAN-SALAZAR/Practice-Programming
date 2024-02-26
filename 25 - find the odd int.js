const colors = require('colors');

function findOdd(integers) {
    let result = 0;
    for (let i = 0; i < integers.length; i++) {
        result ^= integers[i];
        console.log('xor: ', colors.cyan(result), ' \t|', 'int: ', colors.cyan(integers[i]));
    }
    return result;
}

// console.log('\nresult: ',findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
console.log(findOdd([33, 1, 1, 2, 3, 5, 2, 5, 3, 33]));

console.log(3^5^3)