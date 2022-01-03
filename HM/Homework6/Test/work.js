const test = require("ava")
// import test from 'ava'
const request = require("supertest")
// import request from 'supertest'
const app = require("../app")
// import app from "../app"

test("Create a new work", async t => {
   t.plan(3)     // bu test fonksiyonu altında kaç tane assertion(t.is) planladığı gösteriyor.
   const worktoCreate = {
      title: "Markete git",
      description: "Et ve süt alınacak"
   }

   const res = await request(app)
    .post("/work")
    .send(worktoCreate)

    //checking for server response status seccess
   
   t.is(res.status, 200)

   //comparing the created work's data

   t.is(res.body.title, worktoCreate.title)
   t.is(res.body.description, worktoCreate.description)
})

test('Fetch a work', async t => {
   t.plan(3)    
   const workToCreate = {
      title: "Havale",
      description: "Para transfer et"
   }
 
   // first create a work
   const HavaleCreated = (await request(app)
     .post('/work')
     .send(workToCreate)).body
 
   // fetch the work we just created
   const fetchRes = await request(app).get(`/work/${HavaleCreated._id}`)  // dolarlı süslü parentez ile değişkeni kod olarak kullanmama olanak sağlıyor.
   // checking for server response status success
   // this endpoint is rendering into HTML
   t.is(fetchRes.status, 200)
 
   const fetchResJson = await request(app).get(`/work/${HavaleCreated._id}/json`)
   // checking for server response status success
   t.is(fetchResJson.status, 200)
 
   // this endpoint is responding with the user detail JSON data
   // compare the fetched user with created user
   const HavaleFetched = fetchResJson.body
   t.deepEqual(HavaleFetched, HavaleCreated)  //t.is birebir kıyaslama yaparken deepEqual daha kusurlu benzerlik arıyor(obje-array kıyaslamalarında deepEqual kullanıyoruz.) t.is i sayı veya ilkel obje-array kıyaslamasında kullanıyoruz.
 })

 test('Delete a work', async t => {
   t.plan(4)
 
   // first create a work
   const workToCreate = { title: 'SporYap', description: "spora başla"}
   const SporYapCreated = (await request(app)
     .post('/work')
     .send(workToCreate)).body
 
   // delete the work
   const deleteRes = await request(app).delete(`/work/${SporYapCreated._id}`)
   // checking for server response status success
   t.is(deleteRes.status, 200)
   t.is(deleteRes.ok, true)
 
   // trying to render the detail page for the deleted user
   const fetch = await request(app).get(`/work/${SporYapCreated._id}`)
   // checking for server response status - page not found 404
   t.is(fetch.status, 404)
 
   // trying to fetch the JSON data of the deleted user
   const fetchJson = await request(app).get(`/work/${SporYapCreated._id}/json`)
   // checking for server response status - page not found 404
   t.is(fetchJson.status, 404)
 })

 test('Get list of work', async t => {
   t.plan(4)
 
   // first create a work to ensure that
   // there will be at least 1 user in work's list
   const workToCreate = { title: 'Su_iç', description: "günde 1 litre su iç",}
   const _ = await request(app)
     .post('/work')
     .send(workToCreate)
 
   // get the list of works - render view
   const res = await request(app).get('/work/all')
   // checking for server response status success
   t.is(res.status, 200)
 
   // get the list of works - JSON
   const jsonRes = await request(app).get('/work/all/json')
   // checking for server response status success
   t.is(jsonRes.status, 200)
 
   // check the response whether it is an array
   t.true(Array.isArray(jsonRes.body), 'Body should be an array')
   // check the response whether at least there is 1 element
   t.true(jsonRes.body.length > 0)
 })