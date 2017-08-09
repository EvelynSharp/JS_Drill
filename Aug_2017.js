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
