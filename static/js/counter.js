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

});