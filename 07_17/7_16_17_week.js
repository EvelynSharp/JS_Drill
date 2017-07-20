//7.16.17
// Some numbers have funny properties. For example:
//
// 89 --> 8¹ + 9² = 89 * 1
//
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
//
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n. In other words:
//
// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If it is the case we will return k, if not return -1.


function digPow(n, p){
  let nArr = String(n).split('');
  let sum = nArr.reduce( (total, num, index) => {
    return total += Math.pow( Number(num), (p+index) )
  }, 0)
  return sum%n === 0 ? sum/n : -1;
}


//7.17.17 6ku & 7ku

function findEvenIndex(arr)
{
  let result = -1;
  for (let i = 0; i < arr.length; i++ ) {
    let leftArrValue = arr.slice(0, i).reduce( (total, num) => { return total += num }, 0);
    let rightArrValue = arr.slice(i+1).reduce( (total, num) => { return total += num }, 0);
    if ( leftArrValue === rightArrValue ) { result = i }
  }
  return result;
}

//1.18.17 6ku
// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digital_root(n) {
  if( n >= 10) {
    let numArr = String( n ).split('')
    let sum = numArr.reduce( (t, num) => { return t += Number(num) }, 0)
    return digital_root(sum)
  } else {
    return n;
  }
}


// This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:

// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let strArr = s.toLowerCase().split('').map( (l, i) => {
    let str = '';
    for ( let n = 1; n <= i+1; n++ ) {
      str = str + ( n === 1 ? l.toUpperCase() : l )
    }
    return str;
  })
  return strArr.join('-');


//7.19.17
//Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

function isAlt(word) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let wordArr = word.split('');
  for ( let i = 0; i< wordArr.length; i++) {
    if( i > 0 ) {
      if( vowels.includes( wordArr[i] ) === vowels.includes( wordArr[i-1] ) ) { return false }
    }
  }
  return true;
}

//7.20.17
// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
//
// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

function iqTest(numbers){
  let numArr = numbers.split(' ').map( n => {return Number(n)} );
  let result;
  for ( let i = 1; i <numArr.length-1; i++) {
    if (numArr[i]%2 !== numArr[i+1]%2 && numArr[i]%2 !== numArr[i-1]%2) {
      return i+1
    }
  }
  if (numArr[0]%2 !== numArr[1]%2 && numArr[0]%2 !== numArr[3]%2) {
    return 1
  } else {
    return numArr.length;
  }
}
