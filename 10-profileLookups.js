// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    let result = undefined;
    for(let i = 0; i < contacts.length; i++) {
        console.log(contacts[i].firstName === name)
        if(contacts[i].firstName === name) {
            if(contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            }else {
                return 'No such property';
            }
        }else{
            result = "No such contact";
        }
    }
    return result;
}




//esto no tiene nada que ver con el ejercicio

function generarNumeroAleatorio(min, max) {
    // return Math.floor(Math.random() * ( 4 - 1 + 1) + 1);
    // return Math.floor(Math.random() * ( max - min + 1) + min);
    // return (Math.random() * 5);
    let ram = Math.random()
    console.log('valor original: ' + ram)
    console.log('valor redondeo: ' + ram * 6)
}

// for(let i = 0; i < 20; i++) {
//     generarNumeroAleatorio(1,6)
// }

