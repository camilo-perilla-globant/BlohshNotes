const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', async (req, res) => {
    const users = await User.find()
    res.json({
        message: 'List of users',
        data: users
    })
})

router.post('/', async (req, res) => {
    console.log(req.body)
    const newUser = new User(req.body)
    await newUser.save()
    res.json({
        message: 'User was created'
    })
})


module.exports = router