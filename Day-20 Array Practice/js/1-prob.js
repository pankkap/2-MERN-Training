// Number of Elements we want to insert
var num = parseInt( prompt("Enter how many elemnts you want in an Array"));

// Blank Array
var myArray = []

for (var i=0;i<num;i++)
{
    // Inserting one element at a time into Array
    var data = parseFloat( prompt("Enter Element Value"))
    myArray.push(data)
}
// Display the array 
console.log(myArray)

var sum = 0
for (var i=0;i<myArray.length;i++)
{
    sum = sum + myArray[i]
}
alert ("Sum of Array Elements: "+sum)