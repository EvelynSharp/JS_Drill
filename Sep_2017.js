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

//9.8.17
// zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
// The function value is one new array.

const zipWith = (fn,a0,a1) => a0.map( (n, i) =>  n !== undefined && a1[i] !== undefined ? fn(n, a1[i]) : '')
.filter( n => n !== '' )

//learn function Array.from
function zipWith2(fn,a0,a1) {
  return Array.from({length: Math.min(a0.length, a1.length)}, (_, i) => fn(a0[i], a1[i]));
}

//9.9.17
// Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function. The solution should implement the most optimal algorithm possible.
const solution = (...args) => args
  .map( a => args.filter( x => x === a ).length)
  .filter( a => a > 1).length > 0

//use set when comparing arrays
function solution2(){return new Set(arguments).size!=arguments.length;}

//9.10.17

function getMiddle(s) {
  return s.length%2 === 0? s[s.length/2 - 1] + s[s.length/2]  : s[ (s.length - 1 )/2 ]
}


//9.11.17
function shortenNumber(suffixes, base) {
  return (arg) => {
    const num = Number(arg)
    let result = '';
    if ( !num ) {return ''+arg}
    [...suffixes].reverse().map( (u, i) => {
      const r = Math.floor( num/Math.pow(base, suffixes.length-i-1) );
      if( r > 0 && result === '' ) {result = r + u}
    })
    return result;
  }
}

//9.12.17

function createPhoneNumber(numbers){
  return  `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`
}

//9.13.17
//sum of pairs
var sum_pairs=function(ints, s){
  var seen = {}
  for (var i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true
  }
}

var sum_pairs1=function(ints, s){
    let pairs = [], indexes = [], unique = [ ...new Set(ints)];
    unique.map( (n,i) => {
      const n2 = s-n;
       if( unique.indexOf(n2) !== -1 && i <= unique.indexOf(n2) )  {
        if( n === n2 ) {
          if ( ints.filter( x => x === n ).length > 1 ) {
            const arr = [...ints]
            arr.splice(ints.indexOf(n), 1)
            pairs.push( [n, n2] )
            indexes.push( [ints.indexOf(n), arr.indexOf(n2) + 1] )
          }
        } else {
          pairs.push( [n, n2] )
          indexes.push( [ints.indexOf(n), ints.indexOf(n2)] )
        }
      }
    })
    let reIndex = 0;
    if ( pairs.length > 1) {
      indexes.map( ( p, i ) => {
        if ( p[1] < indexes[reIndex][1] ) reIndex = i
      })
    }
    return pairs[reIndex]
}

//9.14.17
//Title Case
function titleCase(title, minorWords) {
  const minor = minorWords? minorWords.toLowerCase().split(' ').map( w => w.toLowerCase() ) : [];
  return title.toLowerCase().split(' ').map( (w, i) => {
    if ( i !== 0 && minor.includes(w))
      return w
    return w.charAt(0).toUpperCase() + w.substr(1)
  }).join(' ');

}

//9.15.17
function groupCheck(s){
  let arr = s.split('')
  const match = { '{': '}', '(': ')', '[': ']' }
  let r = true;
  if(arr.length%2 !== 0) return false
  for ( let i = 0; i < arr.length - 1;) {
    if( match[arr[i]] === arr[i+1]) {
      arr.splice(i,2)
      i -= 1
    } else {
      if( ['{', '(', '['].includes(arr[i+1]) ) {
        i++
      } else {
        r = false;
        break
      }
    }
  }
  return r
}


//9.16.17
/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/

function triangleType(a, b, c){
  const arr = [a, b, c].sort( (x,y) => x-y )
  const num = Math.pow(arr[0],2) + Math.pow(arr[1],2), num3 = Math.pow(arr[2],2)
  if ( arr[0] + arr[1] <= arr[2]) {return 0}
  if(num===num3) return 2
  if(num > num3) return 1
  if(num < num3) return 3

}

//9.17.17
function descendingOrder(n){
  return Number((''+n).split('').sort( (a,b) => b-a).join(''))
}

//9.18.17

function isPrime(num) {
  let r = true;
  for( let i = 2; i <num; i++ ) {
    if( num%i === 0) { r = false}
  }
  return num < 2 ? false : r;
}

//9.19.17
function solution(str){
  return String(str).split('').reduce( (r, l, i) => {
    if(i%2===0) {
      if(i === str.length-1) {
        r.push(l + '_')
      } else {
        r.push( l + str[i+1])
      }
    }
    return r
  }, [] )
}

//9.20.19

function spinWords(str){
  const arr = str.split(' ')
  return arr.map( s =>  s.length >= 5 ? s.split('').reverse().join('')  : s ).join(' ')
}
