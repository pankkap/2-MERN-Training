var age = 30            // primitive data type
var name = "Manish" 

// Javascript Object: Multiple value

// 1. Object Creation:literal 
var person = {
    name: 'John',       // name--> key(property), 'John'-->value
    age: 20,
    location:'New Jursey',
    eyeColor:'gray',
    fullName:'John Kooper',
    hobbies: ["reading", "writing", "Gardening", "coding"],
    address:{
        city:'Jursey', 
        state:'Colambia', 
        country:'USA'    
    }
}
// console.log(person)
// 2. Access single property of an Object: 
// object.property
// console.log(person.eyeColor)
// console.log(person["eyeColor"])
// console.log(person.fullName)
// console.log(person["fullName"])
// console.log(person.address.country)
// console.log(person.hobbies[2])

// Access all properties of an Object
for(var i in person){
    // console.log(i)
    // console.log(person[i])
}

// console.log(person.age)     // using dot operator
// console.log(person["age"])  // using array notation

// 3. updating Object value

// To get the entire data from user, u have to use FORM---> DOM
person.eyeColor  = "Brown"
person.address.state = "Washington"
person["age"] = 30
// console.log(person)

// 4. Add new property
person.study = "MCA"
// console.log(person)


// 5. delete a property
delete person.location
delete person["age"]
// console.log(person)

// Create Blank Objects
var data = {}
var Obj = new Object();     // using Inbuilt Methods

var myArrayOfHobbies = Object.values(person.hobbies)
console.log(myArrayOfHobbies)

// Task-1
// create this person object using prompt
var newArr = []
var myData = ["name", "age", "location"]
 for (var j=0;j<myData.length;j++)
        {
            newArr.push(prompt("Enter "+myData[j] ))
        }

data.name = newArr[0]
data.age = newArr[1]
data.location = newArr[2]

console.log(data)