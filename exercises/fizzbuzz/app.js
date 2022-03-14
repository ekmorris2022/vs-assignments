const readline = require("readline-sync");
const number = readline.questionInt("Enter a number: ");

let countFizz = 0;
let countBuzz = 0;
let countFizzBuzz = 0;

const fizzBuzz = number => {
    for (let i = 1; i <= number; i++) {
        let result = i;

        if(i % 3 === 0 && i % 5 === 0) {
            countFizzBuzz++;
            result = "fizzBuzz";
        } else if(i % 3 === 0) {
            countFizz++;
            result = "fizz";
        } else if(i % 5 === 0) {
            countBuzz++;
            result = "buzz";
        }
        console.log(result);
    }
    
    console.log(fizzBuzzCount(countFizz, countBuzz, countFizzBuzz));
}

const fizzBuzzCount = (numberOfFizz, numberOfBuzz, numberOfFizzBuzz) => {
    const count = {
        fizzbuzz: numberOfFizzBuzz,
        fizz: numberOfFizz,
        buzz: numberOfBuzz
    };

    return count;
}

fizzBuzz(number);