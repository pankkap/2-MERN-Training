// Create new Array

var myArray = [10,20,30,40,50]
var newArray = []

// for-of loop to access every element of an array (Simple Loop easy then forEach)
for (var i of myArray) {
    newArray.push(i*10)
}
console.log(myArray)
console.log(newArray)

