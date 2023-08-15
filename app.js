
function todoApp() {
    var todoList = document.getElementById('todoList');
    var todoInput = document.getElementById('todoInput').value;
    if(document.getElementById('todoInput').value === '') {
        alert('Please Write SomeThing!');
    }
    else {
        var todoItems = document.createElement("li");
todoItems.setAttribute('class','list-group-item');

var todoTexttag = document.createElement('span');
var todoText = document.createTextNode(todoInput);
todoTexttag.appendChild(todoText);

var todoBtn1 = document.createElement('button');
todoBtn1.setAttribute('class','btn btn-dark list-btn mx-2 text-white');
todoBtn1.setAttribute('onclick','todoDone(this)');
var todoBtnText1 = document.createElement('i');
todoBtnText1.setAttribute('class','fa-solid fa-square-check text-success');
todoBtn1.appendChild(todoBtnText1);

var todoBtn = document.createElement('button');
todoBtn.setAttribute('class','btn btn-dark list-btn text-white');
todoBtn.setAttribute('onclick','todoDelete(this)');
var todoBtnText = document.createElement('i');
todoBtnText.setAttribute('class','fa-solid fa-trash text-danger');
todoBtn.appendChild(todoBtnText);

todoItems.appendChild(todoTexttag);
todoItems.appendChild(todoBtn1);
todoItems.appendChild(todoBtn);

todoList.appendChild(todoItems);
document.getElementById('todoInput').value = ''
saveData()
    }
}

function todoDelete(e) {
    
    e.parentNode.remove();
    saveData()
}

function todoDone(e) {
    
  e.previousSibling.setAttribute('class','text-decoration-line-through');
  saveData()
}

function saveData(){
    localStorage.setItem("data", todoList.innerHTML);

}
function showData(){
    todoList.innerHTML = localStorage.getItem("data");
}
showData();