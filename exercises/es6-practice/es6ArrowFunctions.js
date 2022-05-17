// Task 1

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    })
}

// Task 2

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => {
        return person.friendly
    })
}

// Task 3

doMathSum = (a, b) => {
    return a + b
}

var produceProduct = (a, b) => {
    return a * b
}

// Task 4

printString = (firstName="Jane", lastName="Doe", age=100) => {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
}

// Task 5

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
function filterForDogs(arr) {
    return arr.filter(animal => animal.type === "dog")
}
 
console.log(filterForDogs(animals))

// Template Literals

message = (location, name) => {
    return `Hi ${name}!\n\nWelcome to ${location}.\n\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
}

console.log(message('Florida', 'Ken'))

// Hi Janice!

// Welcome to Hawaii.

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.