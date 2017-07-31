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
