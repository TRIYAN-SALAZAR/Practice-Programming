function truncateString(str, num) {
    console.log(str.length)
    return str.length > num ? str.split('').splice(0, num).join('') + '...' : str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));