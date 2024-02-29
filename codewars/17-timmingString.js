//create function timming string and return the result
function trim(str, size) {
    if(size <= 3 && str.length > size){
        return str.slice(0, size) + "...";
    }
}
const a = trim("Cre", 2);
console.log(a);
// console.log(trim("He", 1));
// console.log(trim("Code Wars is pretty rad", 50));

