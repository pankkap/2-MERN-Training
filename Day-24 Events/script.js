// Types of Event Handling
// What is Event: Event is any interaction on the page like button click, mouse, scroll, window

// Event Hanlding: When some event is trigger, we need to perform some functionality is called Event Handling


// 1. Inline Event Handling
function myTasks()
{
    console.log("Task-1")
    console.log("Task-2")
    console.log("Task-3")
    document.body.style.background = "yellow"
}

// 2. Event Bindling Mechansim (Event Handling)
var btn1 = document.querySelector('button')
btn1.onclick = myTasks1         // Event Bindling
function myTasks1()
{
    document.getElementById('box1').style.background = "seagreen"
}

//3. Event Handling using addEventListener
var divElement = document.querySelector('#box1')
divElement.addEventListener('mouseover', myTask2);
divElement.addEventListener('mouseout', myTask3);

function myTask2()
{
    divElement.style.background = "blue"
}
function myTask3()
{
    divElement.style.background = "skyblue"
}


document.querySelector('input').onchange = function(){
   this.style.background = "yellow"
}

document.querySelector('h1').ondblclick = function(){
    this.textContent = "This is Heading-2"
    this.style.textAlign = "center"
}

document.querySelectorAll('button')[2].onclick = function(){
    divElement.removeEventListener('mouseover', myTask2);
}