// What is this ? This is used to point to current Object
//class in ES6
class ABC{}
class Person{
    // properties| data Member
   #name;
   #age;
    constructor(nam, age){
        this.#name = nam
        this.#age = age
    }
    //methods
    display()
    {
        return `Name: ${this.#name} \nAge:${this.#age}` 
    }
}

class Employee extends Person, ABC
{
    constructor(name, age, salary)
    {
        super(name, age)        // base class constructor called
        this.salary = salary
    }
    show()
    {
        super().display()
        console.log("Salary:"+this.salary)
    }
}

let obj1 = new Employee("xyz", 30, 10000)
obj1.show()
obj1.display()


