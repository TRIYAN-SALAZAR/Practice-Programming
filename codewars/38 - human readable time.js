function humanReadable(seconds) {
    let HOURS = 0;
    let MINUTES = 0;
    let SECONDS = 0;

    let count = 0;
    do {
        count++;
        SECONDS++;

        if (SECONDS === 60) {
            MINUTES++;
            SECONDS = 0;
        }

        if (MINUTES === 60) {
            HOURS++;
            MINUTES = 0;
        }
    } while (count < seconds)

    const H = HOURS < 10 ? `0${HOURS}` : HOURS;
    const M = MINUTES < 10 ? `0${MINUTES}` : MINUTES;
    const S = SECONDS < 10 ? `0${SECONDS}` : SECONDS;
    
    return `${H}:${M}:${S}`
}

console.log('  result:', humanReadable(59));
console.log('expected: 00:00:59');