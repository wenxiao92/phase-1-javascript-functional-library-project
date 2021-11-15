function myEach(collection, cbFunction){
let array = Object.values(collection)

array.forEach(element => cbFunction(element))
return collection
}


function myMap(collection, cbFunction) {
let array = Object.values(collection)

let newArray = array.map(x => cbFunction(x))
return newArray
}


function myReduce(collection, cbFunction, acc){
let arrayReduce = Object.values(collection)

//console.log('see me ----------> ', arrayReduce)
let result = arrayReduce.reduce(cbFunction, acc)
//console.log('see result -------------->', result)
return result
}