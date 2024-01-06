// String is a sequence of Characters

var fullName = "Pankaj\" Kapoor"
console.log(fullName)
var address = 'Chandigarh'
// Escape Sequence: helps you to display special character ' "" \, \\
// \n \b \r \t \v

var hobbies =  'My Hobbies ar\'e \n"Dan\\cing", \n"Singing" '
console.log(hobbies)
var topic = "I love indian's Peopple"

// I want to write multiline string
 var multiLineText = `Hi I am Pankaj 
I am an Instructor
I am from Chandigarh`;

// Quotes
// " " : String
// ' ' : String 
// ` ` : Multiline String (Backtick) 


// Pre Formatted Tag 
{/* <pre></pre> */}

// Javascript function to create String Object
var x = "John"                  // String

// Programmatic way
var y = new String("John")      // Object

if(x===y)
{
    console.log("Same Hai")
}
else
{
    console.log("not same")
}