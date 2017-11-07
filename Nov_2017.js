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
