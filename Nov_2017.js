//11.6.17
function firstNonRepeatingLetter(s) {
  let result = '';
  s.split('').map( l => {
    if( s.toLowerCase().split('').filter( x => x === l.toLowerCase() ).length === 1 && result === '' ) {
      result = l
    }
  })
  return result;
}

//11.7.17
function anagrams(word, words) {
  let result = [];
  const wArr = word.split('');
  const dirLength = Object.keys(makedir(word)).length;
  words.map( w => {
    const wDir = makedir(w);
    let ifMatch = true;
    for ( let props in wDir) {
      if(wDir[props] !== wArr.filter( l => l === props ).length ) ifMatch = false;
    }
    if (ifMatch && Object.keys(wDir).length === dirLength ) result.push(w)
  })
  return result;
}

function makedir(str) {
  let dir = {};
  str.split('').map( l => {
    if (!dir[l]) {
      dir[l] = 1;
    } else {
      dir[l] += 1
    }
  })
  return dir;
}
//should use sort , join, for exact match of strings

//11.8.19
function takeWhile (arr, pred) {
  let result = [];
  for ( let i = 0; i < arr.length; i++) {
    if(pred(arr[i])) {
      result.push(arr[i])
    } else {
      break
    }
  }
  return result
}

//11.9.19
function sum(x) {
  const nil = a => a == undefined;
  return nil(x) ? 0 : n => nil(n) ? x : sum(n + x);
}

function sum2(a = 0) {
    function f (b = 0) {
        return (a += b, arguments.length ? f : a);
    }

    return arguments.length ? f : a;
}

let total = 0;

function sum2(num) {
  if (num || num === 0) {
    total += num
    return (arg) => sum(arg)
  } else {
    const result = total;
    total = 0;
    return result;
  }

}

//11.10.19

function humanReadable(seconds) {
  const time = [];
  const remain = seconds%3600
  const convert = num => String(num).length === 1 ? '0'+ num : String(num);
  time.push( convert(Math.floor(seconds/3600) ));
  time.push( convert(Math.floor(remain/60) ));
  time.push( convert(remain%60))
  return time.join(':')

}

function findOdd(A) {
  return [...new Set(A)].find( n => A.filter( num => num === n ).length%2 !== 0)
}

//11.11.19
function isIsogram(str){
  const str1 = [...new Set(str.toLowerCase().split('').sort())].join('')
  return str.toLowerCase().split('').sort().join('') === str1 ? true : false
}

//11.12.19
function compose(f,g) {
  return function(...a) {
    return f( g(...a) )
  }
}

//11.13.17

function count (string) {
  const unique = [ ...new Set( string.split('') ) ]
  let r = {}
  unique.map( l => r[l] = 0 )
  string.split('').map( l =>  r[l]++ )
  return r
}

//11.14.17

function kira(a, b, c) {
 const remainder = a.reduce((m,n,i) => {
    return n%b[i] > m ? n%b[i] : m
  }, 0)
 return remainder%2 === 0 ? c.toLowerCase() : c.toUpperCase()

}

//11.15.17
function capitalize(s,arr){
  const sArr = s.split('');
  arr.map( n => {
    if(sArr[n]) {
      sArr[n] = sArr[n].toUpperCase()
    }
  })
  return sArr.join('');
};

//11.16.17

function timeConvert(num) {
  if (num<=0) return "00:00"
  let hour = Math.floor(num/60)
  hour = hour < 10 ? "0"+hour : "" + hour
  let min = num%60
  min = min < 10 ? "0"+min : "" + min
  return `${hour}:${min}`


}

//11.17
function findShort(s){
 return s.split(' ').reduce( (l, w) => {
    if(w.length > l)
      return l
    return w.length
  }, 100)
}
