const mongoose = require('mongoose')

const Cart = new mongoose.Schema({
    productName :{
        type : String,
        required : true
    },
    price :{
        type : Number,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
    image : {
        type : String,
        required : false,
        sparse : true
    },
    quantity : {
        required : true,
        type : Number
    },
    totalPrice :{
        type : Number,
        required : false
    }
})

const AddToCart = mongoose.model("Cart", Cart);
module.exports = AddToCart;


