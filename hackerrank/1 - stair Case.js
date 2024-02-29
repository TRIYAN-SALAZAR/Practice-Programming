function staircase(n) {
    let stairs = '';
    let stair = '#';
    let space = ' '.repeat(n);
    
    for (let i = 0; i < n; i++) {
        stairs += space + stair;
        stairs += '\n';
        stair += '#';
        space = ' '.repeat(n - i - 1);
    }

    return stairs
}