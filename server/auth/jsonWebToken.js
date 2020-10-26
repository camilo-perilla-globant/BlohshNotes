const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')

const User = require('../models/User')

passport.use(new Strategy({
    secretOrKey: process.env.SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, async (tokenPayload, done) => {
    const { email } = tokenPayload

    try {
        const user = await User.findOne({email: email})
        if (!user) return done(null, false, { message: 'No user found'})

        delete user.password
        done(null, user)

    } catch (error) {
        return done(error)
    }
}))