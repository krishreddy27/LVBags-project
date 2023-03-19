const mongoose = require('mongoose')

const BagsInfo = new mongoose.Schema({
    bagName :{
        type : String,
        required : true
    },
    bagSize :{
        type : Array,
        required : true
    },
    bagType :{
        type : String,
        required : true
    },
    bagPrice : {
        type : Number,
        default : Date.now
    },
    bagDescription : {
        type : Object,
        required : false
    },
    image : {
        type : String,
        required : true,
        sparse : true
    },
    minimumQuantity : {
        type : String,
        required : false
    },
    printing : {
        type : String,
        required : true
    }
})

const BagInfo = mongoose.model("BagsInfo", BagsInfo);
module.exports = BagInfo;


