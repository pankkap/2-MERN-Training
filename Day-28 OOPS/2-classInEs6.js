// What is this ? This is used to point to current Object
//class in ES6
class Person{
    // properties| data Member
    // private
    #name
    #age
    constructor(nam, age){
        this.#name = nam
        this.#age = age
    }
    //methods
    #display()
    {
        return `Name: ${this.#name} \nAge:${this.#age}` 
    }
}
// Objects
let obj1 = new Person("Manish",  25)
let obj2 = new Person("Kavita",  20)
let obj3 = new Person("Rahul",  30)
obj3.#name = "Sanjay"
obj3.#age = 100
console.log( obj2.display())
console.log( obj3.display())


// Access Specifier
// 1. public : anyone can access
// 2. private: Important information you can hide
// 3. protected: will be used in inheritance in subclass|Derived class