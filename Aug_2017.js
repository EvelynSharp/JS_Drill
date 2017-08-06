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
