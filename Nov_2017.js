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
