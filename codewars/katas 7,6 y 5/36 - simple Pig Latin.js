function pigItVersion1(str) {
    const arr = str.split(' ')
    arr.forEach((word, i, arr) => !/[.,!?]/g.test(word) ? arr.splice(i, 1, addLetterAndAy(word)) : null);
    return arr.join(' ')
}

function addLetterAndAy(word) {
    const arr = word.split('');
    const first = arr[0];
    arr.forEach((e, i, a) => i === 0 ? a.splice(0, 1) : null);
    return arr.join('') + first + 'ay';
};

function pigItVersion2(str) {
    return str.replace(/\w+/g, (w) => {
        return w.slice(1) + w[0] + 'ay';
    });
}