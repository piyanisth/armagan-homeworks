const express = require("express")    // NPM install express 
const bodyParser = require("body-parser")  //NPM install body-parser

const Work = require("./work.js")
const ListService = require("./listService.js")
const halitinListServisi = new ListService("list.json")

const app = express()

app.use(bodyParser.json())

app.set("view engine", "pug")   // NPM install pug

app.get("/", (req, res) => {
   // res.send("hello3")
   // res.sendFile(__dirname + "/index.html")
   // res.render("work")
})

app.get("/work/all", (req, res) => {
   
   const works = halitinListServisi.findAll()
   console.log(JSON.stringify(works))
   // res.send(works) //tüm işleri listeliyor browserda
   res.render("work", { works: works}) //work.pug ı renderlıyor browserda
})

app.get("/work/:completed",  (req, res) => {

   const completed = req.params.completed
   const works =  halitinListServisi.find(completed) 
   res.send(works)
 })

 //AXİOS

 app.post("/work", (req, res) => { 
   const works = halitinListServisi.add(req.body)  
   res.send(works)
 })
 
 app.delete("/work/:prefix", (req, res) => { 
   halitinListServisi.deleteWithPrefix(req.params.prefix)  
   res.send("ok deleted")
 })

app.listen(3005, () => {
   console.log("Server Listening")
 })
 




function main() {
   const listService = new ListService("list.json")
   const sendMail = new Work("SendMail", '2022-01-01T17:59:47.956Z', "Send a Mail")
   const shopping = new Work("Shopping", '2022-03-01T17:59:47.956Z', "Buy new clothes")
   listService.findAll()
   // listService.add(sendMail)
   // listService.add(shopping)
   // listService.markAsCompleted("SendMail")
   // listService.markAllCompletedWithPrefix("R")
   // listService.delete("SendMail")
   // listService.deleteWithPrefix("Go")
   // console.log("sdasd")
}
main()


// let currentDate = new Date();
// console.log(currentDate);