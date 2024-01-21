// function variations

// 1. function without parameter without return
function sum1(){
    var a =10 , b=20
    console.log(a+b)    
}
sum1()

// 2. function with parameters and without return
function sum2(x,y){     // parameter
    console.log(x+y)
}
// var num1 = prompt("Enter num1")
// var num2 = prompt("Enter num2")
// sum2(num1,num2)
// sum2(8,23)      // arguments
// sum2(18,23)

// 3. function with parameters and with return statement
function sum3(x,y)
{
        return x+y
}
var result = sum3(10,25)
console.log(result)
console.log(Math.pow(result,2))
// Math.pow is in-built method of javascript


// 1. Factorial of Number (prompt from user)
// 2. Sum of all numbers into array [1,2,3,4,5] = 15
// 3. Create function that recieve an Object to print the details of user 
    var user = {
        name: "Pankaj",
        age: 30,
        location:"delhi"
    }

    function details()
    {
        // hi pankaj, your age is 30 and your location is delhi
    }