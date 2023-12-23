const a = sum([1], 0) //should equal 0
const b = sum([2, 3, 4], 1)// should equal 2.
const c = sum([2, 3, 4, 5], 3) //should equal 9.

function sum(arr, n) {
    if(n <= 0) {
        return 0;
    }else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}

console.log(a)
console.log(b)
console.log(c)