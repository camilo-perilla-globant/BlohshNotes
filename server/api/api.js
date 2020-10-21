const express = require('express')
const router = express.Router()
const users = require('./users')


router.get('/', (req, res) => {
    res.json({
        message: 'API-👋🌎'
    })
})

router.use('/users', users)


module.exports = router