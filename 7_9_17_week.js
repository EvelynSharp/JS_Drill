// 7.9.17
// Find out "B"(Bug) in a lot of "A"(Apple).
//
// There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.
//
// input: string Array ```apple```
//
// output: Location of "B", ```[x,y]```

let sc = (a) => {
  let r;
  a.map((s,i)=> s.includes("B") ? r=[i,s.indexOf("B")] : 1);
  return r;
}

let sc = (a) => {
  r=0;
  a.map((s,i)=> s.includes("B") ? r=[i,s.indexOf("B")] : 1);
  return r;
}

function sc(a) {
  for(var i=0;;i++){
   let r=a[i].indexOf('B');
    if(r>-1)
      return[i, r]
  }
}

//7.10.17

// Magic The Gathering is a collectible card game that features wizards battling against each other with spells and creature summons. The game itself can be quite complicated to learn. In this series of katas, we'll be solving some of the situations that arise during gameplay. You won't need any prior knowledge of the game to solve these contrived problems, as I will provide you with enough information.
//
// Creatures
//
// Each creature has a power and toughness. We will represent this in an array. [2, 3] means this creature has a power of 2 and a toughness of 3.
//
// When two creatures square off, they each deal damage equal to their power to each other at the same time. If a creature takes on damage greater than or equal to their toughness, they die.
//
// Examples:
//
// Creature 1 - [2, 3]
// Creature 2 - [3, 3]
// Creature 3 - [1, 4]
// Creature 4 - [4, 1]
// If creature 1 battles creature 2, creature 1 dies, while 2 survives. If creature 3 battles creature 4, they both die, as 3 deals 1 damage to 4, but creature 4 only has a toughness of 1.
//
// Write a function battle(player1, player2) that takes in 2 arrays of creatures. Each players' creatures battle each other in order (player1[0] battles the creature in player2[0]) and so on. If one list of creatures is longer than the other, those creatures are considered unblocked, and do not battle.
//
// Your function should return an object (a hash in Ruby) with the keys player1 and player2 that contain the power and toughness of the surviving creatures.

function battle(player1, player2) {
  let battleNum = Math.min( player1.length, player2.length);
  let result = {
    'player1': [],
    'player2': []
  }
  let extraNum = Math.max( player1.length, player2.length) - battleNum;
  for ( let i = 0; i < battleNum; i++) {
    if (player1[i][0] < player2[i][1] ) result.player2.push(player2[i]);
    if (player2[i][0] < player1[i][1] ) result.player1.push(player1[i]);
  }
  if (extraNum > 0) {
    let longerPL = player1.length - player2.length > 0 ? player1 : player2;
    let plName = player1.length - player2.length > 0 ? 'player1' : 'player2';
    for ( let i = battleNum; i < longerPL.length; i++) {
      result[plName].push(longerPL[i]);
    }
  }
  return result;
}

const battle = (player1, player2) => {
  return {
    player1: player1.filter((c, i) => !player2[i] || c[1] > player2[i][0]),
    player2: player2.filter((c, i) => !player1[i] || c[1] > player1[i][0]),
  }
}


// 7.11.17

// Write Number in Expanded Form - Part 2
//
// This is version 2 of my 'Write Number in Exanded Form' Kata.
//
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
// expandedForm(1.24); // should return '1 + 2/10 + 4/100'
// expandedForm(7.304); // should return '7 + 3/10 + 4/1000'
// expandedForm(0.04); // should return '4/100'

function expandedForm(num) {
  let numArr = num.toString().split('');
  let resultArr = [];
  if( !numArr.includes('.') ) {
    resultArr = numArr.map( (n, i) => {
      let p = numArr.length - i - 1;
      resultArr.push( (Math.pow( 10, p ) * Number(n) ).toString() );
    });
  } else {
    let breakIndex = numArr.indexOf('.');
    for ( let i = 0; i < breakIndex; i++) {
      if ( numArr[i] !== '0') {
        let s1 = + Number(numArr[i]) * Math.pow( 10, (breakIndex-i-1) )
        resultArr.push(s1);
      }
    }
    for ( let i = breakIndex + 1; i < numArr.length; i++) {
      if ( numArr[i] !== '0') {
        let s2 =  Number(numArr[i])+ '/' + Math.pow( 10, ( i - breakIndex) )
        resultArr.push(s2);
      }
    }
  }
  return resultArr.join(' + ');

}


// 7/12/17

// Details
// Solutions
// Discourse (10)
// Add to Collection|Share this kata:
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:
//
// 2332
// 110011
// 54322345
//
// For a given number num, return its closest numerical palindrome which can either be smaller or larger than num. If there are 2 possible values, the larger value should be returned. If num is a numerical palindrome itself, return it.
//
// For this kata, single digit numbers will NOT be considered numerical palindromes.
//
// Also, you know the drill - be sure to return "Not valid" if the input is not an integer or is less than 0.


6 kyu
Numerical Palindrome #4
JavaScript:

function palindrome(num) {
  if( typeof num !== 'number' || num < 0) { return "Not valid" };
  for( let i = 0; ; i++) {
    let newnumArr1 = (num + i).toString().split('');
    let newnumArr2 = (num - i).toString().split('');
    let reverseArr1 = [];
    let reverseArr2 = [];
    for ( let x in newnumArr1) { reverseArr1.unshift(newnumArr1[x]) };
    for ( let x in newnumArr2) { reverseArr2.unshift(newnumArr2[x]) };
    if ( newnumArr1.join('') === reverseArr1.join('') && num+i >= 10) {
      return (num + i)
    }
    if ( newnumArr2.join('') === reverseArr2.join('') && num-i >= 10) {
      return ( num - i )
    }
  }
}

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


// Write
//
// function deepSort(arr, asc)
// that, given an array of any depth, sorts it in the order given by asc.
// When asc === true then sort ascending, otherwise descending.
//
// For example:
//
// deepSort([1, [2, 4], 3, 8]) === [8,[4,2],3,1]
// // When a number is compared to an array or an array to another array,
// // you need to get the sum of the array. In this case [2,4] === 6. 6 is the second highest
// // value in the entire array and thus [2,4] is second when sorting descending. The array [2,4]
// // is also sorted based on asc argument, hence [4,2]
//
// deepSort([1, 2, 3, 4, [-5,-4]], true)) === [[-5,-4],1,2,3,4]
// deepSort([1, [2, 3, [4, 5, [9, 11], 1, 8], 6], [20, 7, 8]], false) === [[[[11, 9], 8, 5, 4, 1], 6, 3, 2], [20, 8, 7], 1]
// deepSort([2, [1, 1], [1, 1], 2], true) === [2, [1, 1], [1, 1], 2] // already sorted, this is equivalent to [2, 2, 2, 2]


function deepSort(arr, asc) {
   let newArr = arr.sort( (a,b) => {
     let a1, b1;
     a1 = addArr(a);
     b1 = addArr(b);
     return asc === true ? a1-b1 : b1-a1
   }).map( v => Array.isArray(v) ? deepSort(v, asc) : v);
   return newArr
}

function addArr( arr ) {
  if(Array.isArray(arr)) {
    return arr.reduce( (t, n) => {
      let x = Array.isArray(n) ? addArr(n) : n;
      return t += x }, 0)
  } else {
    return arr
  }
}
