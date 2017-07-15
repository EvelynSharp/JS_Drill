// Create an algorithm to count the number of zeros that appear between 1 and N.
//
// Examples:
//
// There are 2 zeros from 1 to 20: 10, 20
//
// There are 11 zeros from 1 to 100: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
//
function countZeros(n) {
  let count = 0;
  for( let i = 1; i <= n; i++) {
    let c = i.toString().split('').reduce( (counter, str) => {
      if (str === '0') {
        counter++;
      }
      return counter
    }, 0);
    count += c;
  }
  return count;
}


// Your friend Rick is trying to send you a message, but he is concerned that it would get intercepted by his partner. He came up with a solution:
//
// 1) Add digits in random places within the message.
//
// 2) Split the resulting message in two. He wrote down every second character on one page, and the remaining ones on another. He then dispatched the two messages separately.
//
// Write a function interweave(s1, s2) that reverses this operation to decode his message!
//
// Example 1: interweave("hlo", "el") -> "hello" Example 2: interweave("h3lo", "el4") -> "hello"
//
// Rick's a bit peculiar about his formats. He would feel ashamed if he found out his message led to extra white spaces hanging around the edges of his message...



function interweave(s1, s2) {
  let comArr=[];
  let result;
  let s1Arr = s1.split(''), s2Arr = s2.split('');
  for ( let i = 0; i < (s1.length + s2.length); i++) {
    if ( i%2 === 0) {
      comArr.push( s1[i/2] )
    } else {
      comArr.push( s2[ (i-1)/2 ] );
    }
  }
  result = comArr.filter( l => { return isNaN(parseInt(l)) }).join('') ;
  return result;
}
