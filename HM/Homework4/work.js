const currentDate = new Date();

module.exports = class Work {
   constructor(title, deadLine, description) {
      this.title = title
      this.createDate = (new Date()).toISOString()
      this.deadLine = deadLine
      this.description = description
      this.completed = false
   }
   
   printName() {
      console.log(this.title, this.createDate, this.deadLine, this.description)
   }
}


