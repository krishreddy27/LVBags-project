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
    status: {
        type: String,
        require: false
    },
    membershipStatus: {
        type: String,
        require: false,
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
    likedPosts: {
        type: String,
        require: false
    },
    wallet: {
        type: Number,
        require: false
    },
    triggered_date: {
        type: Date,
        require: true
    }
})

const UsersList = mongoose.model("UsersList", Users);
module.exports = UsersList;

