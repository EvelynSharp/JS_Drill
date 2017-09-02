//9.1.17
//http://www.codewars.com/kata/is-my-friend-cheating/javascript
//with time limite

function removeNb (n) {
  let total = (n+1)*n/2
  let r = []
  let a, b;
  for ( a = 1; a <= n; a++ ) {
    b = (total - a)/(a+1)
    if ( Number.isInteger(b) && b <= n ) {
      r.push( [a, b] )
    }
  }
  return r;
}


//9.2.17
//Maximum subarray sum
var maxSequence = function(arr){
  if(arr.length < 1) { return 0 }
  let r = []
  for ( let i = 1; i <= arr.length; i++) {
    for ( let x = 0; x <= arr.length-i; x++ ) {
      r.push(arr.slice(x,x+i).reduce( (t,n) => t += n, 0) )     
    }
  }
  return Math.max(...r) >= 0 ? Math.max(...r) : 0
}

var maxSequence2 = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}
