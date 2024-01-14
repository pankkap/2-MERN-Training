// Binary Search - We will find out middle position
// 1. if there are huge data
// 2. all data should be in increasing order

var unsortedArr = [
  4, 2, 8, 1, 5, 45, 12, 56, 14, 16, 11, 87, 32, 18, 90, 54, 76,
];
console.log(unsortedArr);

// Inbuilt Sorting Method
var SortedArr = unsortedArr.sort(function (a, b) {
  return a - b;
});
console.log(SortedArr);

var searchElement =parseInt( prompt("Enter element to be search"))
var found = false;
var location = -1;

var left = 0;
var right = SortedArr.length - 1;

while (left <= right) {
  var mid = Math.floor((left + right) / 2);
  if (SortedArr[mid] === searchElement) {
    found = true;
    location = mid + 1;
    break;
  } else if (SortedArr[mid] < searchElement) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
if (found) {
  console.log("Elments are available in the array", location);
} else {
  console.log("Elments are not available in the array");
}
