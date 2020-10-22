const express = require('express')
const router = express.Router()
const users = require('./users')
const notes = require('./notes')

router.get('/', (req, res) => {
    res.json({
        message: 'API-👋🌎'
    })
})

router.use('/users', users)
router.use('/notes', notes)


module.exports = router