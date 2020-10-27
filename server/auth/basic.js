const passport = require('passport')
const { BasicStrategy } = require('passport-http')
const boom = require('@hapi/boom')


const User = require('../models/User')

passport.use(new BasicStrategy(async (email, password, done) => {
    try {
        const user = await User.findOne({email: email})
        if (!user) return done(boom.unauthorized(), false, { message: 'Invalid Credentials'})
        const validPassword = await user.matchPassword(password)
        if(!validPassword) {
            return done(boom.unauthorized(), false, { message: 'Invalid Credentials'})
        }
        delete user.password
        return done(null, user)

    } catch (error) {
        done(error)
    }
}))