// Selectors|References
var todoInput = document.querySelector(".todo-input")
var btn = document.querySelector("button")
var todolist = document.querySelector('.todo-list')

// Event Handlers
btn.onclick = create;
todolist.onclick = deleteCheck;

// Functions

function create(e){
  if(todoInput.value != "")
  {
    e.preventDefault()
 
// Create New Div
var newDiv = document.createElement('div')
newDiv.classList.add('todo')

// New Li
var newLi = document.createElement('li')  
newLi.classList.add('todo-item');
newLi.innerHTML = todoInput.value
newDiv.appendChild(newLi)

// Thick Button
var newCmptbtn = document.createElement('button')  
newCmptbtn.classList.add("cmplt-btn")
newCmptbtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
newDiv.appendChild(newCmptbtn)

// Delete Button
var deletetbtn = document.createElement('button')  
deletetbtn.classList.add("delete-btn")
deletetbtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
newDiv.appendChild(deletetbtn)

todolist.appendChild(newDiv)
todoInput.value = ""
  }
  else
  {
    alert("Input can not be Blank")
  }
}




function deleteCheck(event){
  var item = event.target;
  // console.log(item)

  if(item.classList[0]=="delete-btn")
  {
    // console.log("Delete Button pressed")
    var parent = item.parentElement
    // console.log(parent)
    parent.remove()
  }
  else
  {
    var parent = item.parentElement
    parent.classList.toggle('completed')

  }
}