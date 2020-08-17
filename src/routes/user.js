const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middleware/auth')

router.post('/user', async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({user, token})
  } catch (e) {
    res.status(400).json(e)
  }
})

// router.get('/users/all', auth, async (req, res) => {
//   try {
//     const users = await User.find()
//     res.send({users})
//   } catch (e) {
//     res.status(400).json(e)
//   }
// })

module.exports = router