export default function ABC(){
    console.log("This is an Important Function")
}

// variable
let projectName = "Todo App"

let clientInformation = "XYZ"

// function
let display = (clientName)=>{
    return `Hi I am ${clientName}`
}

// class
class Project
{
    // data members
    constructor(name, id, designation){
        this.name = name
        this.id = id
        this.designation = designation
    }
    // member function
    dispDetails(){
        console.log(`Developer Name: ${this.name}\nDeveloper ID: ${this.id}\nDeveloper Designation:${this.designation}`)
    }
}

export {projectName, display, Project};