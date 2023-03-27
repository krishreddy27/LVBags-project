const mongoose = require('mongoose')

const Users = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true,
        default: Date.now
    },
    middleName: {
        type: String,
        require: false
    },
    mobile: {
        type: Number,
        require: true,
        sparse: true
    },
    address: [{
        addressLine1: { type: String },
        addressLine2: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
        pincode: { type: String }
    }],
    cart :[{
        productName: {type : String},
        productType : {type:String},
        productPrice : {type : Number},
        productQuantity : {type : Number},
        totalPrice : {type:Number},
        gst : {type:String}

    }],
    updatedTimeStamp: {
        type: Date,
        require: false
    },
    startTimeStamp: {
        type: Date,
        require: true
    }
})

const UsersList = mongoose.model("UserModel", Users);
module.exports = UsersList;

