function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i])
        }
    } else {
        for (const key in collection) {
            callback(collection[key])
        }
    }
    return collection
}

function myMap(collection, callback) {
    const newArray = []
    myEach(collection, (element) => newArray.push(callback(element)))
    return newArray
}

function myReduce(objectOrArray, callback, startingValue) {
    // it should be able to return reduced value from abject values too
    let accumulator = startingValue || objectOrArray[0]
    let i = startingValue ? 0 : 1
    if (Array.isArray(objectOrArray)) {
        for (; i < objectOrArray.length; i++) {
            accumulator = callback(accumulator, objectOrArray[i], objectOrArray)
        }
    } else {
        for (const key in objectOrArray) {
            accumulator = callback(accumulator, objectOrArray[key], objectOrArray)
        }
    }
    return accumulator
}
function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
            return collection[i]
        }
    }
}
function myFilter(collection, predicate) {
    const newArray = []
    for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
            newArray.push(collection[i])
        }
    }
    return newArray
}
function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length
    } else {
        return Object.keys(collection).length
    }
}
function myFirst(array, n) {
    if (n) {
        return array.slice(0, n)
    } else {
        return array[0]
    }
}
function myLast(array, n) {
    if (n) {
        return array.slice(-n)
    } else {
        return array[array.length - 1]
    }
}
function myKeys(object) {
    const newArray = []
    for (const key in object) {
        newArray.push(key)
    }
    return newArray
}
function myValues(object) {
    const newArray = []
    for (const key in object) {
        newArray.push(object[key])
    }
    return newArray
}
function mySortBy(array, callback) {
    const newArray = [...array]
    return newArray.sort((a, b) => callback(a) - callback(b))
}