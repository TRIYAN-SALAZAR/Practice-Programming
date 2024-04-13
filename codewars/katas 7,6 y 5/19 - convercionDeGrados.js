
// objeto con 3 metodos correspondientes a grados celcius, kelvin y fahreheit
const gradosCKF = {
    celcius: (valor, convertirA) => {
        switch(convertirA) {
            case "k":
                return valor +273.15;
                break;
            case 'f':
                return ((9/5)*valor)+32 ;
                break;
            default:
                return `El tipo de conversión no es correcto`;
        }
    },
    kelvin: (valor, convertirA) => {
        switch(convertirA){
            case"c":
                return valor - 273.15;
                break;
            case'f':
                return valor * (9/5) - 459.67;
                break;
            default :
                return`El tipo de conversión no es correcto`;
        }

    },
    fahrenheit: (valor, convertirA) => {
        switch(convertirA){
            case"c":
                return((valor - 32)*(5/9));
                break;
            case 'k':
                return (valor + 459.67) * 5/9;
                break;
            default:
                return`El tipo de conversión no es correcto`;
        }

    }
}

function conversiones(valor, tipoDeGrado, convertirA){
    return gradosCKF[tipoDeGrado](valor, convertirA);
}

console.log(conversiones(233,'fahrenheit', 'k'));