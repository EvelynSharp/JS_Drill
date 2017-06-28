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
