const Chalk = require("chalk")

module.exports = class Game {

    constructor(name) {
        this.name = name
        this.club = undefined
    }
    printName() {
        console.log(Chalk.bgRed(this.name))
    }
}
