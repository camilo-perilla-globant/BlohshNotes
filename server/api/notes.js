const express = require('express')
const router = express.Router()
const Note = require('../models/Note')

router.get('/', async (req, res, next) => {
    try {
        const notes = await Note.find({})
        if (!notes) return next()
        res.json({
            message: 'List of notes',
            info: notes
        })
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newNote = new Note(req.body)
        await newNote.save()
        res.json({
            message: 'Note was created'
        })
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const newInfo = req.body
        await Note.updateOne({_id: id}, {$set: newInfo}, {upsert: true})
        res.json({
            message: 'Note updated',
            new_info: newInfo
        })
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedNote = await Note.findByIdAndDelete(id)
        if (!deletedNote) return next()
        res.json({
            message: 'Note deleted',
            deletedNote
        })
    } catch (error) {
        next(error)
    }
})


module.exports = router