//Create an object that looks like this: {name: "Rusty", "room": kitchen, "weapon": candlestick}
//2. Extract out the weapon and location using destructuring

var obj = { name: "Rusty", room: "kitchen", weapon: "candlestick" };

const { name1, room1, weapon1 } = { name: "Rusty", room: "kitchen", weapon: "candlestick" };

console.log(obj.name);
var [a, [b, [c, d]]] = [1, [2, [3, 4], 5], 6];
console.log("a:", a, "b:", b, "c:", c, "d:", d);
console.log(c)
