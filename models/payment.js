const mongoose =require('mongoose')
const {Schema,model } = mongoose
const Payment= new Schema({
accountNumber:{type:Number, required:true},
date: {type:Date,required:true},
User: {
    type:Schema.Types.ObjectId,
    ref: 'User',
    required: true},
    paymentMethod:{type:String,required:true }


})
const payment= model('payment',Payment)
module.exports = payment