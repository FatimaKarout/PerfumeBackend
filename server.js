require('dotenv').config()
const express =  require('express')
const app = express()
const PORT = process.env.PORT
const cors =require('cors')
const bodyParser = require('body-parser')
const connectedToDatabase = require('./config/config')
app.use(cors())
app.use(bodyParser.json())
const perfumeRoute = require('./routes/perfumeRoute')



app.use('/perfumes',perfumeRoute);
app.listen(PORT,() => {
connectedToDatabase()
console.log (`server is running`)
})