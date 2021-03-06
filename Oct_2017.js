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

//10.23.17
function kebabize(str) {
  return str.replace(/[0-9]/g, '').split(/(?=[A-Z])/).map( s => s.toLowerCase() ).join('-')
}

//10.24.17
function reduceByRules(numbers, rules) {
  return numbers.reduce( (r, n, i) => i < numbers.length -1 ? rules[i%(rules.length)](r, numbers[i+1]) : r, numbers[0])
}

//10.25.17
function pizzaRewards(customers, minOrders, minPrice) {
let result = []
  for ( let props in customers) {
    if (customers[props].filter( n => n >= minPrice).length >= minOrders)
      result.push(props)
  }
  return result
}
//10.26.17
function isPalindrome(num){
  return (num>10 && num == num.toString().split("").reverse().join(""))? true : false;
}
function palindrome(num) {
  if(!Number.isInteger(num) || num<0) return 'Not valid';
  for(i=0; 1==1; i++){
    if(isPalindrome(num+i)) return num+i;
    if(isPalindrome(num-i)) return num-i;
  }
}

//10.27
function withdraw(n) {
  let result = [];
  if ( n%100 < 50 && (n%100)%20 !== 0 ) {
      result.push(Math.floor(n/100)-1)
  } else {
    result.push(Math.floor(n/100))
  }
  let remain = n-result[0]*100;
  if ( (remain%50)%20 !== 0 ) {
      result.push( Math.floor(remain/50)-1)
  } else {
    result.push( Math.floor(remain/50))
  }
  result.push( (remain-result[1]*50)/20 )
  return result
}

//10.28

let sc = (a) => {
  let r;
  a.map((s,i)=> s.includes("B") ? r=[i,s.indexOf("B")] : 1);
  return r;
}

//10.29

function zeros (n) {
 const count5 = count(n, 5);
 const count2 = count(n, 2);
 return Math.min(count5, count2)
}

function count (num, countby) {
  let result = 0;
  for ( let i = countby; i <= num; i*=countby) {
    result += Math.floor(num/i)
  }
  return result;
}

//10.30
function solution(digits){
  const arr = digits.split('').map( n => Number(n) )
  const maxNum = Math.max(...arr)
  let r = [];
  arr.map((num, i) => {
    if( num === maxNum && i < arr.length-4 ) {
        r.push( Number( ''+num+arr[i+1]+arr[i+2]+arr[i+3]+arr[i+4]) )
    }
  })
  return Math.max(...r)
}

//10.31.17
function listSquared(m, n) {
  let result = [];
  for ( let i = m; i <= n; i++) {
    let divisors = [];
    for ( let x = 1; x <= i; x++) {
      if ( i%x === 0 ) divisors.push(x)
    }
    let sum = divisors.reduce( (t,num) => t += Math.pow(num,2), 0)
    if ( Math.pow( sum, 1/2)%1 === 0 ) result.push( [i, sum] )
  }
  return result
}

//11.1.17
var moveZeros = function (arr) {
  return [ ...arr.filter( x => x !== 0 ), ...arr.filter( x => x === 0 ) ]
}

//11.2.17
function cakes(recipe, available) {
  let result = [];
  for ( let props in recipe) {
    if (!available[props]) {
      result.push(0)
      break
     }
    result.push( Math.floor(available[props]/recipe[props]) )
  }

  return Math.min(...result);
}

//11.3.17
var isPP = function(n){
  let power = [];
  for ( let i = 2; i <= n/2 ; i++) {
    const root = Math.round(Math.pow(n,1/i));
    if (Math.pow(root, i) === n) {
      power.push([root,i])
      break
    }
  }
  return power.length > 0 ? power[0] : null; // fix me
}

//11.4.17

function countArara(n) {
    let resultArr = [];
    for ( let i = 1; i <= Math.floor(n/2); i++) {
      resultArr.push('adak')
    }
    if ( n%2 !== 0)
      resultArr.push('anane')
    return resultArr.join(' ')
}
