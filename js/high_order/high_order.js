const _ = require('lodash');
// //High Order Functions
// const newClue = (name) => {
//   const length = name.length;

//   return (weapon) => {
//     let clue = length + weapon.length;
//     return !!(clue % 1);
//   };

// };

// // console.log(!!(10 % 2 == 0))


// // const ifElse = (condition, isTrue, isFalse) => {
// //   return condition ? isTrue() : isFalse();
// // };

// // ifElse(true,
// //  () => { console.log(true);},
// //  () => { console.log(false);}
// // );



// //ES5 
// // var square = function (n) {
// //     return (n * n);
// // }

// // var doMathIdontHavetoDo = function (n, square) {
// //     return (square(n));
// // }

// // console.log(doMathIdontHavetoDo(8, square)) 

// // doMathSoIDontHaveTo(5, square);

// // doMathSoIDontHaveTo(4, increment);

// //ES6+ Translation

// const increment = (n) => {return n+1}
// const square = n => { return n * n }
// var doMathSoIDontHaveTo = (n, func) => { return func(n); };

// console.log(doMathSoIDontHaveTo(6,square))


// const ifElse = (condition, isTrue, isFalse, ...args) => {
//     console.log(args)
//   return condition ? isTrue() : isFalse();
// };

// ifElse(true,
//  () => { console.log(true);},
//  () => { console.log(false);}, 'hi', 'Meleyotan'
// );


const reducer = function (list, cb, initial) {
    //set initial to result
    var result = initial//1
    //loop through list
    for (i = 0; i < list.length; i++){
        console.log("Before function process:", result)//8
        what = 20
        //call function
        var result = cb(list[i],result,what)//3, 8
        console.log("After function process:", result)
    }
    //return the value of the loop
    return result//2
}

console.log("Final answer:", reducer([2, 2, 69, 3, 4], (v,x,y) => v + 2 + x + y, 2))


let arr = [1,2,3,4] 
sum = 0
for (i = 0; i < arr.length; i++){
  final = arr[i]
  console.log(sum)
  sum = sum + final
}

