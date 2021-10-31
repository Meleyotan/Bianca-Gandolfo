// [1, 2, 3].forEach(elem => { console.log(elem); })


each = function (collection, callback) {
    for (var i = 0; i < collection; i++) {
        callback(collection[i])
    }
}

each([1, 2, 3], v => console.log(v))


const reduce = function (list, cb, initial) {
    
    memo = initial;
    for (let i = 0; i < list.length; i++){
        memo  = cb(list[i], memo)
    }
    return memo;
}

reduce([1,2,3], (v, sum) => v + sum, 0)