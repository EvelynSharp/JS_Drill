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
