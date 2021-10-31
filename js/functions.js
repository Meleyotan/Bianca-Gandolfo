//List transformations



function CreateSuspectObjects(name) {
  return {
    name: name,
    // color: name.split(" ")[1],
    speak() {
      console.log("my name is ", name);
    },
  };
}

var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];


function loopThrough() {
    for (let sus in suspects) {
        var name = suspects[sus];
    }
    return name
}

console.log(CreateSuspectObjects(loopThrough()))


var suspectList = [];

for (var i = 0; i < suspects.length; i++) {
    const suspect = CreateSuspectObjects(suspects[i]);
    suspectList.push(suspect);
}

//looping with each
_.each(suspects, function (name) {
    suspectList.push(CreateSuspectObjects(name))
});

['observatory', 'ballroom', 'library'].forEach(
    function (value, index, list) {
        console.log(value, index, list)
    }
)

const _ = {}
_.each = function (list, callback) {
  console.log(arguments);
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      callback(list.i, i, list)//loop through array
    }
  }
  else {
  }
}
