function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}

function generarMatrizBidiMensional(x){
    const matriz = [];
    console.log(x)

    if(x == undefined){
        for (let i = 0; i < 3; i++){
            matriz[i] = [];
            for (let j = 0; j < 3; j++){
                matriz[i][j] = generarNumeroAleatorio(1, 10);
            }
        }
    }else{
        for (let i = 0; i < x; i++){
            matriz[i] = [];
            for (let j = 0; j < x; j++){
                matriz[i][j] = generarNumeroAleatorio(1, 100);
            }
        }
    }

    console.log(matriz)
    return matriz;
}

function generarMatriz(x, ...b){
    const matriz = [];

    for(let i = 0; i < x; i++){
        matriz[i] = generarNumeroAleatorio(1, 6);
    }

    return matriz;
}

function gato(){
    const matriz = [];

    for(let i = 0; i < 3; i++){
        matriz[i] = [];
        for(let j = 0; j < 3; j++){
            matriz[i][j] = generarNumeroAleatorio(0, 2);
        }
    }

    return matriz;
}

module.exports = {
    matrizCuadrada: generarMatrizBidiMensional,
    matriz: generarMatriz,
    gato: gato

};