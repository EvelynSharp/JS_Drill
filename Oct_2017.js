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

//10.11.17

function findRarestPepe(pepes) {
  let counter = {};
  let result = [];
  let minCount = 5;
  [ ...new Set(pepes) ].map( p => {counter[p] = pepes.filter( n => n===p).length})
  for ( let props in counter) {
    if( counter[props] < minCount) {
      if(result.length === 0 || counter[props] === counter[result[0]] ) {
        result.push(props)
      } else if ( counter[props] < counter[result[0]] ) {
        result = [];
        result.push(props)
      }
    }
  }
  if ( result.length === 0 ) return  'No rare pepes!';
  if ( result.length === 1 ) return  result[0];
  result.sort()
  return result
}

function findRarestPepe(a) {
  let o={};
  a.forEach(x=>o[x]?o[x]++:o[x]=1);
  let ma = Object.keys(o).reduce((m,x)=>Math.min(m,o[x]),999);
  if(ma>4) return 'No rare pepes!';
  let z = Object.keys(o).filter(x=>o[x]==ma).sort();
  return z.length==1?z[0]:z;
}

//10.12.17
function nextBigger(n){
  const arr = (''+n).split('').map( n => Number(n) )
  let result = -1;
  for ( let i = arr.length - 2; i >= 0; i--) {
    let remain = arr.slice(i, arr.length)
    let maxnum = Math.max(...remain)
    if(arr[i] < maxnum) {
      let bigger = remain.reduce( (b, n) => {
        return n-arr[i]>0 && n < b ? n:  b
      }, 10)
      remain.splice(remain.indexOf(bigger), 1)
      result = Number(arr.slice(0, i).join('') + bigger + [...remain].sort().join(''))
      break
    }
  }
  return result;
}

//10.13.17
function toCamelCase(str){
  const divider = str.split('').includes('_') ? '_' : '-'
  return str.split(divider)[0] + str.split(divider).slice(1).map( (s, i) => {
    return s.split('').map( (l,i) => {return i === 0? l.toUpperCase() : l}).join('')
  }).join('')
}


function service(serviceTypes, services) {
  serviceTypes.map( type => {
    type.services = services.filter( service => service.service_type_id === type.id )
    return type
  })
}


//10.14.17

function longest(s1, s2) {
  return [...new Set( [...s1.split(''), ...s2.split('') ])].sort().join('')
}

//10.15.17
function highAndLow(numbers){
  const num = numbers.split(' ').map( n => Number(n))
  return Math.max(...num) + ' ' + Math.min(...num)
}

//10.16.17
function narcissistic( value ) {
  let numArr = String(value).split('').map( n => Number(n) );
  let sum = numArr.reduce( (t, n) => {
    return t += Math.pow( n, numArr.length)
  }, 0)
  return sum === value;
}

//10.17.17
function whatIsJohnDoing(startDay, today){
  const status = [ 'Fishing', 'Airing net', 'Selling fish']
  const days = Math.round( (new Date(today)-new Date(startDay))/(1000*60*60*24) ) + 1
  const pos = days%16;
  if (  pos === 14 ) {
    return status[2]
  } else {
    return pos%5 > 3 || pos%5 === 0 || pos === 15 ? status[1] : status[0]
  }
}

//10.18.17
function getCount(str) {
  const vowel = ['a', 'e', 'i', 'o', 'u']
  return str.split('').reduce( (t,l) => {
    return vowel.includes(l) ? t+1 : t
  }, 0)
}

//10.19.17
decodeMorse = function(morseCode){
  return morseCode.split('   ').map( str => {
    return str.split(' ').map( l => MORSE_CODE[l]).join('')
  }).join(' ').replace(/^\s+|\s+$/g, "");
}

//10.20.17

function digPow(n, p){
  let nArr = String(n).split('');
  let sum = nArr.reduce( (total, num, index) => {
    return total += Math.pow( Number(num), (p+index) )
  }, 0)
  return sum%n === 0 ? sum/n : -1;
}


//10.21.17
function 2(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

//10.22.17

function GetSum( a,b ) {
  let sum = 0;
  for ( let i = Math.min(a, b); i <= Math.max(a, b); i++ ) {
    sum += i
  }
  return sum
}
