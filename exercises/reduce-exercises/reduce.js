function total(arr) {
    // your code here
    return arr.reduce((total, number) => total += number)
}

console.log(total([1,2,3])); // 6

function stringConcat(arr) {
    // your code here
    return arr.reduce((string, number) => string += number, "")
}
 
console.log(stringConcat([1,2,3])); // "123"
 
function totalVotes(arr) {
    // your code here
    return arr.reduce((count, voter) => {
        if(voter.voted === true) {
            count++
        }
        return count
    }, 0)
}
 
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

console.log(totalVotes(voters)); // 7

function shoppingSpree(arr) {
    // your code here
    return arr.reduce((total, wish) => total += wish.price, 0)

}
 
let wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
 
console.log(shoppingSpree(wishlist)); // 227005

function flatten(arr) {
    // your code here
    return arr.reduce((flatArray, array) => flatArray.concat(array), [])
}
 
let arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
 
console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

function voterResults(arr) {
    // your code here
    return arr.reduce((obj, voter) => {
        if(voter.age >= 18 && voter.age <= 25) {
            obj.numYoungPeople++;
            if(voter.voted) {
                obj.numYoungVotes++;
            }
        }
        if(voter.age >= 26 && voter.age <= 35) {
            obj.numMidPeople++;
            if(voter.voted) {
                obj.numMidVotes++;
            }
        }
        if(voter.age >= 36 && voter.age <= 55) {
            obj.numOldPeople++;
            if(voter.voted) {
                obj.numOldVotes++;
            }
        }
        return obj;
   }, {numYoungVotes: 0, numYoungPeople: 0, numMidVotes: 0, 
       numMidPeople:0, numOldVotes: 0, numOldPeople: 0});

}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
