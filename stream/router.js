const { Router } = require('express')

const router = new Router()

router.get('/stream', (req, res) => {
  console.log("req on /stream")

  res(200)
  res.send('/stream works')

})


module.exports = router