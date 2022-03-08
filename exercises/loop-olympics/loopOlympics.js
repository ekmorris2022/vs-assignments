// Preliminaries

// // Print 0 - 9
// for (let i = 0; i <= 9; i++) {
//     console.log(i);
// }

// // Print 9 - 0
// for(let i = 9; i >= 0; i--) {
//     console.log(i);
// }

// // Print fruits
// const fruit = ["banana", "orange", "apple", "kiwi"];

// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
// }


// // Bronze Medal
// // Push 0 - 9 to array
// let myArray = [];

// for (let i = 0; i <= 9; i++) {
//     myArray.push(i);
// }
// console.log(myArray);

// // Print even numbers 0 - 100
// for (let i = 2; i <= 100; i += 2) {
//     console.log(i);
// }

// // Push every other fruit to array
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// let fruitArray = [];

// for (let i = 0; i < fruit.length; i += 2) {
//     fruitArray.push(fruit[i]);
// }
// console.log(fruitArray);


// Silver Medal

// const peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ];

//   // Print names of people in array
//   for (let i = 0; i < peopleArray.length; i++) {
//       console.log(peopleArray[i].name);
//   }

//  let names = [];
//  let occupations = [];

// for(let i = 0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i].name);
//     occupations.push(peopleArray[i].occupation);
// }
// console.log(names, occupations);

// Push every other name to names starting with Harrison Ford
// Push every other occupation to occupations starting with Singer
// for (let i = 0; i < peopleArray.length; i += 2) {
//     names.push(peopleArray[i].name);
// }

// for (let i = 1; i < peopleArray.length; i += 2) {
//     occupations.push(peopleArray[i].occupation);
// }
// console.log(names, occupations);


// Gold Medal
//First grid

// const outerArray = [];

// for(let i = 0; i < 3; i++) {
//     const innerArray = [];
//     for (let j = 0; j < 3; j++){
//         innerArray.push(0);
//     }
//     outerArray.push(innerArray);
// }
// console.log(outerArray);

// Second grid
// const outerArray = [];

// for (let i = 0; i < 3; i++) {
//     const innerArray = [];
//     for (let j = 0; j < 3; j++) {
//         innerArray.push(i);
//     }
//     outerArray.push(innerArray);
// }
// console.log(outerArray);

// Third grid
let outerArray = [];

for (let i = 0; i < 3; i++) {
    const innerArray = [];
    for (let j = 0; j < 3; j++) {
        innerArray.push(j);
    }
    outerArray.push(innerArray);
}
console.log(outerArray);

// Change all grid values to x
for (let i = 0; i < outerArray.length; i++) {
    for (let j = 0; j < outerArray[i].length; j++) {
        outerArray[i][j] = "x";
    }
}
console.log(outerArray);