const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('Collection request works')
})

module.exports = router
