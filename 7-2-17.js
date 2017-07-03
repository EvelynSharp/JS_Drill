// In the field, two beggars A and B found some gold at the same time. They all wanted the gold, and they decided to use simple rules to distribute gold:
//
// They divided gold into n piles and be in line.
// The amount of each pile and the order of piles all are randomly.
//
// They took turns to take away a pile of gold from the
// far left or the far right.
//
// They always choose the bigger pile. That is to say,
// if the left is 1, the right is 2, then choose to take 2.
//
// If the both sides are equal, take the left pile.
// Given an integer array golds, and assume that A always takes first. Please calculate the final amount of gold obtained by A and B. returns a two-element array [amount of A, amount of B].


function distributionOf(golds){
  let resultA = 0, resultB = 0;
  let goldNew = [...golds];
  for ( let i = 0; i < golds.length; i ++) {
    let newAmt = 0;
    if ( goldNew[0] >= goldNew[goldNew.length-1] ) {
      newAmt = goldNew[0]
      goldNew.shift();
    } else {
      newAmt = goldNew[goldNew.length-1]
      goldNew.pop();
    }
    if ( i%2 === 0 ) {
      resultA += newAmt
    } else {
      resultB += newAmt
    }
  }
  return [resultA, resultB]

}


// The Arara are an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:
//
// 1 = anane
// 2 = adak
// 3 = adak anane
// 4 = adak adak
// 5 = adak adak anane
// 6 = adak adak adak
// 7 = adak adak adak anane
// 8 = adak adak adak adak
//
// Take a given number and return the Arara's equivalent.

function countArara(n) {
    let resultArr = [];
    for ( let i = 1; i <= Math.floor(n/2); i++) {
      resultArr.push('adak')
    }
    if ( n%2 !== 0)
      resultArr.push('anane')
    return resultArr.join(' ')
}

function countArara(n) {
  switch (n) {
    case 0:  return '';
    case 1:  return 'anane';
    case 2:  return 'adak';
    default: return 'adak ' + countArara(n-2);
  }
}
