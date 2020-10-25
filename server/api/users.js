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

router.post('/', async (req, res, next) => {
    const errors = []
    const { username, email, password, confirm_password } = req.body
    const duplicate = await User.findOne({email: email})
    //Errors
    if (password !== confirm_password) {
        errors.push({
            info: 'Passwords must match'
        })
    }
    if (password.length < 5) {
        errors.push({
            info: 'Password length has to be at least 5 characters'
        })
    }
    if (duplicate) {
        errors.push({
            info: 'Email already registered'
        })
    }
    //Resolution
    if (errors.length > 0) {
        res.json({
            errors: errors
        })
    }
    else {
        try {
            const newUser = new User({
                username,
                email,
                password
            })
            newUser.password = await newUser.hashPassword(password)
            await newUser.save()
            res.json({
                resolution: 'User Created successfully'
            })
            
        } catch (error) {
            next(error) 
        }
        
        
    }


})


module.exports = router