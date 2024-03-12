const { gato } = require("./6.1-Genera Matriz");

/*
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.


*/


function isSolved(board) {
    let result;
    let count = 0;

    for (let i = 0; i < board.length; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            result = board[i][0]
            result === 0 ? result = undefined : null;
            break;
        }

        if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            result = board[0][i];
            result === 0 ? result = undefined : null;
            break;
        }

        if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            result = board[0][0];
            result === 0 ? result = undefined : null;
            break;
        } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            result = board[0][2];
            result === 0 ? result = undefined : null;
            break;
        }

    }

    if (result === undefined) {
        for (let i = 0; i < 3; i++) {
            !board[i].includes(0) ? count++ : null;
        }
        if (count === 3) result = 0;
    }

    return result !== undefined ? result : -1;
}

function multiple() {
    let ie = 0;
    do {
        console.log(isSolved(gato()));
        ie++;
    } while (ie < 30);

}

function miniTest() {
    console.log(isSolved([[1, 2, 1], [1, 1, 2], [2, 1, 2]]));
    console.log(isSolved([[2, 1, 2], [2, 1, 1], [1, 2, 1]]));
}

miniTest();
multiple();
