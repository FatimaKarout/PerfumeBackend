require('dotenv').config()
const express =  require('express')
const app = express()
const PORT = process.env.PORT
const cors =require('cors')
const bodyParser = require('body-parser')
const connectedToDatabase = require('./config/config')
app.use(cors())
app.use(bodyParser.json())




app.listen(PORT,() => {
connectedToDatabase()
console.log (`server is running`)
})