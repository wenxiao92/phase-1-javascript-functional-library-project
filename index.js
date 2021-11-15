function myEach(collection, cbFunction){
let array = Object.values(collection)

for(let i =0; i<array.length; i++){
    cbFunction(array[i])
}

return collection
}


function myMap(collection, cbFunction) {
let array = Object.values(collection)

let newArray = []
for(let i = 0; i< array.length; i++){
    newArray.push(cbFunction(array[i]))
}

return newArray
}


function myReduce(collection, cbFunction, acc){
let arrayReduce = Object.values(collection)

if(acc === undefined){
    acc = arrayReduce[0]
    arrayReduce.shift()
}
// //console.log('see me ----------> ', arrayReduce, acc)
// let result = arrayReduce.reduce(cbFunction, acc)
// //console.log('see result -------------->', result)
// return result

let accumulator = acc
for(let i = 0; i < arrayReduce.length; i++){
    let currentValue = arrayReduce[i]
    console.log(accumulator)
    accumulator = cbFunction(accumulator, currentValue)
    console.log(accumulator)
}

return accumulator

}


function myFind(collection, predicate){
let arrayFind = Object.values(collection)

for(let i = 0; i<arrayFind.length; i++){
    if(predicate(arrayFind[i]) === true){
        return arrayFind[i]
    }
}
return undefined

}


function myFilter(collection, predicate){
let arrayFilter = Object.values(collection)   
let newArrayFilter = []
for(let i =0; i<arrayFilter.length; i++){
    if(predicate(arrayFilter[i]) === true){
        newArrayFilter.push(arrayFilter[i])
    }
}
return newArrayFilter

}


function mySize(collection){
let arraySize = Object.values(collection)
let size = arraySize.length

return size
}


function myFirst(array, n){
let returnArray = []

if(n === undefined){
    //n = 1
    return array[0]
} else {
    for(let i = 0; i < n; i++){
        returnArray.push(array[i])
    }
}

return returnArray
}


function myLast(array, n){
    let returnArray = []
 
    if(n === undefined){
        //n = 1
        return array[array.length-1]
    } else {
        for(let i = (array.length-n); i < array.length; i++){
            returnArray.push(array[i])
        }
    }
    return returnArray
}


function myKeys(object){
return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}