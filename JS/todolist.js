const todoForm = document.querySelector("#todoList-input");
const todoInput = document.querySelector("#todoList-input input");
const todoList = document.querySelector("#todoList");


let todos = [];

function handleSaveTodos(todo) {
    const stringTodos = JSON.stringify(todos);
    localStorage.setItem("todos",stringTodos);
}

function handleTodoInput(event) {
    event.preventDefault();
    const todo = {
        text: todoInput.value,
        id: Date.now()};
    todoInput.value = "";
    todos.push(todo);
    handleSaveTodos(todo);
    createnNewtodo(todo);
}


function createnNewtodo(todo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "삭제";
    deleteButton.addEventListener("click", deleteNewtodo);
    span.innerText = todo.text;
    li.id = todo.id;
    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}

function deleteNewtodo(event) {
    const li = event.target.parentElement;
    todos = todos.filter(todoid => todoid.id !== parseInt(li.id));    
    li.remove();
    handleSaveTodos();
}


todoForm.addEventListener("submit",handleTodoInput);



const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null) {
    const arrayTodos = JSON.parse(savedTodos);
    arrayTodos.forEach(createnNewtodo);
    todos = arrayTodos;
}




