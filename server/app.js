const express = require('express')
const path = require('path')
const app = express()
const api = require('./api/api')
require('dotenv').config()


const connection = require('./database')
connection.then(db => console.log('DB is connected'))
    .catch(console.log)


app.set('port', process.env.PORT || 3000)
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use('/api/v1', api)

app.use(express.static(path.join(__dirname, 'public')))


app.listen(app.get('port'), () => {
    console.log('Server on port 3000')
})