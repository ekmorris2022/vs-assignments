var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
fruit.shift();

fruit.push(fruit.indexOf("orange"));

vegetables.push(vegetables.length);

const food = fruit.concat(vegetables);

food.splice(4, 2);

food.reverse();

stringFood = food.join();

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log(stringFood);