const express = require('express');
const router = new express.Router();
const User = require('../models/user');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken')

router.post('/user', async (req, res) => {
	const user = new User(req.body);
	user.save((err, user) => {
    if (err) {
      return res.status(400).json(err)
    }
    const token = jwt.sign({_id: user.id}, process.env.SECRET)
    res.cookie("token", token, {expire: new Date() + 999})
    res.json({token, user})
  })
});

router.get('/users/all', auth, (req, res) => {
  User.find()
  .exec((err, user) => {
    if (err) {
      return res.status(400).json(err)
    }
    res.json(user)
  })
})

module.exports = router;
