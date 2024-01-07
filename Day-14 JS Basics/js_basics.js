// This an External JS File
document.write("This is External JavaScript Code")

// variable: It is used to store data
// syntax:
// var variable_name = value;

var full_name = "John Doe";
var age = 25;
var salary = 12000.50

// Rules for variable name
// 1. variable name should not start from number
// 2. there is no space between variable name
// 3. no other symbols, other than underscore(_) is allowed
// 4. keywords can not be used for variable name (keywords are names, reserved by JS)

// data types in JS
// Data Types: means which type of data you can store

full_name = "pankaj Kapoor";           
// re-Assignment/update previos value

// This is wrong, we can not redeclare the same variable name
// var age = 25;
// var salary = 12000.50

age = 30
console.log(full_name)
console.log(age)

// 1. string
var address = "Chandigarh";
var country = 'Chandigarh';

// 2. Numbers
var session_number = 14;
var time = 11.57;

// 3. Boolean : true/false
var weekend = true;
var weekday = false;

// 4. Null
var test = null  // not necessary to store value now, but may be used in future

// 5. Object
// 6. list (array)


// Operators
// 1. Arithmatic Operators: +,-,*,/,%
var a = 10, b = 20, c="10";
document.write("<br>")
document.write("Addition: ", a+b)
document.write("<br>Subtraction: ", a-b)
document.write("<br>Multiplication: ", a*b)
document.write("<br>Division: ", a/b)
document.write("<br>Modulas: ", a%b)

// 2. Relational Operators : <,>, <=, >=, ==, ===, != results in true/false
console.log("a<b :", a<b);
console.log("a>b :", a>b);
console.log("a<=b :", a<=b);
console.log("a>=b :", a>=b);
console.log("a==b :", a==b);
console.log("a==c :", a==c);
console.log("a!=c :", a!=c);    
console.log("a===c :", a===c);      // === check the value, but also check data type

// 3. Logical Operators : AND, OR, NOT

// And: && - if both statements are true, then Ans:true
console.log("Result - (a<b && a==c && b>c): ", (a<b && a==c && b>c))    //true
console.log("Result - (a<b && a===c): ", (a<b && a===c))                //false

// Or: || - if any statements is true, then Ans:true
console.log("Result - (a>b || a===c || b>c): ", (a>b || a===c || b>c))  //true
console.log("Result - (a>b || a===c || b<c): ", (a>b || a===c || b<c))  //false

// Not: ! - Negation of value
console.log("Result- !(a>b): ", !(a>b))     // true


// 4. Ternary Operator: ()?:
let result = (a<b)?'hello':'Bye';
console.log("Result: ", result)


// Taking input from Keyborad

// var x = ( prompt("Enter value of x"))
// console.log(typeof(x))
var x = Number( prompt("Enter value of x"))
console.log(typeof(x))
x = String(x)
console.log(typeof(x))
// var y = parseInt( prompt("Enter value of y"))
var y = parseFloat( prompt("Enter value of y"))
var z = x + y;
console.log("Sum of x and y : ", parseFloat( z))


// Dialog Boxes: used for Notification area
alert("This is simple Notification")
var  input = prompt("This is used for Input")
console.log(input)
var choice = confirm("Take input in the for of Yes|No")
console.log(choice)






