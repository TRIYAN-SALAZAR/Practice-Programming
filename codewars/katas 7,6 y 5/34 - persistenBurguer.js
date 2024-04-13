function persistence(num) {
    console.log('----------------------------------');
    let count = 0;
    let result = 1;
    let band = true;
    const arr = num.toString().split('');
    console.time('persistenceVersion1');
    arr.forEach(e => e === '0' ? count = 1 : null);
    if(count === 1) return 1;
    do {
        arr.forEach(e => result *= parseInt(e));
        let str = result.toString();
        for (let i = 0; i < str.length; i++) {

            arr.splice(i, 1, str[i]);
            if(arr[i] === '0') {
                count++
                band = false;
                break;
            }
        }
        count++
        if(str.length < arr.length) arr.splice(str.length, arr.length);
        if (str.length === 1) band = false;

        result = 1;
    } while (band !== false)
    console.timeEnd('persistenceVersion1');
    return count;
}

console.log('count: ', persistence(7249628), '| expected: 3');
console.log('count: ', persistence(999), '| expected: 4');
console.log('count: ', persistence(6339921), '| expected: 5');
console.log('count: ', persistence(6768988), '| expected: 4');
console.log('count: ', persistence(8024710), '| expected: 1');

function persistenceVersion2(num) {
    console.time('persistenceVersion2');
    for(var i = 0; num > 9; i++) {
        num = num.toString().split('').reduce((t, c) => c * t);
    }
    console.timeEnd('persistenceVersion2');
    return i;
}

console.log('count: ', persistenceVersion2(7249628), '| expected: 3');
console.log('count: ', persistenceVersion2(999), '| expected: 4');
console.log('count: ', persistenceVersion2(6339921), '| expected: 5');
console.log('count: ', persistenceVersion2(6768988), '| expected: 4');
console.log('count: ', persistenceVersion2(8024710), '| expected: 1');