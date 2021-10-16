//Loop through all the properties of the suspect objects in the suspects array,
// mark them if you think they are guilty.

const game = {
  suspects: [
    {
      name: "Rusty",
      room: "kitchen",
      color: "orange"
    },
    {
      name: "Scarlet",
      room: "lobby",
      color: "red"
    },
  ],
};

function loop() {
  for (let i = 0; i < game.length; i++) {
    console.log(game.suspects[i]);
  }
}
loop();

for (let key in game) {
  console.log(key);
}

for (let info in game.suspects) {
  console.log(game.suspects[info]);
}

var suspectLoop = function () {
  for (var i = 0; i < game.suspects.length; i++) {
    console.log(game.suspects[i]);
    for (var info in game.suspects[i]) {
      if (game.suspects[i][info] === "Rusty") {
        console.log("Found 'em");
      } else {
        console.log("Not found ):");
      }
    }
  }
};

suspectLoop();

//Exc. 01
for (var i = 0; i < game.suspects.length; i++) {
  console.log(game.suspects[i]);
}

//Exc. 02
for (var i = 0; i < game.suspects.length; i++) {
  console.log(game.suspects[i]);
  for (info in game.suspects[i]) {
    console.log(game.suspects[i][info]);
  }
}

//Exc. 03
var [firstColor, secondColor] = [game.suspects[0].color, game.suspects[1].color];
console.log([firstColor, secondColor])