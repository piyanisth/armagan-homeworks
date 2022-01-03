const Person = require("./person.js")
const PeopleService = require("./peopleService.js")

async function main() {
  const peopleService = new PeopleService("people.json")
  // const salim = new Person ("Salim", 24, "male")


  // peopleService.add(salim)
  peopleService.updateAgeOfPerson("Salim", 300, "Hasan")
  

  const kisiler = peopleService.findAll()
  // for(let i =0; i < kisiler.length; i++){
  //   kisiler[i].age = 33
  //   kisiler[i].name = "Süleyman"
  //   kisiler[i].printName()
  // }
  // kisiler[1].name ="Ali"

  // peopleService.saveAll(kisiler)

  printName(kisiler)

  console.log("askdkjas")
  



}

main()




