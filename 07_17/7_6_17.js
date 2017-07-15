// Create the function fridayTheThirteenths that accepts a start year and an end year (inclusive), and, using the Date object returns all of the dates where the 13th of a month lands on a Friday between the given year(s).
//
// The return value should be a string where each date is seperated by a space. The date should be formatted like 9/13/2014 where months do not have leading zeroes and are separated with forward slashes.
//
// If no end year is given, only return friday the thirteenths during the start year.

function fridayTheThirteenths(start, end) {
  let result = [];
  if (!end) end = start;
  for( let y = start; y <= end; y++ ) {
   for( let m = 0; m < 12; m++) {
     let dayOf13 = new Date( y, m, 13).getDay()
     if (dayOf13 === 5) {
       result.push( (1+m) +'/13/'+y );
     }
   }
  }
  return result.join(' ');
}

// good first line
function fridayTheThirteenths(start, end) {
  end = end || start;
  var matches = [];
  for (var year = start; year <= end; ++year)
    for (var month = 1; month <= 12; ++month)
      if (new Date(year, month - 1, 13).getDay() == 5)
        matches.push(month + '/13/' + year);
  return matches.join(' ');
}
