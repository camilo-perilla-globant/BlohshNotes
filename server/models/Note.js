const { Schema, model} = require('mongoose')

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        minlength: 30,
        required: true
    }
}, {
    timestamps: true
})


module.exports = model('Note', noteSchema)