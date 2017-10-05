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
