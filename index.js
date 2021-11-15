function myEach(collection, cbFunction){
let array = Object.values(collection)

for(let i =0; i<array.length; i++){
    cbFunction(array[i])
}

return collection
}


function myMap(collection, cbFunction) {
let array = Object.values(collection)

let newArray = array.map(x => cbFunction(x))
return newArray
}


function myReduce(collection, cbFunction, acc){
let arrayReduce = Object.values(collection)

if(acc === undefined){
    acc = [arrayReduce[0]]
    arrayReduce.shift()
}
console.log('see me ----------> ', arrayReduce, acc)
let result = arrayReduce.reduce(cbFunction, acc)
console.log('see result -------------->', result)
return result
}