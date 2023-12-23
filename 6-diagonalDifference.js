import { matrizCuadrada } from './6.1-Genera Matriz';

function disagonalDifference(arr) {
    const leftDiagonal = [arr[0][0], arr[1][1], arr[2][2]].reduce((anterior, actual) => {
        return actual + anterior;
    });
    const rightDiagonal = [arr[0][2], arr[1][1], arr[2][0]].reduce((anterior, actual) => {
        return actual + anterior;
    });

    console.log('left :' + leftDiagonal);
    console.log('right :' + rightDiagonal);
    return rightDiagonal - leftDiagonal;
}

function diagonalDifference(arr) {
    let izquierda = 0;
    let derecha = 0;

    for(let i = 0; i < arr.length;) {
        izquierda += arr[i][i];
        i++;
    }
    
    for(let i = 0; i < arr.length;) {
        for(let j = arr.length - 1; j >= 0; j--) {
            derecha += arr[i][j];
            i++;
        }
    }

    /*
        if(derecha > izquierda){
            return derecha - izquierda;
        }else if(izquierda > derecha){
            return izquierda - derecha;
        }
    
    */

    return ( derecha > izquierda ? derecha - izquierda : izquierda - derecha );
}

// console.log(diagonalDifference(ms.matriz))

console.log('resultado: ' + diagonalDifference(matrizCuadrada(process.argv[2])));