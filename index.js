const express = require('express')

const app = express()
const port = process.env.PORT || 5000

const streamRouter = require('./stream/router')

app.listen(port, () => console.log(`Listening on port ${port}`))

app.get('/', (req, res) => {
  console.log("get req on /")
  res.status(200)
  res.send('hi')
})


app.use(streamRouter)
