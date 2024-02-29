function rangeOfNumbers(startNum, endNum) {
    if(endNum < startNum) {
        return [];
    }else{
        return Array.from({length: endNum - startNum + 1}, (_, i) => i + startNum);
    }
};

console.log(rangeOfNumbers(3, 9))