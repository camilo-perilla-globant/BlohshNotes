const passport = require('passport')
const { BasicStrategy } = require('passport-http')

const User = require('../models/User')

passport.use(new BasicStrategy(async (email, password, done) => {
    try {
        const user = await User.findOne({email: email})
        if (!user) return done(null, false, { message: 'Invalid Credentials'})
        const validPassword = await user.matchPassword(password)
        if(!validPassword) {
            return done(null, false, { message: 'Invalid Credentials'})
        }
        delete user.password
        return done(null, user)

    } catch (error) {
        done(error)
    }
}))