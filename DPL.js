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
  let vowelArr = [ 'a', 'e', 'i', 'o', 'u' ];
  // let counter = 0;
  return string.toLowerCase().split("").reduce( (acc,letter) => vowelArr.includes(letter) ? ++acc : acc, 0);

  //
  // let stringArr = string.toLowerCase().split("");
  // for ( i = 0; i < stringArr.length; i++ ) {
  //   if( vowelArr.includes(stringArr[i])) {
  //     counter++
  //   }
  // }
  // return counter;
}

// console.log( vowelCount('nosebeareeiou'))


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

// console.log(fibonacci(8) )
// console.log(fibonacci(0) )

// Bonus: Roman Numeral Converter
//   - Write a function that takes a normal number and returns the roman numeral equivalent.  Some relevant info:
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


const getRoman = ( num, unit, upSemi, upUnit ) => {
  let result = "";
  if( num === 4 ) {
    result = unit + upSemi;
  } else if ( num === 5 ) {
    result = upSemi;
  } else if (num === 9) {
    result = unit + upUnit;
  } else if ( num <= 3 ) {
    for ( i = 1; i <= num; i++ ) {
      result = result + unit;
    }
  } else {
    result= upSemi;
    for ( i = 6; i <= num; i++ ) {
      result = result + unit;
    }
  }
  return result;
}

const romanNum = (num) => {
  let numArr = (""+num).split("").map( n => {return parseInt(n)});
  let digits = numArr.length;
  let counter=0;
  let num1 = num2 = num3 = num4 = "";
  let finalNum;
  if (digits === 4) {
    for ( i = 1; i <= numArr[counter]; i++ ) {
      num1 = num1 + 'M';
    }
    counter++;
  }

  if ( digits >= 3 ) {
    let num = numArr[counter];
    num2 = getRoman( num, 'C', 'D', 'M');
    counter++;
  }

  if ( digits >= 2 ) {
    let num = numArr[counter];
    num3 = getRoman( num, 'X', 'L', 'C');
    counter++;
  }

  if ( digits >= 1 ) {
    let num = numArr[counter];
    num4 = getRoman( num, 'I', 'V', 'X');
    counter++;
  }

  finalNum = num1+num2+num3+num4;
  return finalNum;
}

//console.log( romanNum(905))

// unit letter for each step up: I, X, C, M
// semi-unit letter for every 5 units each step up: V, L, D,
// if 4th unit, present as semi-unit - unit
//if 9th unit, present as the next step up unit - cur-step unit
//check from left to right, one by one, and skp zeros
