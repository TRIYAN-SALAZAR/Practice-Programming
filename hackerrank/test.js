/*
    se usa la estructura de arbolesssssss AAAAAAAAAAAAAAAAA
*/

function mostBalancedPartition(parent, files_size) {
}

/*
    STDIN      Function
    -----      --------

    4     => parent[] size n = 4
    -1    => parent[] = [-1, 0, 0, 0]
    0
    0
    0
    4     => files_size[] size n = 4
    10    => files_size[] = [10, 11, 10, 10]
    11
    10
    10

    output: 19
*/

console.log(mostBalancedPartition([-1, 0, 0, 0], [10, 11, 10, 10]));


function nearlySimilarRectangles(sides) {
    // let result = 0;
    // for (let i = 0; i < sides.length - 1; i++) {
        
    //     for(let j = i + 1; j < sides.length; j++) {
    //         // let oneDivision = (sides[i][0] / sides[j][0]);
    //         // let twoDivision = (sides[i][1] / sides[j][1]);
    //         // if (oneDivision === twoDivision) {
    //         //     result += 1;
    //         // }
    //         // this comment is correct, now optimize
    //     }
    // }
    let result = 0;
    sides.sort((a, b) => a[0] * a[1] - b[0] * b[1]);

    for (let i = 0; i < sides.length - 1; i++) {
        for (let j = i + 1; j < sides.length; j++) {
            if (sides[i][0] / sides[j][0] === sides[i][1] / sides[j][1]) {
                result += 1;
            }
        }
    }
    return result;
    
}
/*
4 8
15 30
25 50
*/

// console.log(nearlySimilarRectangles([[4, 8], [15, 30], [25, 50]]));

/*
4
2
5 10
10 10
3 6
9 9

output: 2
*/

// console.log(nearlySimilarRectangles([[5, 10], [10, 10], [3, 6], [9, 9]]));

/*
5
2
2 1
10 7
9 5
6 9
7 3
*/

// console.log(nearlySimilarRectangles([[2, 1], [10, 7], [9, 5], [6, 9], [7, 3]]));

