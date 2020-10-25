const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

}, { timestamps: true})

userSchema.methods.hashPassword = async (pass) => {
    const hashedPassword =  await bcrypt.hash(pass, 10)
    return hashedPassword // value wrapped in a promise
}

userSchema.methods.matchPassword = async function(pass) {
    return await bcrypt.compare(pass, this.password)
}

module.exports = model('User', userSchema)