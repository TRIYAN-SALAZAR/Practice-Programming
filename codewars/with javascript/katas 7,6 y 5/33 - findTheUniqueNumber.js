function findUniq(arr) {
    let aux = undefined;
    let aux2 = undefined;
    let auxArr;

    for (let i = 0; i < arr.length; i++) {
        aux = arr[i];
        aux2 = arr[i + 1]
        if (aux === aux2 || aux === arr[i + 2]) {
            auxArr = arr.filter(e => e !== aux);
        }
    }

    return auxArr[0];
}


/*}
This code snippet defines a function findUniqueElement that iterates through an array
and checks for consecutive elements that are equal or elements that are repeated twice in a row.
If it finds such elements, it returns the first non-repeated element from the array.

*/
function findUniqueElement(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        const currentElement = arr[i];
        const nextElement = arr[i + 1];
        if (currentElement === nextElement || currentElement === arr[i + 2]) {
            return arr.filter(element => element !== currentElement)[0];
        }
    }
}

