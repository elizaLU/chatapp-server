const express = require('express')
const bodyParser = require('body-parser')
const streamRouter = require('./stream/router')
const userRouter = require('./user/router')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000


//all data sent over the net needs to be in JSON format, so we JSON all data we receive after we request it
const jsonParser = bodyParser.json()
app.use(jsonParser)
app.use(cors()) //cors function is executed ()


app.listen(port, () => console.log(`Listening on port ${port}`))

app.get('/', (req, res) => {
  console.log("get req on /")
  res.status(200)
  res.send('hi')
})


app.use(streamRouter)
app.use(userRouter)