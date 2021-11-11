const Person = require("./person.js")
const Club = require("./club.js")
const Game = require("./game.js")
const Chalk = require("chalk")
const Database = require("./database")

const halit = new Person("Halit", 25, "male")
const selin = new Person("Selin", 30,"female")
const ömer = new Person("Ömer", 35, "male")


const galatasaray = new Club("Galatasaray")
const fenerbahce = new Club("Fenerbahçe")


const baseball = new Game("Baseball")
const football = new Game("Football")
const parasailing = new Game("Parasailing")


galatasaray.registerGame(baseball)
galatasaray.registerGame(football)
fenerbahce.registerGame(parasailing)
fenerbahce.registerGame(football) // Çalışmayacak


halit.joinClub(galatasaray)
halit.joinClub(fenerbahce)
selin.joinClub(fenerbahce)
ömer.joinClub(galatasaray)
/*
galatasaray.printGameNames()
fenerbahce.printGameNames()
fenerbahce.printMemberNames()
galatasaray.printMemberNames()
*/

halit.printGames()
selin.printGames()
ömer.printGames()

galatasaray.printMemberNames()
fenerbahce.printMemberNames()
console.log(Chalk.yellow("hi there"))

Database.save("club.json", galatasaray)
galatasarayFromFile = Database.load("club.json")

Database.save("person.json", ömer)
ömerFromFile = Database.load("person.json")

Database.save("game.json", football)
footballFromFile = Database.load("game.json")

console.log(galatasarayFromFile)
console.log(ömerFromFile)
console.log(footballFromFile)
// Database.save("club.json", galatasaray)     

// const loadedFile = Database.load("club.json")
// console.log(loadedFile.name)


