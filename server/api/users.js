const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const boom = require('@hapi/boom')

//basic 
require('../auth/basic')

router.get('/', async (req, res, next) => {
    try {
        const users = await User.find({})
        if (!users) return next()
        res.json({
            info: users
        })
    } catch (error) {
        next(error)
    }
})


router.post('/sign-in', async (req, res, next) => {
    passport.authenticate('basic', (error, user) => {
        try {
            if (error || !user) {
                next(boom.unauthorized())
            }

            req.login(user, { session: false }, async (err) => {
                if (err) return next(err)

                const { _id: id, username, email } = user
                const payload = {
                    sub: id,
                    username,
                    email
                }
                const token = jwt.sign(payload, process.env.SECRET, {
                    expiresIn: '15m'
                })

                return res.status(200).json({
                    token,
                    user: {
                        id,
                        username,
                        email
                    }
                })
            })
        } catch (error) {
            next(error)
        }
    })(req, res, next)
})


//Create user
router.post('/sign-up', async (req, res, next) => {
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