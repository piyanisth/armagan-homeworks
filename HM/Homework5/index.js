const express = require('express')
const bodyParser = require('body-parser')

const workRouter = require('./routes/work')


require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/work', workRouter)

app.get('/', (_req, res) => {
  res.render('index')
})

app.listen(3005, () => {
  console.log('Server listening')
})


//KİŞİ OLUŞTUR-SİL;

// axios.post("/person", {name:"Halit", age:25}).then(console.log)
// axios.post("http://localhost:3000/person/", {name:"Kemal", age:15}).then(console.log)     //Mongodb
// axios.delete("http://localhost:3000/person/61ba059109f800202a32bb71").then(console.log)   //Mongodb

// MEETUP OLUŞTUR-SİL;

// axios.post("http://localhost:3000/meetup/", {name:"Bootcamp", location:"Ankara"}).then(console.log)
// axios.delete("http://localhost:3000/meetup/61bce96c3e26532fa3cc6bd6").then(console.log)

// MEETUP'A KİŞİ EKLE-SİL ;

// axios.post("http://localhost:3000/person/61ba059109f800202a32bb71/meetups", {meetup: "61bce71e3e26532fa3cc6bc2"}).then(console.log)
// ???

// 18 YAŞ ÜSTÜNDEKİLERİ BUL ;

// axios.get("http://localhost:3000/person/61ba059109f800202a32bb71/peers-over-18").then(console.log)