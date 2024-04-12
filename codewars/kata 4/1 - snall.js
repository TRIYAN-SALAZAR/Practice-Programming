snail = function (array) {
    const SNALL = [];
    const LIMIT = array.length * array.length;
    let steps = array.length - 1;
    let angle = array.length > 3 ? true : false;
    let countSteps = 0;
    let step = 0;

    while (countSteps < LIMIT) {


    }

    return snail
}

console.log(' result:  ', snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]).join('-'), '\n', 'expected:', [1, 2, 3, 6, 9, 8, 7, 4, 5].join('-'));

/*
    recorrido:
    0, 0
    0, 1
    0, 2

    1, 2
    2, 2
    2, 1

    2, 0
    1, 0
    1, 1
*/