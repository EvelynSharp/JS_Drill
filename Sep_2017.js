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

//9.3.17
//longer code due to performance req
// Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
function scramble(str1, str2) {
  let obj1 = {}, obj2 = {};
  let arr1 = [ ...new Set(str1.split('')) ].map( l => {
    re = new RegExp(l,'gi');
    obj1[l] = str1.match(re) ? str1.match(re).length : 0
  })
  let arr2 = [ ...new Set(str2.split('')) ]
  arr2.map( l => {
    re = new RegExp(l,'gi');
    obj2[l] = str2.match(re) ? str2.match(re).length : 0
  })
  return arr2.every( l => {
    return obj1[l] >= obj2[l]
  })
}

//9.4.17
//You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.



function longestConsec(strarr, k) {
   let max = 0;
   if(strarr.length < k) { return ""}
   return strarr.reduce( (r, v, i) => {
     let str = '';
     for ( let n = 0; n < k; n++) {
       str += strarr[i+n]? strarr[i+n] : ''
     }
     if (str.length > max) {
       max = str.length;
       r = str;
     }
     return r;
   }, '')



//9.5.17
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
var uniqueInOrder=function(iterable){
  let arr = Array.isArray(iterable) ? iterable : iterable.split('')
  return arr.filter( (l,i) =>  i === 0 || l !== arr[i-1] )
}

//9.6.17

function narcissistic( value ) {
  let numArr = String(value).split('').map( n => Number(n) );
  let sum = numArr.reduce( (t, n) => {
    return t += Math.pow( n, numArr.length)
  }, 0)
  return sum === value;
}

//9.7.17
// The purpose of this kata is to write a higher-order function which is capable of creating a function that iterates on a specified function a given number of times. This new functions takes in an argument as a seed to start the computation from.
var createIterator = (func, n) => (arg) => {
    for ( let i = 1; i <= n; i++) { arg = func(arg) };
    return arg;
  }
