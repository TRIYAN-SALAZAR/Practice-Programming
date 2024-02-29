/*
    Your task is to sort a given string. Each word in the string will contain a single number.
    This number is the position the word should have in the result.

    Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

    If the input string is empty, return an empty string. The words in the
    input String will only contain valid consecutive numbers.
*/
const WORDS = {
    one: {
        word: 'is2 Thi1s T4est 3a',
        resultExpected: 'Thi1s is2 3a T4est'
    },
    two: {
        word: '4of Fo1r pe6ople g3ood th5e the2',
        resultExpected: 'Fo1r the2 g3ood 4of th5e pe6ople'
    },
    three: {
        word: 'Heid7i A8lice Igo3r Gr2eg 6Bob Ja1mila C5indy Fi4ona',
        resultExpected: 'Ja1mila Gr2eg Igo3r Fi4ona C5indy 6Bob Heid7i A8lice'
    }
}

function order(word) {
    return word.word.split(' ').sort((a, b) => {
        return a.match(/\d+/) - b.match(/\d+/);
    }).join(' ');
}

console.log(order(WORDS.one))
console.log(order(WORDS.two))
console.log(order(WORDS.three))
