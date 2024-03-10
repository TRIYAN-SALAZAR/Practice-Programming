/*
    Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size 
    (segundo argumento) y los devuelva como un arreglo bidimensional.
*/

function chunkArrayInGroups(arr, size) {
    const newArr = [];
    let lengthArr = arr.length;
    for (let i = 0; i < lengthArr; i++) {
        let removed = arr.splice(0, size);
        if (removed.length === 0) break;
        newArr.push(removed)
    }
    return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);