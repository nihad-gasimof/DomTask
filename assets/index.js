let title = document.createElement("h1")
title.innerText = "Create Todo List"
let input = document.createElement("input")
input.placeholder = "Enter Todo"
let button = document.createElement("button")
button.innerText = "Add Todo"
let savebtn = document.createElement("button")
savebtn.innerText = "Save Todo"
savebtn.classList.add("save")
let bodytitle = document.createElement("h2")
bodytitle.innerText = "Todo List"
var body = document.querySelector("body")
let edittext;
let checkbox1;
let todo = document.createElement("ul")
button.addEventListener("click", function () {
    if (!input.value) {
        alert("Cannot add empty todo")
        return;
    }
    let li = document.createElement("li")
    let editbtn = document.createElement("button")
    editbtn.innerText = "Edit"
    editbtn.addEventListener("click", function () {
        input.value = li.innerText
        edittext = li
        checkbox1=checkbox
        button.remove()
        body.append(savebtn)

    })
    editbtn.classList.add("edit")
    let removebtn = document.createElement("button")
    removebtn.addEventListener("click", function () {
        todo.removeChild(li)
        todo.removeChild(editbtn)
        todo.removeChild(removebtn)
        localStorage.removeItem("li")
        localStorage.removeItem("editedli")
        localStorage.removeItem("donedLi")


    })
    removebtn.innerText = "Remove"
    removebtn.classList.add("remove")
let checkbox = document.createElement("input")


checkbox.type = "checkbox"
checkbox.classList.add("checkbox")
checkbox.addEventListener("change", function(){
    if(checkbox.checked){
        li.style.textDecoration = "line-through"
        li.style.color = "green"
        localStorage.setItem("donedLi", li.innerText)
    }
    else {
        li.style.textDecoration = "none"
        li.style.color = "black"
    }
})
    li.append(checkbox)
    li.innerText = input.value
    todo.append(li)
    todo.append(editbtn)
    li.append(checkbox)
    todo.append(removebtn)
    input.value = ""
    localStorage.setItem("li", li.innerText)
})
savebtn.addEventListener("click", function () {
    if (!input.value) {
        alert("Cannot add empty todo")
        return;
    }
    else {
        edittext.innerText = input.value
        input.value = ""
        savebtn.remove()
        localStorage.setItem("editedli", edittext.innerText)
        edittext.append(checkbox1)
        body.append(button)
    }
})
document.querySelector("body").append(title)
document.querySelector("body").append(input)
document.querySelector("body").append(button)
document.querySelector("body").append(bodytitle)
document.querySelector("body").append(todo)
