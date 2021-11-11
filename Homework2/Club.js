const Chalk = require("chalk")

module.exports = class Club {
          
    constructor(name) {
        this.name = name
        this.memberNames = []
        this.games = []

    }
    registerGame(game) {
        if (!game.club) {              // ! not 
            this.games.push(game)
            game.club = this.name
        }
        else{
            console.log(game.name + " zaten " + game.club.name + " klübüne kayıtlı o yüzden " + this.name + " klübüne kaydedilemez")
        }
        
    }
    printMemberNames() {
        console.log(Chalk.blue.underline.bold(this.name + " memberNames:"))
        for(const memberName of this.memberNames){
            console.log(memberName)
        }
    }
    printGameNames() {
        console.log(this.name + " games:")
        for(const game of this.games){
            game.printName()
        }
    }
    printName() {
        console.log(this.name)
    }  
}