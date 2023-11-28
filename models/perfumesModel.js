const mongoose =require('mongoose')
const {Schema,model } = mongoose
const Perfume = new Schema({
    price: {type:Number ,required:true},
    name: {type:String, required:true },
    category:{type:Array, required:true },
    discount :{type:Number, required:true} ,
    image:{type:String, required:true} ,
    description:{type:String, required:true} ,
    stock: {type:Number ,required:true}

})
const perfume = model('perfume',Perfume)
module.exports = perfume