//10.2.17

function count (string) {
  const unique = [ ...new Set( string.split('') ) ]
  let r = {}
  unique.map( l => r[l] = 0 )
  string.split('').map( l =>  r[l]++ )
  return r
}
//10.3.17
function sortTheInnerContent(words) {
  return words.split(' ').map( str => {
    const strArr = str.split('')
    if( str.length <= 1) return str
    let a = strArr.slice(1, strArr.length - 1).sort().reverse();
    a.push( strArr[strArr.length - 1])
    a.unshift( strArr[0] )
    return a.join('')
  }).join(' ')
}

//10.4.17
function autocomplete(input, dictionary){
  input = input.replace(/[^a-zA-Z ]/g, "")
  const result = dictionary.filter( str => str.slice(0, input.length).toLowerCase() === input )
  return result.length > 5 ? result.slice(0, 5) : result
}

//10.5.17
function decipherThis(str) {
  return str.split(' ').map( s => {
    if (s.length === 1) return s;
    const firstl = String.fromCharCode(parseInt(s))
    if (s.length === 2) return firstl;
    let word =  s.slice( (''+ parseInt(s)).length, s.length).split('')
    let temp = word[0];
    word[0] = word[ word.length - 1];
    word[word.length - 1] = temp;
    return firstl + word.join('')

  }).join(' ')
};

//10.6.17
function add(n){
  let fnc = (x) => {
    return add(x+n)
  }
  fnc.valueOf = () => n
  return fnc
}

//10.7.17
String.prototype.toJadenCase = function () {
 return this.split(' ').map( str => {
   return str.split('').map( (l,i) => {
      return i === 0 ? l.toUpperCase() : l.toLowerCase()
   }).join('')
 }).join(' ')

};

String.prototype.toJadenCase = function () {
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

//10.8.17
function squareDigits(num){
  return Number((''+num).split('').map( n => Math.pow(Number(n),2)).join(''))

}

//10.9.17
function deepCount(a){
  let r = count(a);
  if (a.length === 0) return 0;
  return r - 1;
}

function count(a) {
  let counter = 0;
  if( Array.isArray(a) ) {
    counter =  a.reduce( (acc, n) => {
      return acc + count(n)
    }, 1)
  } else {
    counter = 1;
  }
  return counter ;
}

//10.10.17
function sumConsecutives(s) {
  let result = [];
  s.map( (x, i) => {
    if( i === 0) {
      result.push(x);
    } else if ( x !== s[i-1] ) {
      result.push(x)
    } else if ( x === s[i-1]) {
      result[result.length - 1] += x
    }
  })
  return result
}
