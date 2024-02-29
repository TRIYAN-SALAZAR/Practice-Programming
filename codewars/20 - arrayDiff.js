/*
    deberas de crear una funcion la cual recibira dos arreglos como parametros, la cual,
    resta una lista de otra.

    Debe eliminar todos los valores de la lista "a", que están presentes en la lista
    b" manteniendo su orden.

    arrayDiff([1,2,2], [1]) === [2, 2]
    arrayDiff([1,2,2,2,3],[2]) === [1,3]

*/

function arrayDiff(a, b) {
    return a.filter(x => !b.includes(x));
}

console.log('function return: ' + arrayDiff([1,2,2,2,3,4,4,9,9], [2, 4])); //output: [1,3,9,9]