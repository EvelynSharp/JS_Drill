// ###Task:
//
// You have to write a function pattern which returns the following Pattern(See Examples) upto n number of rows.
//
// Note:Returning the pattern is not the same as Printing the pattern.
// ####Rules/Note:
//
// The pattern should be created using only unit digits.
// If n < 1 then it should return "" i.e. empty string.
// The length of each line is same, and is equal to the number of characters in a line i.e n.
// Range of Parameters (for the sake of CW Compiler) :
// n ∈ (-50,150]
// ###Examples:
//
// pattern(8):
//
// 88888888
// 87777777
// 87666666
// 87655555
// 87654444
// 87654333
// 87654322
// 87654321


function pattern(n){
  var output=[];
  let numArr = ['0','1','2','3','4','5','6','7','8','9']
  if (n <=0) return ""
  let nArr = (''+n).split('');
  let digit = nArr[nArr.length-1];
  let firstPat='';
  for ( let i = 1; i <= n; i++) {
    firstPat += digit;
  }
  output.push(firstPat);
  for ( let i = n-1; i > 0; i-- ) {
    let digitArr = digit.split('');
    let lastDigit = digitArr[digitArr.length-1];
    let curPat = digit;
    for (let r = 1; r <= i; r ++) {
      let preMinIndex = numArr.indexOf(lastDigit);
      let curIndex;
      if (preMinIndex === 0) {
        curIndex = 9;
      } else {
        curIndex = preMinIndex-1;
      }
      curPat += numArr[curIndex];
    }
    output.push(curPat);
    digit=curPat.slice(0, n-i+1);
  }
  return output.join('\n');
}



function pattern1(n){
  var output=[];
  var row=[];
  for( var i=n; i>=1; i--)
  {
     row = [];
     for( var j=n; j>i; j--)   row.push(j%10);
     for( var k=1; k<=i; k++)  row.push(i%10);

     output.push(row.join(''));
  }
  return output.join('\n');
}
