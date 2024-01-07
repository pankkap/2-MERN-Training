// Javascript Array

var names = [
  "Pankaj",
  "Kavita",
  "Arijit",
  "Aesaan",
  "Ranganath"];

var ages = [30, 20, 21, 23, 25];

var salaries = [10.24, 32.12, 45.12, 45.9];

// console.log(names)
// console.log(ages)
// console.log(salaries)

// Mixed Array
var data = [
  100,
  101,
  102,
  "India",
  "Australia",
  "USA",
  "Canada",
  true,
  [1, 2, 4, 5],
  function () {
    console.log("Hi");
  },
];
// console.log(data)

// How we can access Array Elements one at a time
// console.log(names[1])
// console.log(names[4])
// console.log(names[names.length-1])
// console.log(data.length)

// Access all elements together
// for(var i=0;i<names.length;i++)
//     console.log(names[i])

// Update data of any array Element

names[3] = "Md Aehsaan";
// console.log(names)

// Special Loop to update data of Every Element
// names.forEach(function(i){
//     console.log("Mr. " +i)
// })

// Array Methods
var newArray1 = new Array(); //1. Blank Array using constructor
var newArray2 = []; // 2. Using Blank square brackets

console.log(newArray1);
// push is used to add new elements into array at the last
newArray1.push(100);
newArray1.push(200);
newArray1.push(300);
newArray1.pop(); // It is used remove the element from last
newArray1.pop(); // It is used remove the element from last
console.log(newArray1);

// To add and delete element from starting
newArray1.unshift(50);
newArray1.unshift(150);
newArray1.shift();
newArray1.shift();
console.log(newArray1);

// Remove element by their position
// splice is use to insert, delete and replace element at any postion

names.splice(1, 2); // 1 arg is the position and 2 arg no. of elements to delete
// names.splice(1,2)               // Delete two elements
// names.splice(1,0)               // insert one new element
// console.log(names)
// names.splice(3,1, "session-19")               // replacement
// names.splice(0,0, "session-18")               // inserting new Element
// console.log(names)

var arr1 = ["Pankaj", "Sachin", "Manish"];
var arr2 = ["Kavita", "Aehsaan", "Arijit", "Ranganath"];
var arr3 = arr1.concat(arr2);
// Merge the arrays
// console.log(arr3)

// Sort string array by their name
// console.log(arr3.sort())

var numbers = [45, 67, 23, 12, 9, 22, 112, 204];
console.log(numbers.sort());
// sort() will not work directly with numbers

// TO sort numvers we use comparision using sort (Asending Order)
console.log(
  numbers.sort(function (a, b) {
    return a - b;
  })
);
// TO sort numvers we use comparision using sort (descending Order)
console.log(
  numbers.sort(function (a, b) {
    return b - a;
  })
);


names = [
    "Pankaj",
    "Kavita",
    "Arijit",
    "Aesaan",
    "Ranganath", "Rajni", "Surbhi"];

names.forEach(function(i){
    if(i=="Kavita" || i == "Rajni" || i=="Surbhi")
        console.log("Ms. " + i)
    else
        console.log("Mr. " + i)
})
