function findOutlier(integers) {
    let countPar = 0;
    let countImpar = 0;
    let n = '';
    for(let i = 0; i < integers.length; i++) {
      if(integers[i] % 2 === 0) countPar++;
      if(integers[i] % 2 === 0) countImpar++;
      
      if(countPar >= 2) {
          n = 'par';
          break;
        }else if(countImpar >= 2){
          console.log('this')
        n = 'impar';
        break;
      }
    }
    
    return n === 'par' ? integers.find(e => e % 2 === 1  || e % 2 === -1) : integers.find(e => e % 2 === 0 || e % 2 === -0)
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([-6, -12, -2, -78, -23, -22]));
// console.log(findOutlier([0,0,3,0,0,2,4,18]));
// console.log(findOutlier([17560188,-138976390,54971174,127648894,-112388120,28161358,-179307352,29426006,84518298,-38037859,479094]))