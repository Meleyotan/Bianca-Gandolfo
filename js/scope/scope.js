// //IIFE - Immediately invoked expressions
// (function () {
//   var name = "Meleyotan";
//   console.log(name);
// })();

// var what = (function (x, y) {
//   let final_answer = x * y;
//   console.log(final_answer);
// })

var info = "I dont know";

var ACTUAL = null;

(function () {
    var info = "Oyeyemi";
    
    {
        let info = "Meleyotan"
    }

  (function () {
      var info = "Olubukola";
    })();
    console.log(info)
})();

console.log(info)

var innerCounter = innerCounter || 10;
console.log(innerCounter)

var fn = function () {
    var innerCounter = innerCounter || 10;
    innerCounter = innerCounter + 1;
    ACTUAL = innerCounter;
};

fn();
console.log(ACTUAL)

var outerCounter = 10;

var fun = function () {
    outerCounter = outerCounter + 1;
    ACTUAL = outerCounter;
}

console.log(outerCounter)//10
fun()
console.log(outerCounter)//11
fun();
console.log(outerCounter)
fun();
console.log(outerCounter)

//Anonymous functions
var first = function(a) {
    return a + 100;
}

a => a +100
 
//02
var second = function(a, b) {
    return a + b + 100;
} 
    
var second = (a,b) => a + b + 100;
//03
let a = 10
let b = 20
var third = function(a, b) {
    return a + b + 100;
}

