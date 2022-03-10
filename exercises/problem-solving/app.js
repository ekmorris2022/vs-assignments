function largest(array) {
    let maximum = Number.MIN_VALUE;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > maximum) { maximum = array[i] }
    }
    return maximum;
}

console.log(largest([3, 5, 2, 8, 1]));

function lettersWithStrings(array, character) {
    const includesArray = [];
    array.forEach(word => {
        if(word.includes(character)) {
            includesArray.push(word);
        }        
    }); 
    return includesArray;
}

console.log(lettersWithStrings(["#3", "$$$", "c%4!", "Hey!"], "!"));


function isDivisible(num1, num2) {
    return num1 % num2 === 0;
}

console.log(isDivisible(15, 4))