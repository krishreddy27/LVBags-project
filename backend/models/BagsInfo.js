const mongoose = require('mongoose')

const BagsInfo = new mongoose.Schema({
    bagName :{
        type : String,
        require : true
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
        manualPrice : {
            typer : Number,
        }, 
        autoPrice : {
            type : Number,
        }
    },
    bagDescription : {
        type : Object,
        required : false
    },
    image : {
         manualBagImage: {
            type: String,
            required: true
        },
        autoBagImage: {
            type: String,
            required: true
        }
    },
    minimumQuantity : {
        type : String,
        required : false
    },
    printing : {
        type : Array,
        required : true
    }
})

const BagInfo = mongoose.model("BagsInfo", BagsInfo);
module.exports = BagInfo;


