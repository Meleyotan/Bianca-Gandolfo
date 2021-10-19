"use strict"
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element))
array1.forEach(function (element) {
    console.log(element)
})
// const materials = ['Hydrogen', 'Helium', 'Lithium', 'Berylium'];
// console.log()

const addA = function (a) {
    return a + 100;
}

console.log(addA(20))

let bob = a => a + 100;


const items = ['item1', 'item2', 'item3']
const copyItems = []

for (let i = 0; i < items.length; i++) {
    copyItems.push(items[i])
}

items.forEach(function (item) {
    copyItems.push(item)
})

function pushItem(item) {
    copyItems.push(item);
    console.log(item)
}

items.forEach(item => pushItem(item))


//Loop through a list of fruits, push it to an array, use the arrow function, use the forEach
//the foreach function is good for looping through an array and operating on the each elements with
//a funtion
//array.foreach(function())

//Pseudocode
//##declare a constant
//##declare a function
//##loop through with for each and call the function


const fruits = [
    'Orange',
    'Mango',
    'Pear',
    'Banana',
    'Grape'
]

function listFruits(fruit) {
    console.log(fruit)
}

fruits.forEach(fruit => listFruits(fruit))

// fruits.forEach(fruit => console.log(fruit))
// fruits.forEach(function (fruit) {
//     console.log(fruit);
// })

const stuData = {
    Meleyotan: "19",
    Oreoluwa: "16",
    Dad: "56",
    room: {
        Kitchen: "2"
    }
}

// function listData(data) {
//     console.log(data)
// }

// stuData.forEach(function (data) {
//     console.log(data)
// })


//simply .forEach function cannot loop through an object

const obj = Object.entries(stuData);

Object.entries(obj).forEach(entry => {
    const [key, value] = entry;
    console.log(key, value)
});
