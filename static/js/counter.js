document.addEventListener("DOMContentLoaded", function(){
    
    const count = document.getElementById("count");
    const increment = document.getElementById("increment");
    const decrement = document.getElementById("decrement");
    const reset = document.getElementById("reset")
    
    let counter = 0;
    count.textContent = counter

    increment.addEventListener("click", function(){
        counter++
        count.textContent = counter
    });

    decrement.addEventListener("click", function(){
        counter--
        count.textContent = counter
    });

    reset.addEventListener("click", function(){
        counter = 0
        count.textContent = counter
    });

    const TodoInput = document.getElementById("todoInput");
    const AddBtn = document.getElementById("addBtn");
    const TodoList = document.getElementById("todoList");

    // Add New Todo
    AddBtn.addEventListener("click", addTodo);
    TodoInput.addEventListener("keypress", function(e){
        if(e.key === 'Enter') addTodo();
    });

    // Add Todo Function
    function addTodo(){
        const text = TodoInput.value.trim();

        if(text === '') return;

        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span class="todo-text">${text}</span>
            <button class="delete-btn">Delete</button>
        `;

        // Toggle Complete
        li.querySelector('.todo-text').addEventListener("click", function(){
            li.classList.toggle("completed");
        });

        // Delete Button
        li.querySelector('.delete-btn').addEventListener("click", function(){
            li.remove();
        });

        TodoList.appendChild(li)
        TodoInput.value = ''
    };

    



});