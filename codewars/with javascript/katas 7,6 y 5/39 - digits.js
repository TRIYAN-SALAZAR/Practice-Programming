/*

The code consists of four unique digits (from 0 to 9).
Tests will call your solution; you should answer with an array of four digits.
Your input is number of matches (the same digit in the same place) with your previous answer. For the first call input value is -1 (i.e. each new test starts with input -1)
You have to find the code in 16 calls or less. You are the best. Do it.

For example
The code is [1, 2, 3, 4]
1st call return [1, 3, 4, 5] will give 1 match in next input
2nd call return [1, 2, 3, 0] will give 3 matches in next input
3rd call return [1, 2, 3, 4] will not give 4 matches in next input, because you're the champion!

*/

function game(matches) {
    if (matches === -1) {
        // In the first call, provide a random initial guess
        return [0, 1, 2, 3];
    }

    // Otherwise, generate the next guess based on the previous matches
    const previousGuess = [0, 1, 2, 3]; // replace with your initial guess
    const nextGuess = updateCode(previousGuess, matches);

    console.log('band:');
    return nextGuess;
}

function updateCode(code, matches) {
    // Update the code based on the previous matches
    for (let i = 0; i < code.length; i++) {
        if (matches >= i) {
            code[i]++;
            matches--;
        }
    }

    return code;
}

function getNextGuess(previousGuess, matches) {
    // Generate the next guess based on the previous matches
    const nextGuess = updateCode(previousGuess, matches);
    return nextGuess;
}

game(-1);