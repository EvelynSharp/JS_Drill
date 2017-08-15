//8.6.17
// A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.
//
// For example, take 153 (3 digits):
//
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153


function narcissistic( value ) {
  let numArr = String(value).split('').map( n => Number(n) );
  let sum = numArr.reduce( (t, n) => {
    return t += Math.pow( n, numArr.length)
  }, 0)
  return sum === value;
}

//8.7.17
// which takes in numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

function tripledouble(num1, num2) {
  let arr1 = (''+num1).split('');
  let arr2 = (''+num2).split('');
  let tripleNum = [], doubleNum = [];
  let ifSame = false;
  for ( let i = 0; i < arr1.length - 2; i++ ) {
    if( arr1[i] === arr1[i+1] && arr1[i+2] === arr1[i+1] ) {
      if( !tripleNum.includes(arr1[i]) ) {
        tripleNum.push(arr1[i])
      }
    }
  }
  for ( let i = 0; i < arr2.length - 1; i++ ) {
    if( arr2[i] === arr2[i+1] ) {
      if( !doubleNum.includes(arr2[i]) ) {
        doubleNum.push(arr2[i])
      }
    }
  }
  for ( let i = 0; i < tripleNum.length ; i++ ) {
    if( doubleNum.includes(tripleNum[i]) ) {
      ifSame = true;
    }
  }
  return ifSame? 1 : 0;
}


function tripledouble1(num1, num2) {
  for (let i = 0; i < 10; i++) {
    if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
      return 1;
    }
  }
  return 0;
}

function tripledouble2(num1, num2) {
  let nums = [...Array(10).keys()];

  return +nums.some(num =>
    num1.toString().includes(num.toString().repeat(3)) &&
    num2.toString().includes(num.toString().repeat(2))
  );
}

function tripledouble3(num1, num2) {
  var indexOf = String.prototype.indexOf
  for (var i = 0; i < 10; i++) {
    if (indexOf.call(num1, "" + i + i + i) >= 0 && indexOf.call(num2, "" + i + i) >= 0) {
      return 1
    }
  }

  return 0
}


//8.8.17
// In this kata you have to write a method that folds a given array of integers by the middle x-times.

function foldArray(array, runs){
  let result = [...array];
  for ( let i = 1; i <= runs; i++ ) {
    if ( result.length !== 1 ) {
      let remainNum = result.length%2 === 0 ? result.length/2 : (result.length+1)/2
      for ( let n = 0; n < Math.floor(result.length/2); n++) {
        result[n] += result[result.length-1-n]
      }
      result = result.slice(0, remainNum)
      }
    }
  return result;
}

function foldArray1(a, n) {
  const r = [], c = a.slice();
  while (c.length) r.push(c.pop() + (c.shift() || 0));
  return n - 1 ? foldArray(r, n - 1) : r;
}


//8.9.17
// In this Kata, you will implement The Luhn Algorithm, which is used to help validate credit card numbers.
//
// Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.
function validate(n){
  let arr = (''+n).split('').map( n => Number(n) );
  for ( let i = arr.length-2; i >=0; i -= 2) {arr[i] *= 2;}
  let sum = arr.map( n => {
    if ( n > 9 )
      return ('' + n).split('').reduce( (t, x) => t += Number(x), 0)
    return n
  }).reduce( (t, n) => t += n, 0)
  return sum%10 === 0? true : false
}

//8.10.17
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
//
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :]


function countSmileys(arr) {
  return arr.reduce( (c, s) => {
    let sArr = s.split('');
    let nose = sArr.length === 3 ? ['-', '~'].includes(sArr[1]) : true;
    if ( nose && [':', ';'].includes(sArr[0]) && [')', 'D'].includes(sArr[sArr.length-1]) && sArr.length <=3) {
      c++
    }
    return c;
  }, 0)
}
const countSmileys1 = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);


//8.11.17
//
// Longest Palindrome
//
// Find the length of the longest substring in the given string s that is the same in reverse.
//
// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
//
// If the length of the input string is 0, return value must be 0.


longestPalindrome=function(s){
  var strArr = s.split('');
  var len = strArr.length;
  var count;
  if(s.length === 0) {return 0}
  for ( var i = len; i >=1 && !count; i--) {
    for ( var index = 0; index <= len - i; index++) {
      var sub = strArr.slice(index, i+index);
      if ( checkReverse(sub) ) {
         count = sub.length;
         break
      }
    }
  }
  return count;
}

function checkReverse(arr) {
  if ( arr.join('') === arr.slice().reverse().join('') )
    return true
  return false
}


//8.12.17
// Define a function isPrime that takes one integer argument and returns true or false depending on if the integer is a prime.
//
// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {
  let r = true;
  for( let i = 2; i <num; i++ ) {
    if( num%i === 0) { r = false}
  }
  return num < 2 ? false : r;
}

function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i == 0) return false;
  return num >= 2;
}


//8.13.17
// Your task is to create a compose function to carry out this task, which will be passed two functions or lambdas. Ruby functions will be passed, and should return, either a proc or a lambda. Remember that the resulting composed function may be passed multiple arguments!
function compose(f,g) {
  return function(...a) {
    return f( g(...a) )
  }
}

function compose(f, g) {
  return function() {
    return f(g.apply(this, arguments));
  };
}

//8.14.17
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
function expandedForm(num) {
 let arr = (''+num).split('');
  let r = [];
  for ( let i = 0; i < arr.length; i++ ) {
    if(arr[i] !== '0' ) {
      r.push( arr[i] + '0'.repeat(arr.length-1-i) )
    }
  }
  return r.join(' + ')
}
//use filter and map instead of for loop

const expandedForm2 = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");


//8.15.17
// CamelCase Method
String.prototype.camelCase=function(){
  let arr = this.split(' ').map( s => s.charAt(0).toUpperCase() + s.slice(1) )
  return arr.join('')
}
