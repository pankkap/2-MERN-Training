// What is Callback?
// Any function that is passed as an argument to a function is called a callback function 

console.log("This is an Example of CallBack")

var students = [
    {name:"Manish", class: "5th"},
    {name:"Sachin", class: "6th"},
    {name:"Kriti", class: "5th"},
]
var newStudent = {name:"Arijit", class: "6th"}

function displayStudents(){
    setTimeout(() => {
        var str = ""
    students.forEach(function(i){
        str = str + i.name + " "
    });
    console.log(str)
    }, 2000);
}
function admitStudent(student, callback){
    setTimeout(() => {
        students.push(student)
        console.log("Student Admitted")
        callback()
    }, 3000);
}

admitStudent(newStudent, displayStudents)
// displayStudents()