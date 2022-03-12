const readline = require("readline-sync");
const playerName = readline.question("Halt, who dares to enter these troubled lands? Tell me your name: ");

let gameOver = false;
let escape = false;
let weapon = {};
const enemies = [];

function Player(playerName) {
    this.name = playerName;
    this.hp = 100;
    this.inventory = [];
}

function Weapon(type, range, min, max) {
    this.type = type;
    this.range = range;
    this.damageMin = min;
    this.damageMax = max;
}

function Enemy(type, hp, min, max) {
    this.type = type;
    this.hp = hp;
    this.damageMin = min;
    this.damageMax = max;
} 

function walk() {
    console.log("\nWalking ...");

    while(!isAttack()) {
        console.log("\nStill walking ...");
    }

    enemies.push(new Enemy("bandit", 50, 5, 10));
    enemies.push(new Enemy("wolf", 70, 10, 20));
    enemies.push(new Enemy("dragon", 150, 20, 50));

    let enemy = getRandomEnemy();

    console.log(enemy);

    let fightOrFlight = readline.question(`\nA ${enemy.type} is coming! Enter: 'f' to fight or 'r' to run. `,
                                         {limit: ['f', 'r']});

    if(fightOrFlight === 'f') {
        let weapon = chooseWeapon();
        while(hero.hp > 0 && enemy.hp > 0) { heroAttack(weapon, hero, enemy); };        
    }

    if(fightOrFlight ==='r') {
        run(enemy);
        enemy = {}
    }

    if(hero.hp === 0) {
        console.log("\nI see the rumors were not true.");
        gameOver();
    }
    return;
}

// The odds of being attacked are 1 in 4.
function isAttack() {
    if(Math.floor((Math.random() * 4) + 1) === 4) { return true; }
    return false;
}

function getRandomEnemy() {
    return enemies[Math.floor(Math.random() * enemies.length)];
}

function chooseWeapon() {
    console.log("\nHere is your inventory of weapons: \n");
    getInventory();
    let choice = readline.question("\nType the name of the weapon you want to use: ");
    return hero.inventory.filter(function(Weapon){return Weapon.type === choice.toLowerCase();} );
}

function calculateDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function heroAttack(weapon, hero, enemy) {
    enemy.hp -= calculateDamage(weapon.damageMin, weapon.damageMax);

    if(enemy.hp > 0) { 
        enemyAttack(escape, hero, enemy);
    } else {
        getWinner(hero, enemy);
    }
    return;
}

function run(enemy) {
    if(Math.random() >= 0.5) {escape = true;};

    enemyAttack(escape, hero, enemy);
    return;
}

function enemyAttack(escape, hero, enemy) {
    hero.hp = hero.hp - calculateDamage(enemy.damageMin, enemy.damageMax);

    if(escape) {
        if(hero.hp < 1) {
            hero.hp = 1;
        }

        return console.log("\nWhew! That was close, but you escaped.");
    }

    if(hero.hp > 0) { 
        heroAttack(weapon, hero, enemy);
    } else {
        getWinner(hero, enemy);
    }
    return;
}

function getWinner(hero, enemy) {
    if (hero.hp > 0) {
        console.log(`\nYou have defeated the ${enemy.type}! Your reputation is well deserved.`);

    } else {
        console.log(`\nYou have been defeated by the ${enemy.type}. The rumors were not true at all.`);
        endGame();
    }
    return;
}

function getInventory() {
    return hero.inventory.forEach(item => console.log(item.type));
}

function printStatus() {
    console.log(`Name: ${hero.name}, HP: ${hero.hp}`);
    console.log(`Inventory:`);
    getInventory();
    return;
}

function endGame() {
    console.log("\nGame Over.");
    gameOver = true;
    return;
}

const hero = new Player(playerName);
const weaponChoice = readline.question("\nBefore you head out you must choose a weapon. Select: 's' for sword, 'b' for" +
                                 " bow, or 'm' for mace: ",{limit: ['s', 'b', 'm']});

if(weaponChoice === "s") {
    weapon = new Weapon("sword", 5, 2, 20);
}
if(weaponChoice === "b") {
    weapon = new Weapon("bow", 100, 10, 70);
}
if(weaponChoice === "m") {
    weapon = new Weapon("mace", 3, 7, 30);
}

hero.inventory.push(weapon);

while(!gameOver) {
    let action = readline.question("\nTo continue your adventure, press: 'w' to walk, " + 
                               "'Print' or 'p' to print player information, or 'q' to quit. ",
                               {limit: ['w', 'Print', 'p', 'q']});

    if(action === 'w') {
        walk();
    } 
    if(action === 'p' ||  action === "Print") {
        printStatus();
    }
    if(action === 'q') {
        endGame();
    } 
}

process.exit(1);