const readline = require("readline-sync");

const num1 = parseInt(readline.question("Please enter your first number: "));
const num2 = parseInt(readline.question("Please enter your second number: "));
const operator = readline.question("Please enter the operation to perform: add, sub, mul, div  ");

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

if ( operator === "add") {
    console.log(add(num1, num2));
} else if ( operator === "sub") {
    console.log(sub(num1, num2));
} else if ( operator === "mul") {
    console.log(mul(num1, num2));
} else if ( operator === "div") {
    console.log(div(num1, num2));
} else {
    console.log("You have entered an invalid operator.")
}