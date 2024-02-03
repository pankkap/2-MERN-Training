// What is Promise:
// Promise is an Object that return a value that hope to recieve in future but not Now. 
// Promise is well suited for Aynchronous Programming
// Promised is way to communicate with API.
// Prmomise concept has introduced by ES6

var meeting = function(){
    return new Promise(function(resolve, reject){
     setTimeout(() => {
        var result = true      // Api Call
        if(result)
        {
            resolve("I will meet You")
        }
        else
        {
            reject("Sorry! Will meet on some other day")
        }
     }, 1000);
    })
};

console.log(meeting())
// How to handle Promise/ consume promise
// meeting().then(function(res){console.log(res)})
// meeting().catch(function(err){console.log(err)})
// meeting().then(function(res){console.log(res)}).catch(function(err){console.log(err)})

