// document.write("Hi I am Pankaj<br>")
// When there is situation to print a single task multiple time
// Then we can use the concept of 
// Loop: A iterative structure to do tasks multiple times
// while
// Do while
// for 
// for of
// for in

// What is Parts of Every Loop
// 1. Initialization : where we have to start the loop
// 2. Termination Condition : It is used to stop the loop
// 3. iteravtive Sequence:  increment/decrement with 1  ---> 1->1:2,3,4,5,6,7,8,9,10

// syntax of While

// initialize condition
// while(condition)
// {
//     // Task
//     // Increment/decrement
// }

// I want to print my name for 10,000 times

var i = 10       // intialization
while(i>=1)     // condition
{
    var name = prompt("Enter your name")
    document.write(name + "<br>")
   i = i - 1        // increment
}

