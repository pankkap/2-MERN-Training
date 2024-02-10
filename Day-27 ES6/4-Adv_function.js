// forEach: Is used to iterate the array


let arr = [1,2,3,4,5,6,17,38,9,10]
// let arr3 = [10,20,30,40,50,60,70,80,90,100]
// print odd number of data from the array
let arr1 = []
arr.forEach(element => {
    if(element%2!==0)
    arr1.push(element)
});
console.log(arr1)

// Map Function
let arr3 = arr.map(element=>element*10)
console.log(arr3)

// Filter Function : It will return filtered Data
let arr2 = arr.filter(element => element%2!==0 );
console.log(arr2)

// Reduce Function: It will return single data
let result = arr.reduce((a,b)=>(a+b))
// let result = arr.reduce((a,b)=>Math.max(a,b))    // Maximum in the array
console.log(result)