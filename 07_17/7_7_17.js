// function wordStep(str)
// that takes in a string and creates a step with that word.
//
// E.g
//
// wordStep('SNAKES SHOE EFFORT TRUMP POTATO') ===
//
// [['S','N','A','K','E','S',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
//  [' ',' ',' ',' ',' ','H',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
//  [' ',' ',' ',' ',' ','O',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
//  [' ',' ',' ',' ',' ','E','F','F','O','R','T',' ',' ',' ',' ',' '],
//  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','R',' ',' ',' ',' ',' '],
//  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','U',' ',' ',' ',' ',' '],
//  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','M',' ',' ',' ',' ',' '],
//  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','P','O','T','A','T','O']]


function wordStep(str) {
  let strArr = str.split(' ');
  let result = [];
  let evenWords = strArr.filter( (s, index) => index%2 === 0);
  let totalLength =  1 - evenWords.length + evenWords.reduce( (total, word) => {
    return total += word.length
  }, 0);
  for( let i = 0; i<strArr.length; i++) {
      let pvSpLength = 0;
      let pvWordNum = Math.floor( (i+1)/2);
      let wordArr = strArr[i].split('');
      for ( let i = 0; i < pvWordNum; i++ ) {
        pvSpLength += ( evenWords[i].length-1)
      }
    if (i%2 === 0) {
      let bhSpLength = 0;
      let newArr = [];
      for ( let i = 0; i < pvSpLength; i++) {
        newArr.push(' ');
      }
      newArr = newArr.concat(wordArr);
      bhSpLength = totalLength - newArr.length;
      for ( let i = 0; i < bhSpLength; i++) {
        newArr.push(' ');
      }
      result.push(newArr);
    } else {
      let counter;
      if ( evenWords.length > pvWordNum ) {
        counter = wordArr.length-1
      } else {
         counter = wordArr.length
      }
      for ( let i = 1; i < counter; i++) {
        let toAdd = [];
        for ( let i = 0; i < pvSpLength; i++) {
          toAdd.push(' ');
        }
        toAdd.push( wordArr[i] )
        let bhSpLength = totalLength - toAdd.length;
        for ( let i = 0; i < bhSpLength; i++) {
          toAdd.push(' ');
        }
        result.push(toAdd);
      }
    }
  }
   return result;

}
