// DOM : Document Object Model
// DOM Methods to access the Node
// 1. Reference of Node `

var h1First = document.getElementsByTagName('h1')[0]
var h1Footer = document.getElementsByTagName('h1')[1]
h1First.textContent = "<u>This is my Heading</u>"
h1Footer.innerHTML = "<u>This session is on DOM</u>"
h1First.style.color = "red"
h1First.style.textAlign = "center"
h1First.style.textDecoration = "underline"

var divTag = document.getElementById('container')
divTag.style.border = "2px solid red"

var classElemts = document.getElementsByClassName('formInput')
for(var i=0; i<classElemts.length;i++)
{
    classElemts[i].style.backgroundColor = 'skyblue'
}

var btn = document.querySelectorAll('.formInput');
for(var i=0; i<btn.length;i++)
{
    btn[i].style.backgroundColor = 'orange'
}

