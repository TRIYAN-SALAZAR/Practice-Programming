function moveZeros(arr) {
    const zeros = arr.filter((element) => element !== 0);
    arr.forEach(value => value === 0 ? zeros.push(value) : null);
    return zeros;

    
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))