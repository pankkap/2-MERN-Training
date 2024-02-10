// ES5 we can create a variable using the var keyword.
// By default javascript using Lazy mode

// New variable declation that can done with the help of a new kyword called let
// ES6: all rules of Strict mode
// let also works with a new scope called block scope
// 1. Global scope
// 2. Function scope
// 3. Block Scope-----> ES6


{
    let a =15;          // let concept ES6
}
// console.log(a)



function hello(){
    let a = 10;         // function scope
    console.log(a)
}

// hello();

// console.log(a)




// const keyword has introduced in ES6 (Literals)
// block scope variable

{
    const a = 10
    console.log(a)
    {
        const a = 15
        console.log(a)
    }
    console.log(a)
}
const fname = "pankaj"
// fname = "sachin"
// console.log(fname)
