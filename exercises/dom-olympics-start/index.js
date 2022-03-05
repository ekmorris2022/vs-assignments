const h1 = document.createElement("h1");
h1.textContent= "JavaScript made this!";
document.getElementById("header").appendChild(h1);
h1.className = "header";

const subTitle = document.createElement("subTitle");
subTitle.innerHTML= '<span class="name">Edward</span> wrote the JavaScript';
document.getElementById("header").appendChild(subTitle);
subTitle.className = "header";

const messages = document.getElementsByClassName("message");

messages[0].textContent = "You are awesome!";
messages[1].textContent = "Thank you.";
messages[2].textContent = "You are welcome.";
messages[3].textContent = "You are great!"

const clearMessages = document.getElementById("clear-button");
clearMessages.addEventListener("click", () => {
    for (let i = 0; i < messages.length; i++) {
        messages[i].textContent = "";
    }
});

let select = document.querySelector("#theme-drop-down");

select.addEventListener("change", (event) => {
    let lefts = document.querySelectorAll(".left");
    let rights = document.querySelectorAll(".right");

    for (let el of lefts) {
        el.classList.toggle("theme-two");
    }

    for (let el of rights) {
        el.classList.toggle("theme-two")
    }
});

const send = document.querySelector("form");
const parent = document.querySelector(".messages");

send.addEventListener("submit", (e) => {

    e.preventDefault();

    const numberOfChildren = parent.childElementCount;
    
    const div = document.createElement("div");
    
    div.textContent = document.getElementById("input").value;

    div.classList.add("message");

    if(numberOfChildren % 2 === 0) {
        div.classList.add("left");
    } else { 
        div.classList.add("right");
    };

    parent.appendChild(div);
    document.getElementById("input").value = "";
});




