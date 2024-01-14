// Create an array of words. Perform the following operations:
//     Sort the array in alphabetical order.
//     Reverse the order of the sorted array.
//     Join the reversed array into a single string, separating words with a space.
//     Print the final string.


// Number of Elements we want to insert
var num = parseInt( prompt("Enter how many Words you want in an Array"));

// Blank Array
var myWords = []

for (var i=0;i<num;i++)
{
    // Inserting one element at a time into Array
    var word =  prompt("Enter the Word")
    myWords.push(word)
}
console.log(myWords)

var sortedWords  = myWords.sort()
console.log(sortedWords)

var reversedArray = myWords.sort().reverse();
console.log(reversedArray)

var JoinedString = reversedArray.join(' ');
console.log(JoinedString)