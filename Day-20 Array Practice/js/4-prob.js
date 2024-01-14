// Find Largest Element in an array
var array = [45,7,12,34,56,1,34,78,32,11,23,12,43,89,3] 
var a = prompt("Hell0")
// Algorithm to find the largest of an array 
// consider 1st number as largest number
var max = array[0]

// for(i=0;i<array.length;i++)
// shorter loop of for loop with variable
for (var i of array)
{
    if(i > max)
    {
        max = i
    }
}
console.log(max)