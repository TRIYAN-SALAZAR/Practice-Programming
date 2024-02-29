function plusMinus(arr) {
    let numbersPositives = 0;
    let numbersNegatives = 0;
    let Zeros = 0;

    for(let i = 0;i < arr.length; i++) {
        if(arr[i] > 0) {
            numbersPositives++;
        } else if(arr[i] < 0) {
            numbersNegatives++;
        }else if(arr[i] === 0) {
            Zeros++;
        }
    }

    let divisionPositivos = numbersPositives / arr.length;
    let divisionNegativos = numbersNegatives / arr.length;
    let divisionZeros = Zeros / arr.length;

    let numeros = `Ceros: ${Zeros}\nPositivos: ${numbersPositives}\nNegativos: ${numbersNegatives}\n`;
    let rel = `--------DIVISIONES---------\nCeros D: ${divisionZeros.toFixed(6)}\nPositivos D: ${divisionPositivos.toFixed(6)}\nNegativos D: ${divisionNegativos.toFixed(6)}`;

    return numeros + rel;
}

console.log(plusMinus([1,1,3, 0,-1,-1]));
