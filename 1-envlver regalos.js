const gifts = ['cat', 'game', 'socks'];
const wrapped = wrapping(gifts);

function wrapping(gifts) {
    //nota: debe de aumentar el numero de asteristcos
    return [gifts.map(a => {
        let aste = '';
        for(let i of a){
            aste += '*'
        }
        let left = aste + '**\n*';
        let right = '*\n**' + aste;
        return a = left + a + right;
    })];
}

console.log(wrapped);