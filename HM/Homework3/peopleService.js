const fs = require("fs")
const Person = require("./person")

module.exports = class PeopleService {
   constructor(dbPath) {
      this.dbPath = dbPath
   }
   
   // CRUD Create - Read - Update - Delete 
   add(person) {

      const people = this.findAll()
      people.push(person)

      this.saveAll(people)

   }
      // add function'ı parametre olarak bir kişi alacak
      // Dosyadaki tüm kişileri object olarak okuyacak-findAll
      // Bu kişilere parametre olarak aldığı kişiyi ekleyecek-push
      // Tüm kişileri dosyaya yazacak--- this.saveAll

   
   findAll(){        

      const file = fs.readFileSync(this.dbPath)

      const peopleArray = JSON.parse(file).people
      const result = []
      for(let i = 0; i < peopleArray.length; i++){
         const person = peopleArray[i];
         const personobject = new Person(person.name, person.age, person.gender)
         result.push(personobject)
      }
      return result
   }

   saveAll(peopleObjects) {

      const result = []
      for(let i = 0; i < peopleObjects.length; i++){
         const personObject = peopleObjects[i];
         const person = { "name": personObject.name , "age": personObject.age, "gender": personObject.gender}
         result.push(person)
      }
      const data = {
         people: result
      }
      
      const dataString = JSON.stringify(data)

      fs.writeFileSync(this.dbPath, dataString)
      
   }
 
   updateAgeOfPerson(name, age, newName) {

      const people = this.findAll()

      
      for(let i = 0; i < people.length; i++) {
         const personObject = people[i];
         if (personObject.name == name) {
            personObject.name = newName
            personObject.age = age
         }
 
         this.saveAll(people)

      }


      
      // update function'ı parametre olarak bir isim ve bir yaş alacak
      // Dosyadaki tüm kişileri object olarak okuyacak---this.findAll()
      // Bu kişilerden doğru kişiyi bulacak (parametrede verilen isim ile eşleşeni)
      // Bulma işlemi için for ve if kullanılacak
      // Bulduğu bu kişinin yaşını parametre olarak verilen yaş ile değiştirecek
      // Tüm kişileri dosyaya yazacak
   }

   async del(PersonId) {
      const allPersons = await this.findAll()
      

   }
   
   
      
      



}











