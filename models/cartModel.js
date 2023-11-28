const mongoose =require('mongoose')
const {Schema,model } = mongoose
const Cart= new Schema({
    User: {
        type:Schema.Types.ObjectId,
        ref: 'User',
        required: true},
        perfumes:{type:Array, required:true },

})
const cart = model('cart',Cart)
module.exports = cart