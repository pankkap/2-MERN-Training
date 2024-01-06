var myFullName = "Pankaj Kumar Kapoor"
// length: to calculate length of a String
console.log(myFullName.length)
// Function to check first character of a String
console.log(myFullName.charAt(0))

// String is considered as Character Array
console.log(myFullName[0])

// to check last character of a String
console.log(myFullName.charAt(myFullName.length-2))

// slice: it is used to cut string by location/position
console.log(myFullName.slice(7))

// split:  Is is used to create multiple substring (create an array of strings)
var myNames = myFullName.split(" ")
console.log(myNames[1])
console.log(myFullName.slice(7,13))
console.log(myFullName.substring(7,13))
console.log(myFullName.toUpperCase())
console.log(myFullName.toLowerCase())
// console.log(string.function())

// Strings are not mutable - "Not manipluatble"
var fname = "     Kavita     "
var lname = "Bhalerao"
console.log(fname+lname)
console.log(fname+" " + lname)
console.log(fname.concat(lname))
console.log(fname.concat(" ", lname))

console.log(fname.trim().concat(" ", lname))
var newText = fname.trim()
console.log(newText)
console.log(fname)

