// Linear Search
var myArray = [1, 56, 23, 67, 23, 78, 33, 11, 25];
console.log(myArray)
var found = false;
var location=-1;
var searchElement = parseInt(prompt("Enter element to be search"));
console.log(searchElement)
// for of is used for element access but not location

for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] === searchElement) {
    found = true;
    location = i+1;
    break;
  }
}

if (found) {
  console.log("Element available in the array: ");
} else {
  console.log("Elements are not there in the array");
}
