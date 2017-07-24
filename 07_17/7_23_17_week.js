//7.23.17
// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

function deleteNth(arr,x){
  let r = [];
  for ( let i = 0; i < arr.length; i++ ) {
    if ( r.filter( n => n === arr[i] ).length < x) {
      r.push( arr[i])
    }
  }
  return r;
}

function deleteNth2(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}

//7.24.17
// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
  let arr = word.toLowerCase().split('')
  let newArr = arr.map( l => {
    if ( arr.filter( n => n === l ).length > 1)
      return ')'
    return '('
  })
  return newArr.join('')
}


function 2(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
