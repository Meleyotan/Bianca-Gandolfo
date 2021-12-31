const data = [{ name: 'Meleyotan' }, { name: 'Oreoluwa' }, { name: 'Kemi' }]
var result = []
const combine = (data) => {
    for (i = 0; i < data.length; i++) {
        result = result + (data[i].name)
    }
}

console.log(result.map(combine))
console.log(typeof(result))