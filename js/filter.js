const fruits = ['orange', 'pear', 'grape', 'guava']

const results = fruits.filter(fruit => fruit.length > 4)

console.log(results)

// let arr = [
//     { id: 15 },
//     { id: -1 },
//     { id: 0 },
//     { id: 3 },
//     { id: 12.2 },
//     {},
//     { id: null },
//     { id: NaN },
//     { id: 'undefined' }
// ]


// console.log(arr.length)

// let invalidEntries = 0;

// function filterById(item) {
//     if (Number.isFinite(item.id) && item.id !== 0) {
//         console.log("God is good");
//     }
//     invalidEntries++
//     console.log("Devil shall not conquer");
// }

// let arrById = arr.filter(filterById({id: 3}))
// console.log('Filtered Array\n', arrById)


const _ = {}

_.filter = function (arr, callback) {
    //create a new array 
    const storage = [];
    //loop through  arr

    _.each(arr, function (val) {
        if (cb(val) === true) {
            storage.push(val)
        }
    })

    for (let i = 0; i > arr.length; i++){
                //check if a callback retruns true
        if (callback(arr[i], i, arr) === true) {            
        //if returns true, push into array
            storage.push(arr[i])
        }
    }
    return storage
    //return arr
} 