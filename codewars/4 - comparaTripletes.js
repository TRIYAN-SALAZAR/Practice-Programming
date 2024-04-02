const ms = require('./6.1-Genera Matriz');

function compareTriplets(a, b) {
    let matriz = [0, 0];
    let alice = 0;
    let bob = 0;

    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            matriz[0] = ++alice;
        }else if(b[i] > a[i]){
            matriz[1] = ++bob;
        }
    }
    console.log('|'+ a + '| : |' + b + '|');
    console.log(`puntos alice: ${matriz[0]} \n puntos bob: ${matriz[1]}`)
    return '\npuntuaje :' + matriz;
    /*
            
        if(a[0]>b[0]){
            matriz[0]=++alice;
        }
        if(a[1]>b[1]){
            matriz[0]=++alice;
        }
        if(a[2]>b[2]){
            matriz[0]=++alice;
        }

        if(b[0]>a[0]){
            matriz[1]=++bob;
        }
        if(b[1]>a[1]){
            matriz[1]=++bob;
        }
        if(b[2]>a[2]){
            matriz[1]=++bob;
        }
    
    */
}

// console.log(compareTriplets([5, 6, 7], [3, 6, 10]) +'\n');
// console.log(compareTriplets([17, 28, 30], [99, 16, 8])+'\n');
console.log(`${compareTriplets(ms.matriz(process.argv[2]), ms.matriz(process.argv[2]))}`);