// 1.  Sum two numbers
//   - Given any two numbers write a function that will return the sum

const sumTwo = (num1, num2) => {
  return num1 + num2;
}
// console.log( sumTwo(1,2) )

// 2.  Sum an array
//   - Given any array write a function that will sum the array and return the sum

const sumArray = ( array ) => {
  return array.reduce( (total, num ) => {return total + num}, 0);
}
//console.log( sumArray( [1, 1, 2, 1, 0 ] ));

// 3.  Fahrenheit to Celsius
//   - Write a function that takes in a F temp, converts it to C and returns the value

const fToC = ( f ) => {
  return (f - 32)*5/9
}
//console.log(fToC( 360 )) ;

// 4.  Vowel Count
//   - Write a function that takes in a string and returns the number of vowels in the string

const vowelCount = ( string ) => {

}

// 5.  Dice
//   - Write a function that rolls 2-6 sided dice and returns the two values in an array

const rollDice = () => {
  let dice1 = Math.floor(Math.random()*6)+1;
  let dice2 = Math.floor(Math.random()*6)+1;
  return [ dice1, dice2 ];
}
// console.log( rollDice() )

// 6.  Average of an array
//   - Write a function that takes in any array and returns the Avg.

const arrayAve = ( array ) => {
  let total = array.reduce( (total, num) => { return total + num }, 0);
  return total/array.length;
}
//console.log(arrayAve( [2, 1, 3, 4, 2]))

// 7.  Fizzbuzz
//   - Write a function that loops over numbers from 1-100 with the following rules
//     -  If the number is divisible by 3 print "Fizz"
//     - If the number is divisible by 5 print "Buzz"
//     - If the number is divisible by both 3 & 5 print "FizzBuzz"
//     - Otherwise print the number
//     HINT:  console.log to print.  Use % (modulus to do remainder math)

const fizzBuzz = () => {
  for ( i = 1; i <= 100; i++) {
    if ( i % 15 === 0 ) {
      console.log("FizzBuzz");
    } else if ( i % 3 === 0 ) {
      console.log("Fizz");
    } else if ( i % 5 === 0 ) {
      console.log( "Buzz");
    } else (
      console.log(i)
    )
  }
}

//fizzBuzz()


// 8.  Factorial
//   - Write a function that takes in any number and returns the factorial value
//   For more info: https://en.wikipedia.org/wiki/Factorial (Links to an external site.)

const factorial = ( num ) => {
  let result = 1;
  for ( i = 1; i <= num; i++ ) {
    result *= i
  }
  return result;
}

//console.log( factorial(4) )

// 9.  Fibonacci
//   - Write a function that takes in an integer
//   - Find the # in the Fibonacci sequence that is in the index described by the integer
//    Example: fib(6) would return 8.
//    For more info on Fibonacci see https://en.wikipedia.org/wiki/Fibonacci_number (Links to an external site.) (Links to an external site.)

const fibonacci = ( num ) => {
  let preNum = 1;
  let curNum = 1;
  if ( num <= 0) {
    console.log( "number must be above zero");
  } else {
    for( i = 3; i <= num; i++) {
      let tempNum = preNum;
      preNum = curNum;
      curNum = tempNum + curNum;
    }
    return curNum;
  }
}

console.log(fibonacci(8) )
console.log(fibonacci(0) )

// Bonus: Roman Numeral Converter
//   - Write a function that takes a normal number and returns the roman numeral equivalent.  Some relevant info:
//
// The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice
// these letters have lots of straight lines and are hence easy to hack
// into stone tablets).
//
// ```
// 1 => I
// 10 => X
// 7 => VII
// ```
//
// There is no need to be able to convert numbers larger than about 3000.
// (The Romans themselves didn't tend to go any higher)
//
// Wikipedia says: Modern Roman numerals ... are written by expressing each
// digit separately starting with the left most digit and skipping any
// digit with a value of zero.
//
// To see this in practice, consider the example of 1990.
//
// In Roman numerals 1990 is MCMXC:
//
// 1000=M
// 900=CM
// 90=XC
//
// 2008 is written as MMVIII:
//
// 2000=MM
// 8=VIII
