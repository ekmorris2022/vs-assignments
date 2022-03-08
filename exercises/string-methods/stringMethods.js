// function capilizeAndLowercase(string) {
//     const upper = string.toUpperCase();
//     const lower = string.toLowerCase();
//     return upper + lower;
// }
// console.log(capilizeAndLowercase("Hello"));

// function findMiddleIndex(string) {
//     return Math.floor(string.length / 2);
// }
// console.log(findMiddleIndex("VSchool"));

// function returnFirstHalf(string) {
//     return string.slice(0, findMiddleIndex(string));
// }
// console.log(returnFirstHalf("Hello World"));

// function capilizeAndLowercase(string) {
//     const upper = string.slice(0, findMiddleIndex(string)).toUpperCase();
//     const lower = string.slice(findMiddleIndex(string)).toLowerCase();
//     return upper + lower;
// }
// console.log(capilizeAndLowercase("Hello World"));

function capitalize(string) {
    const splitArray = string.split(" ");
    const newArray = [];
    console.log(splitArray);
    for (let i = 0; i < splitArray.length; i++) {
        const upper = splitArray[i].slice(0, 1).toUpperCase();
        const lower = splitArray[i].slice(1);
        const newString = upper + lower;
        newArray.push(newString);
    }
    console.log(newArray.join(" "))
}

capitalize("hey friends! practice practice practice!");