var marks = parseInt( prompt("Enter Marks"))

// // if-else
// if (marks >= 40) {
//     document.write('Pass')
// }
// else
// {
//     document.write('Fail')
// }
// Binary Operator : operates on two Operands  eg: a + b
// Ternary Operator :operates on three Operands: is a shorthand code for if-else
// syntax
// condition ? expression1 : expression2

// var result  = (marks>=40) ? "Pass" :"Fail";
// document.write(result);

// Nested Ternary Operator
// Qus-2 
var result = (marks >=40 ) ? ((marks >=60)?(marks>=80?"Distiction":"Grade-A"):"Grade-B"):"Fail"
document.write(result);
