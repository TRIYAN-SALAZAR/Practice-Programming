function isPangram(string) {
    let Stringg = string.toLowerCase();
    const rex = /[A-Za-z]/gi;
    const rexArray = Stringg.match(rex);
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    const alphabetResult = [];
    for(let i = 0; i < alphabet.length; i++) {
        for(let k = 0;k < rexArray.length; k++) {
            if (alphabet[i] === rexArray[k]) {
                alphabetResult.push(true);
                break;
            }
        }
    }

    alphabetResult.pop
    return alphabetResult.length === 26;
    
}

console.log(isPangram("ABCD45EFGH,IkkK,LMNOPQR56STUVW3XYZ"));