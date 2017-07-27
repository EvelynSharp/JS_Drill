//7.23.17
// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

function deleteNth(arr,x){
  let r = [];
  for ( let i = 0; i < arr.length; i++ ) {
    if ( r.filter( n => n === arr[i] ).length < x) {
      r.push( arr[i])
    }
  }
  return r;
}

function deleteNth2(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}

//7.24.17
// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
  let arr = word.toLowerCase().split('')
  let newArr = arr.map( l => {
    if ( arr.filter( n => n === l ).length > 1)
      return ')'
    return '('
  })
  return newArr.join('')
}


function 2(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}


// //7.25.17
// The function has two input variables:
//
// customers: an array (list in python) of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// The function should return an integer, the total time required.

function queueTime(customers, n) {
  let count = customers.slice(0, n);
  for ( let i = n; i<customers.length; i++) {
    let min = Math.min( ...count )
    let minIndex = count.indexOf(min)
    count[minIndex] = min + customers[i]
  }
  return count[0] ? Math.max(...count) : 0;
}


//
// // 7.26.17
// Given: an array containing hashes of names
//
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
function list(names){
  let arr = names.map( n => n.name )
  let r = arr[0];
  if ( arr.length === 1 ) { return r }
  if ( arr.length < 1 ) { return '' }
  for ( let i = 1; i < arr.length ; i++ ) {
    let addition = i === arr.length - 1 ? ' & ' : ', '
    r += (addition + arr[i])
  }
  return r;
}

//7.27.17
// Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.
//
// For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

function order(words){
  if ( words === '' ) { return '' }
  let r = [];
  let arr = words.split(' ').map( w => {
    let n = parseInt( w.replace(/^\D+/g, '') );
    r[n-1] = w;
  });
  return r.join(' ');
}

function order(words){

  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}    
