const mongoose = require('mongoose')

const Products = new mongoose.Schema({
    productName :{
        type : String,
        required : true
    },
    productType :{
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
    model : {
        type : String,
        required : false
    },
    image : {
        type : String,
        required : false,
        sparse : true
    },
    description : {
        type : String,
        required : false
    }
})

const ProductsList = mongoose.model("ProductsList", Products);
module.exports = ProductsList;


