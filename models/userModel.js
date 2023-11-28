const mongoose =require('mongoose')
const {Schema,model } = mongoose
const User = new Schema({
    fullName: {type:String ,required:true},
    email: {type:String, required:true , unique:true},
    password:{type:String, required:true },
    address :{type:String, required:true} ,
    role:{type:String, required:true} ,
})
const user = model('user',User)
module.exports = user