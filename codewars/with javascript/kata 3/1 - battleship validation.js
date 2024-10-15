function validateBattlefield(field) {
  var count = [0,0,0,0], coord = [[],[],[],[]], hash = {}, i;

  var transposedField = Object.keys(field[0]).map(function(c) {
    return field.map(function(r) {return r[c];});
  }); // transposes field matrix for easy column traversal

  for (i = 0; i < 10; i++) {
    identifyRow(field[i].join(''), false, coord, i);
    identifyRow(transposedField[i].join(''), true, coord, i);
  } // find positions of ships and save them into coords.

  for(i = 0; i < coord[3].length; i++) {
    hash[coord[3][i]] = i;
  } // create hash for searching arrays of coordinates inside coord.

  coord[3] = coord[3].filter(function(item,index,count){
    return item[2] && hash.hasOwnProperty([item[0], item[1], false]);
  }); //filter out non-single cells. only single cell items will have the same coord with different direction.
  count = coord.map(function(item) {return item.length;}); // count the ships

  return function(a,b){return !(a < b || b < a);}(count, [1,2,3,4]) && // check ship count
    !coord.some(function(item, i) { // check diagonal edges of ships for contact
      return item.some(function(item, k) {
        var target1 = item[2] ? field[item[0] - 1] : transposedField[item[1] - 1];
        var target2 = item[2] ? field[item[0] + 1] : transposedField[item[1] + 1];
        var offset = item[2] ? item[1] - 1 : item[0] - 1; // x of y coordinate according to ship position
        return ((target1 && target1[offset]) || (target2 && target2[offset]) || //check leading edge
                (target1 && target1[offset + 5 - i]) || (target2 && target2[offset + 5 - i])); //check trailing edge
      });
  });
}

function identifyRow(rowstr, isHorizontal, coord, index) {
  var length, position, re = /1+/g, matches = [];
  while ((matches = re.exec(rowstr)) !== null) { // run greedy regular expression search until no ship is found in row
    length = matches[0].length; // length of the ship
    if (length > 4) return;
    position = matches.index; // position of the ship
    coord[4-length].push(isHorizontal ? [position, index, false] : [index, position, true]); //save position and direction
  }
}
