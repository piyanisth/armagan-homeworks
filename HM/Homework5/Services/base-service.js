module.exports = class Service {
   async findAll() {
     return this.model.find()
   }
 
   async add(work) {
     return this.model.create(work)
   }
 
   async  delete(workId) {
     return this.model.remove({_id: workId})
   }

   async update(title, description) {
     return this.model.update(title, description)
   }

  //  async  delete(Prefix) {          //??
  //   return this.model.remove(Prefix)
  // }

   async  markAsCompleted(workTitle) {
      return this.model.mark(workTitle)   // model.mark ??
   }
   
   async  markAllCompletedWithPrefix(Prefix) {
      return this.model.mark(Prefix)            // model.mark ??
   }

   async  deleteWithPrefix(Prefix) {
      return this.model.remove(Prefix)            
   }
    
 }
 