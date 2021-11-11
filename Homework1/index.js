  //An example consisting of 3 classes and 3 interactions
  Person = class {
    constructor(name, age, gender){     
        this.name = name
        this.age = age
        this.gender = gender          //property ler objelerin özellikleridir(datalardır)
        this.clubs = []
                
    }
    
     joinClub(club) {         //interaction veya methods bunlar fonksiyondur 
       this.clubs.push(club)
       club.members.push(this)
    }
    
    printName() {
        console.log(this.name, this.age, this.gender)
    }
    printGames(){
        console.log("Games of: " + this.name)
        for(const club of this.clubs){
            for(const game of club.games){
                game.printName()
            }
        }
    }
  
}


Club = class {
    constructor(name) {
        this.name = name
        this.members = []
        this.games = []

    }
    registerGame(game) {
        if (!game.club) {              // ! not 
            this.games.push(game)
            game.club = this
        }
        else{
            console.log(game.name + " zaten " + game.club.name + " klübüne kayıtlı o yüzden " + this.name + " klübüne kaydedilemez")
        }
       
    }
    printMemberNames() {
        console.log(this.name + " members:")
        for(const member of this.members){
            member.printName()
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

Game = class {
    constructor(name) {
        this.name = name
        this.club = undefined
    }
     printName() {
        console.log(this.name)
    }
}
halit = new Person("Halit", 25, "male")
selin = new Person("Selin", 30,"female")
ömer = new Person("Ömer", 35, "male")


galatasaray = new Club("Galatasaray")
fenerbahce = new Club("Fenerbahçe")


baseball = new Game("Baseball")
football = new Game("Football")
parasailing = new Game("Parasailing")


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
