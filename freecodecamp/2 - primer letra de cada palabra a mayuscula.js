function titleCase(str) {
    return str.split(' ').map(e => e.toLowerCase()).map(e => e[0].toUpperCase() + e.slice(1)).join(' ');
}

// console.log(titleCase("I'm a little tea pot"));


// comprobar si una cadena proporcionada contiene todas las letras de otra
function mutation(arr) {
    arr[0] = arr[0].toLowerCase();
    arr[1] = arr[1].toLowerCase();

    console.log(arr);

    let arr1 = arr[0].split('');
    let arr2 = arr[1].split('');
    let count = 0;
    
    for(let i = 0; i < arr2.length; i++) {
        if(arr1.includes(arr2[i])) {
            count++;
        }
    }

    return count === arr2.length;
}

// console.log(mutation(["hello", "Hello"]));

for(let i = 0; i < 3; i++) {
    console.log(i);
}