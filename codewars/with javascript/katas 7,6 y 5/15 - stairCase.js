function stairCase(n) {
    let si = /2e2/;
    let sioiii = 'Saludos seres inferiores';

    console.log(si.exec(sioiii));
}

// console.log(stairCase(3))

// stairCase(4);
let firstString = "Ricky is first and can be found.";
let firstRegex = /i/;

let notFirst = "You can't find Ricky now.";

// console.log(firstRegex.test(firstString))
// console.log(firstRegex.test(notFirst))

let userCheck = /^[A-Za-z]+[^%1][\d]*$/; // Cambia ^[A-Za-z]+[\d]*$

let repeatNum = "42 42 42";
let reRegex = /^(\d+)? \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);

let result2 = repeatNum.match(reRegex);

console.log(result);
console.log(result2);