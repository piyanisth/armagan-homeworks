const express = require('express')
const router = express.Router()

const workService = require('../services/work-service')


router.get('/all', async (_req, res) => {
  const work = await workService.findAll()
  res.render('list', { items: work })
})

router.get('/:id', async (req, res) => {
  const user = await workService.find(req.params.id)
  res.render('data', { data: user })
})

router.post('/', async (req, res) => {
  const user = await workService.add(req.body)
  res.send(user)
})

router.delete('/:id', async (req, res) => {
  const user = await workService.delete(req.params.id)
  res.send(user)
}) 

// router.delete('/:Prefix', async (req, res) => {     // ??????
//   const user = await workService.delete(req.params.Prefix)
//   res.send(user)
// }) 

// router.post('/:id/meetups', async (req, res) => {        //bir kişiye meetup eklemeye yarıyor burası
//   const user = await workService.find(req.params.id)
//   const meetup = await MeetupService.find(req.body.meetup)
//   await workService.attendMeetup(user, meetup)

//   res.send(user)
// })

// router.get('/:id/peers-over-10', async (req, res) => {
//   const user = await workService.find(req.params.id)
//   const peers = await user.findPeersOver10()
//   res.send(peers)
// })

module.exports = router
