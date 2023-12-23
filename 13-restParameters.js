function restParameterWithFuntionParameters(...RestOfParameters) {
    console.log(RestOfParameters[3]);

    //dos formas de acceder a la prop de un objecto
    console.log(RestOfParameters[4]['name']);
    console.log(RestOfParameters[4].age)
}

// restParameterWithFuntionParameters(2,5,6,'Hola Mundo',{name:'jorge', age: 19});

function operadorSpread() {
    // spread operator
    const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2;

    arr2 = [...arr1];
    console.log(arr2)
}

operadorSpread();