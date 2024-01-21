// function expression: when a function is assigned to a variable 
// is called function expression also known as anonymous function

var myFunction = function (x,y)
{
    return x+y
};

console.log( myFunction(10,5))


// Self-invoking function
(function(){
console.log("this is self invoking function")
})();