let pr = 1;

function countdown(n) {
    if (n < 1) {
        // console.log('Fin')
        return [];
    } else {
        // console.log('proceso... '+ pr++ + '...')
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        // console.warn('arrreglo: ' + countArray)
        return countArray;
    }
}

console.log(countdown(5))