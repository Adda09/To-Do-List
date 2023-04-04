'use strict';
let inp = document.getElementById("input");
let btn_add = document.querySelector(".add")
let divTasks = document.querySelector(".tasks")
let arr = [];






btn_add.onclick=() =>{
    if(inp.value != ""){
        var task = document.createElement('div')
        var span = document.createElement('span')
        span.className ="del";
        span.appendChild(document.createTextNode("X"))
    }

    task.innerText = inp.value
    task.classList.add("task")
    span.classList.add("span")

    divTasks.appendChild(task)
    divTasks.appendChild(span)
    task.appendChild(span)
    arr.push(inp.value)
    inp.value= "";
    

span.addEventListener("click",(e) =>{
        e.target.parentElement.remove()
    
});
}

