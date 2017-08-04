//7.31.17
// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.
//
// In effect: 89 = 8^1 + 9^2
//
// The next number in having this property is 135.
//
// See this property again: 135 = 1^1 + 3^2 + 5^3
//
// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

function sumDigPow(a, b) {
  let result = [];
  for ( let i = a; i <= b ; i++) {
    let numArr = String(i).split('').map( s => Number(s) );
    let sum = numArr.reduce( (t, n, index) => {
      return t += Math.pow(n, index+1)
    }, 0)
    if (sum === i) { result.push(i) }
  }
  return result;
}


// Your goal in this kata is to implement an difference function, which subtracts one list from another.
//
// It should remove all values from list a, which are present in list b.

function array_diff(a, b) {
  return a.filter( n => !b.includes(n) )
}


//8.1.17
// Create a function named divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
function divisors(integer) {
  let result = [];
  for ( let i = 2; i < integer; i++) {
    if (integer%i === 0) { result.push(i) }
  }
  return result.length === 0 ? integer+' is prime' : result;
};

//8.2.17
// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
//
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
function sortArray(array) {
  let oddArr = array.filter( n => n%2 !==0 ).sort( (a, b) => a-b);
  let counter = -1;
  return array.map( n => {
    if( n%2 !== 0) {
      counter++;
      return oddArr[counter];
    } else {
      return n;
    }
  })
}

//shorter for using shift() instead of counter
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}

//8.3.17
// Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.
//
// chained([a,b,c,d])(input)
// Should yield the same result as
//
// d(c(b(a(input))))



function chained(functions) {
  return function(input) {
    let result = input;
    for ( let i = 0; i < functions.length; i++) {
      result = functions[i](result);
    }
    return result;
  }
}

function chained(functions) {
  return function(input){
    return functions.reduce(function(input, fn){ return fn(input) }, input);
  }
}

// //8.4.17
// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).
//
// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.
//
// If
//
// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".


function revrot(str, sz) {
    if(str === '' || sz <= 0 || sz > str.length) {return ''}
    let arr = str.match(new RegExp('.{1,' + sz + '}', 'g'));
    if( arr[arr.length-1].length < sz) { arr.pop() }
    let rArr = arr.map( s => {
      let sArr = s.split('')
      if ( sArr.reduce( (t,n) => { return t += Number(n)}, 0)%2 === 0 ) {
        return sArr.reverse().join('');
      } else {
        let last = sArr.shift();
        sArr.push(last);
        return sArr.join('');
      }
    })
   return rArr.join('')
}


function revrot1(str, sz) {
  if (sz < 1 || sz > str.length)
    return '';

  let reverse = s => s.split('').reverse().join('');
  let rotate  = s => s.slice(1) + s.slice(0, 1);
  let sum_cubes = c => c.split('').reduce((a, b) => a + +b ** 3, 0);

  return str
    .match(new RegExp('.{' + sz + '}', 'g'))
    .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
    .join('');
}
