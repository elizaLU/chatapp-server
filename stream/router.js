const { Router } = require('express')
const Chatroom = require('./model')
//json send events...
const Sse = require('json-sse')

const router = new Router()
const stream = new Sse()

router.get('/stream', (req, res) => {
  console.log("req on /stream")

  res(200)
  res.send('/stream works')
  //here we get data that we want to stream from the database
  Chatroom.findAll()

})

router.post('/message', async (req, res) => {
  console.log('welcome message', req.body)
  const { message } = req.body
  //aeait till creation of my message is done..
  const entity = await Chatroom.create({
    message: message
  })
  res.status(201)
  res.send('message received')
})


module.exports = router