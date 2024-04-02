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

function findUniqueElement(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        const currentElement = arr[i];
        const nextElement = arr[i + 1];
        if (currentElement === nextElement || currentElement === arr[i + 2]) {
            return arr.filter(element => element !== currentElement)[0];
        }
    }
}


