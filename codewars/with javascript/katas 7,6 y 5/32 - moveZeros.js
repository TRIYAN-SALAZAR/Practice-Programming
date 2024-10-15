function moveZeros(arr) {
    return arr.filter(e => e !== 0).concat(arr.filter(e => e === 0));
}

console.log('result:', moveZeros([1,2,0,1,0,1,0,3,0,1]));
console.log('expected:', [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);