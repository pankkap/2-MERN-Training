// Filter all even Numbers in the array
var array = [45,7,12,34,56,1,34,78,32,11,23,12,43,89,3] 

var evenNoArray = []

for(var i of array)
{
   if(i % 2 ==0)
    evenNoArray.push(i)
}

console.log(evenNoArray)