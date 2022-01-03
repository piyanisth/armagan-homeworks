module.exports = class Person{
age;
name;
    constructor(name, age, gender){     
        this.name = name
        this.age = age
        this.gender = gender          //property ler objelerin özellikleridir(datalardır)
        this.clubs = []
                
    }
    
    joinClub(club) {         //interaction veya methods bunlar fonksiyondur 
        this.clubs.push(club)
        club.memberNames.push(this.name)
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