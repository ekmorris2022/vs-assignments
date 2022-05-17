const levels = ["Dead", "Small", "Big", "Powered Up"]


class Player {
    constructor(name, totalCoins, status, hasStar){
        this.name = name
        this.totalCoins = totalCoins
        this.status =  status
        this.hasStar = hasStar
    }

    setNamename(namePicked){
        this.name = namePicked
    }

    gotHit(){
        
        let check =  levels.findIndex(level => level === this.status)

        
        this.status = levels[check === 0 ? 0 : --check]
    }

    gotPowerup(){
        
        let check =  levels.findIndex((level) => level === this.status)

        
        this.status = levels[check === 3 ? 3 : ++check]
    }

    addCoin(){
        this.totalCoins++
    }

    print(){
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\nStar: ${this.hasStar}\n\n`)
    }
}

const mario = new Player("Mario", 0, "Small", false)

random = () => {
    Math.floor(Math.random() * 3) === 0 ? mario.gotHit() : Math.floor(Math.random() * 3) === 1 ? 
    mario.gotPowerup() : mario.addCoin()

    mario.print()

    if(mario.status === "Dead") stopRandom()
}

function stopRandom() {
    clearInterval(intervalID)
}

let intervalID = setInterval(random, 1000) 
