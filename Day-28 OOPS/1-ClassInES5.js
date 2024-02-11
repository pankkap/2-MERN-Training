// // OOPS: Object Oriented Programming System
// // class implementation in ES5 using Functions

// // class in ES5
// function Person(){
//     // 1. properties
//     this.name = "Pankaj"
//     this.age  = 30
//     this.salary = 10000.50

//     //2. Methods (functionality|behaviour)
//     this.display = function(){
//         return "Name: " + this.name + "\nAge: " + this.age + "\nSalary: " + this.salary
//     } 
//     this.update = function(name, age, salary)
//     {
//         this.name = name
//         this.age = age
//         this.salary = salary
//     }
// }

// // Object
// var obj1 = new Person();
// console.log(obj1.display())
// obj1.update("sachin", 35, 20000)
// console.log(obj1.display())


function Fruit(){
    // properties
    this.name = ""
    this.shape = ""
    this.color = ""

    // method
    this.display = function(){
            return "Name: " + this.name + "\nShape: " + this.shape + "\nColor: " + this.color
    } 
}
var banana = new Fruit()
banana.name = "Banana"
banana.shape = "length"
banana.color = "Yellow"
console.log( banana.display())


var apple = new Fruit()
apple.name = "Apple"
apple.shape = "Circluar"
apple.color = "red"
console.log( apple.display())