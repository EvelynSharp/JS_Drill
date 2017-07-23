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
