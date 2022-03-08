const form = document.addItem;
const list = document.getElementById("list");

form.addEventListener("submit", (e) => {
    e.preventDefault();     

    const li = document.createElement("li");
    const div = document.createElement("div");
    const edit = document.createElement("button");
    const x = document.createElement("button");
    const hr = document.querySelector("ul > hr");

    li.style.textAlign = "center"
    list.insertBefore(li, hr);
    li.appendChild(div);

    edit.setAttribute("name", "editButton");
    edit.textContent = "edit";
    edit.style.marginRight = "1px";
    li.appendChild(edit);
    
    x.setAttribute("name", "deleteButton");
    x.textContent = "X";
    x.style.marginLeft = "1px";
    li.appendChild(x);

    div.style.textAlign.center;
    div.textContent = form.title.value;
    form.title.value = "";
})

const ul  = document.querySelector("ul");

ul.addEventListener("click", (event) => {
    if(event.target.name === "deleteButton") {
        event.target.parentElement.remove();
    }

    if(event.target.name === "editButton") {
        const div = event.target.parentElement.querySelector("div");
        const input = document.createElement("input");
        input.setAttribute("name", "edit");
        input.value = div.textContent;
        div.parentElement.replaceChild(input, div);
        const saveButton = document.createElement("button");
        saveButton.style.marginLeft = "2px";
        saveButton.style.marginRight = "1px";
        saveButton.textContent = "save";
        const editButton = event.target;
        editButton.parentElement.replaceChild(saveButton, editButton);
        
        saveButton.addEventListener("click", () => {
            div.textContent = input.value;
            input.parentElement.replaceChild(div, input);
            saveButton.parentElement.replaceChild(editButton, saveButton);
        })
    }
})

