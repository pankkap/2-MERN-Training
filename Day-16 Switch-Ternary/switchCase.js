// Menu-Driven Program
// var day = parseInt(prompt("Enter number between 1-7"));
// switch (day) {
//   case a:
//     document.write("Today is Monday");
//     break;
//   case 2:
//     document.write("Today is Tuesday");
//     break;
//   case 3:
//     document.write("Today is Wednesday");
//     break;
//   case 4:
//     document.write("Today is Thursday");
//     break;
//   case 5:
//     document.write("Today is Friday");
//     break;
//   case 6:
//     document.write("Today is Saturday");
//     break;
//   case 7:
//     document.write("Today is Sunday");
//     break;
//     default:
//         document.write("Enter correct Number")
//         break
// }


// var fname = prompt("Enter any Character")
// switch(fname)
// {
//     case 'a': document.write("Ankit") 
//             break;
//     case 'b': document.write("Banu") 
//             break;
//     case 'c': document.write("Chiku") 
//             break;
//     default:
//             document.write("Your are a bad fellow")
//             break
// }


// Class Task on Switch to perform operation on Operators
// + : Addition of 2 Numbers
// - : Subtraction of 2 Numbers
// * : Multiplication of 2 Numbers
// / : Division of 2 Numbers

 
var number1 = parseFloat( prompt("Enter 1st Number"))
var number2 = parseFloat( prompt("Enter 2nd Number"))
var op = prompt("Enter Operator to perform Arithmatic Operation")

switch(op)
{
    case "+": 
        document.write("Addition = ",number1 + number2);
        break
    case "-": 
        document.write("Subtraction = ",number1 - number2);
        break
    case "*": 
        document.write("Multiplication = ",number1 * number2);
        break
    case "/": 
        document.write("Division = ",number1 / number2);
        break
    default: 
        document.write("Enter correct Operator")
        break    
}