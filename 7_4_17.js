// Javascript // Lua:
//
// Create a function runningAverage() that returns a callable function object. Update the series with each given value and calculate the current average.
//
// rAvg = runningAverage();
// rAvg(10) = 10.0;
// rAvg(11) = 10.5;
// rAvg(12) = 11;


function runningAverage() {
  let numArr = [];
  return (num) => {
    numArr.push(num);
    let total = numArr.reduce( (total, i) => {
      return total += i;
    }, 0);
    return Math.round(100*total/numArr.length)/100
  }
}



function runningAverage() {
  var accumulator = 0;
  var size = 0;

  return function(number) {
    accumulator += number;
    size += 1;

    return Math.round(accumulator / size * 100) / 100;
  };
}
