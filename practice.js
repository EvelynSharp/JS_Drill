// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name

function duckDuckGoose(players, goose) {
  let totalPlayer = players.length;
  let playerIndex = goose % totalPlayer;
  if ( playerIndex > 0) {
    return players[playerIndex-1].name;
  } else {
    return players[totalPlayer-1].name;
  }
}

function duckDuckGoose1(players, goose) {
  return players[(goose-1)%players.length].name
}


// Write a function f (in C# F) that returns Hello, world! string. But there is one thing, you cannot use helowrd letters.
// The C# test cases ignore checking for banned letters in words class, string and public. Have fun!


// c=()=> {
//   return String.fromCharCode(72) + String.fromCharCode(69,76,76,79).toLowerCase()+','+String.fromCharCode(32,87,79,82,76,68).toLowerCase()+'!'
// }

so f=()=> ‘\x48\x65\x6C\x6C\x6F\x2C\x20\x77\x6F\x72\x6C\x64\x21’
