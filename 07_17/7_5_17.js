
// You have recently been hired by a large boat retailer, Beast Bouy, who wants to know exactly what date they can expect shoppers to crowd their store and purchase their stocks of moderately discounted jet-skis. Your first task at this job is create a blackFriday function which accepts an integer year, and returns the day of the month of November that Black Friday falls on in that year. Your function only needs to support years after 1752*.


function blackFriday(year) {
  let counter =0;
  for ( let d = 1; d <= 30; d++) {
    let newDate = new Date('November '+ d + ', ' + year + ' 00:00:00');
    let newDay = newDate.getDay();
    if (newDay === 4) ++counter;
    if (counter === 4) return d+1;
  }
}


function blackFriday1(year) {
  return 30 - (  new Date(year, 11,1).getDay() + 1);
}
