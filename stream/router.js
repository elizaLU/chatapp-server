const { Router } = require('express')
const Chatroom = require('./model')

const router = new Router()

router.get('/stream', (req, res) => {
  console.log("req on /stream")

  res(200)
  res.send('/stream works')

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