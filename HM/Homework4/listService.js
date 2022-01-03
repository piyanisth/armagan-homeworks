const fs = require("fs")
const Work = require("./work.js")

module.exports = class listService {
   constructor(dbPath) {
      this.dbPath = dbPath
   }
   
   findAll() {

      const file = fs.readFileSync(this.dbPath)
      const worksArray = JSON.parse(file).works
      const result = []

      for (let i = 0; i < worksArray.length; i++) {
         const work = worksArray[i]
         const object = new Work (work.title, work.deadLine, work.description)
         result.push(object)
      }
      return result
   }

   add(work) {

      const list = this.findAll()
      list.push(work)
      this.saveAll(list)
   }

   markAsCompleted(workTitle) {

      const work = this.findAll()

      for(let i = 0; i < work.length; i++) {
         const workObject = work[i];
         if( workObject.title == workTitle) {
            workObject.completed = true
         }
      }
      this.saveAll(work)
   }

   markAllCompletedWithPrefix(prefix) { //işin title ının başlangıcı 0.8 ile başlayıp başlamadıgını nasıl bulurum

      const work = this.findAll()

      for(let i = 0; i < work.length; i++) {
         const workObject = work[i];
         if(workObject.title.startsWith(prefix)) {
            workObject.completed = true
         }
      }
      this.saveAll(work)
   }
   delete(workTitle) {

      let works = this.findAll()

      works = works.filter(work => work.title != workTitle) // != eşit olmayan demek
      console.log(works)

      this.saveAll(works)

            // works = works.filter(function(work) {
      //    return work !== workToRemove
      // })
      // this.saveAll(works)
   }
   deleteWithPrefix(Prefix) {

      let works = this.findAll()

      for (let i = 0; i < works.length; i++) {
         const workObject = works[i]
         if(workObject.title.startsWith(Prefix)) {
            workObject.deleted = true
         }
      }   

      works = works.filter(workObject => workObject.deleted != true)
   
      this.saveAll(works)
   }

   saveAll(listObject) {

      const result = []
      for (let i = 0; i < listObject.length; i++) {
         const object = listObject[i]
         result.push(object)
      }

      const data = {
         works: listObject
      }

      const dataString = JSON.stringify(data)

      fs.writeFileSync(this.dbPath, dataString)
   }

}
