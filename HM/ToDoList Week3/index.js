const Work = require("./work.js")
const ListService = require("./listService.js")

function main() {
   const listService = new ListService("list.json")
   const sendMail = new Work("SendMail", '2022-01-01T17:59:47.956Z', "Send a Mail")
   const shopping = new Work("Shopping", '2022-03-01T17:59:47.956Z', "Buy new clothes")
   const work = ListService.findAll()
   // listService.add(sendMail)
   // listService.add(shopping)
   // listService.markAsCompleted("SendMail")
   // listService.markAllCompletedWithPrefix("R")
   // listService.delete("SendMail")

   listService.deleteWithPrefix("Go")

   console.log("sdasd")

}
main()



let currentDate = new Date();
console.log(currentDate);