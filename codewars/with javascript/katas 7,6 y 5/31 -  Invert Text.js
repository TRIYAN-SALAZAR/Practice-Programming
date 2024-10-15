function invertStrin(text) {
    let lengthText = text.length;
    let textFinal = '';
    
    for(let i = 1; i <= lengthText ; i++) {
        textFinal += text[lengthText - i];
    }

    return textFinal
}

console.log(invertStrin('Hello World'));
console.log(invertStrin('Todo un don programador'));
console.log(invertStrin('Hola sindrome del impostor'));