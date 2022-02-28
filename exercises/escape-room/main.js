const readline = require("readline-sync");

const name = readline.question("What is your name? ");

let count = 0;
let choice;
let foundKey = false;

while(true) {
    choice = readline.question("Select: 1 - Put your hand in hole, " + 
                                       "2 - Find the key, " +
                                       "3 - Open the door. " );
    if(choice === "1") {
        console.log("Sorry " + name + " ,but you just died.")
        break;
    } else if(choice === "2") {
        foundKey = true;
    } else if(choice === "3") {
        if(foundKey) {
            console.log("Hooray!!! " + name + ", you have escaped!")
            break;
        } else {
            console.log("You have to find the key before you can open the door, " + name + ".")
        }
    } else {
        console.log(name + ", you have made and invalid choice.")
    } 
}