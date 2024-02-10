// ES5 Function
// Normal function 
var add = function(a,b){
    return a+b
}

console.log(add(5,10))

// ES6 Function  | Single line function
var sum =(a,b) => a+b
console.log(sum(10,20))

var sqr = a => a*a
console.log(sqr(10))

let message =()=> console.log("This is a Arrow Function")
message()

