const { Schema, model} = require('mongoose')

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true,
        match: /^[0-9a-fA-F]{24}$/
    }
}, {
    timestamps: true
})


module.exports = model('Note', noteSchema)