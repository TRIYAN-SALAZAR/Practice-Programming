function rgbVersionOne(r, g, b) {
    const VALUES = [];

    VALUES.push(r);
    VALUES.push(g);
    VALUES.push(b);

    for (let i = 0; i < 3; i++) {
        if (VALUES[i] < 0) VALUES.splice(i, 1, 0);
        if (VALUES[i] > 255) VALUES.splice(i, 1, 255);
    }

    for (let i = 0; i < 3; i++) {
        VALUES.splice(i, 1, VALUES[i].toString(16));
        VALUES[i] == 0 ? VALUES.splice(i, 1, '00') : null;
    }

    for (let i = 0; i < 3; i++) {
        if (VALUES[i].length === 1) {
            VALUES.splice(i, 1, '0' + VALUES[i]);
        }
    }

    return VALUES.join('').toUpperCase();
}

function rgb(r, g, b) {
    return hexConvert(r) + hexConvert(g) + hexConvert(b)
}

function hexConvert(value) {
    if (value <= 0) return '00';
    if (value >= 256) return 'FF';
    return ("0" + value.toString(16)).slice(-2).toUpperCase();
}