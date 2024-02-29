let countBits = function(n) {
  
    if(n !== 0){
      let bits = n.toString(2);
      let counter = bits.match(/[1]/g);
      return counter.length;
    }else{
      return 0;
    }
  };

console.log(countBits(5))