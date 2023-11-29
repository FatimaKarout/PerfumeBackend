require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const cors =require('cors')
const bodyParser = require('body-parser')
const connectedToDatabase = require('./config/config')
app.use(cors())
app.use(bodyParser.json())
const cartRoute = require('./routes/cartRoute');
app.use('/cart' , cartRoute)




app.listen(PORT,() => {
connectedToDatabase()
console.log (`server is running`)
})