const express = require('express')
const router = express.Router()
const Note = require('../models/Note')

router.get('/', async (req, res) => {
    const notes = await Note.find({})
    res.json({
        message: 'List of notes',
        data: notes
    })
})

router.post('/', async (req, res) => {
    const newNote = new Note(req.body)
    await newNote.save()
    res.json({
        message: 'Note was created'
    })
})


module.exports = router