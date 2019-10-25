const { Router } = require('express')
const Chatroom = require('./model')
//json send events...
const Sse = require('json-sse')

const router = new Router()
const stream = new Sse()

router.get('/stream', async (req, res) => {
  console.log("req on /stream")

  // res.status(200) --> remove stream must handle this connection
  // res.send('/stream works') --> remove stream must handle this connection
  //here we get data that we want to stream from the database:
  const messages = await Chatroom.findAll()
  const data = JSON.stringify(messages)
  console.log('sse messages from db: ', data)

  stream.updateInit(data)  // puts data in stream
  stream.init(req, res)     // test -  http :5000/stream --stream

})

router.post('/message', async (req, res) => {
  console.log('welcome message', req.body)
  const { message } = req.body
  //await till creation of my message is done..
  const entity = await Chatroom.create({
    message: message
  })
  //stream posted messages too:
  const messages = await Chatroom.findAll()
  const data = JSON.stringify(messages)

  stream.send(data)
  res.status(201)
  res.send('message received')
})


module.exports = router