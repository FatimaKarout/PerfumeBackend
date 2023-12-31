require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const cors =require('cors')
const bodyParser = require('body-parser')
const connectedToDatabase = require('./config/config')
const userRoute = require('./routes/userRout')
app.use(cors())
app.use(bodyParser.json())
const cartRoute = require('./routes/cartRoute');
app.use('/cart' , cartRoute)
const perfumeRoute = require('./routes/perfumeRoute');
const orderRoute = require('./routes/orderRoute')
app.use('/perfumes',perfumeRoute);
app.use('/order',orderRoute);

app.use('/user', userRoute)
app.use('/perfume', perfumeRoute)




app.listen(PORT,() => {
connectedToDatabase()
console.log (`server is running on http://localhost:${PORT}`)
})