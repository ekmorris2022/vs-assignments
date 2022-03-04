
const square = document.getElementById("flex-container");

function makeBlue() {
    square.style.backgroundColor = "blue";
}

function makeRed() {
    square.style.backgroundColor = "red";
}

function makeYellow() {
    square.style.backgroundColor = "yellow";
}

function makeGreen() {
    square.style.backgroundColor = "green";
}

function makeOrange() {
    square.style.backgroundColor = "orange";
}

square.addEventListener("mouseover", makeBlue);
square.addEventListener("mousedown", makeRed);
square.addEventListener("mouseup", makeYellow);
square.addEventListener("dblclick", makeGreen);
window.addEventListener("scroll", makeOrange);

window.addEventListener("keydown", (event) => {
    let name = event.key;
    console.log(event.key);
    switch(name) {
        case "b": 
            makeBlue();
            break;
        case "g": 
            makeGreen();
            break;
        case "o": 
            makeOrange();
            break;
        case "r": 
            makeRed();
            break;
        case "y": 
            makeYellow();
            break;
        default:
            console.log("Invalid color.")
    };
});