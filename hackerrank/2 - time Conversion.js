'use strict';

function timeConversion(s) {
    const HOURS = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '12'];
    const regEx = /PM|AM/;

    return regEx.exec(s)[0] === 'AM' 
        ? s.replace(regEx, '').split(':').map((h, i) => i === 0 && h === '12' ? '00' : h).join(':')
        : s.replace(regEx, '').split(':').map((h, i) => i === 0 ? HOURS[parseInt(h - 1)] : h).join(':');
}

console.log(timeConversion('07:05:45PM'))
console.log(timeConversion('03:05:45PM'))
console.log(timeConversion('12:40:22AM'))
console.log(timeConversion('12:45:54PM'))