// Grading System

// Percentage more than 80 ---> A
// Percentage more than 60 - 80 --> B
// Percentage more than 40 - 60 ---> C
// Percentage less than 40 ---> Fail

var percentage = parseInt(prompt("Enter your Percentage"));
if ((percentage = " ")) {
  console.warn("Kindly enter some value");
} else {
  if (percentage >= 80) {
    console.log("Student has Grade-A");
  } else if (percentage >= 60 && percentage < 80) {
    console.log("Student has Grade-B");
  } else if (percentage >= 40 && percentage < 60) {
    console.log("Student has Grade-C");
  } else {
    console.log("Student has Grade-Fail");
  }
}


// In class Task
// Find out greatest between three Numbers
var x = 18, y = 25, z= 201;
if( x>y && x>z )
{
    console.log("x is Bigger ",x);
}
else
{
        if(y>z)
        {
            console.log("Y is Bigger ",y)
        }
        else
        {
            console.log("z is bigger ", z)
        }
}




// How to check number is +ve or -ve
// var number = 10
// if(number > 0)
// {
//     console.log("Number is +ve")
// }
// else  if(number > 50)
// {
//     console.log("number is Bigger than 50")
// }
// else
// {
//     console.log("number is -ve")
// }
