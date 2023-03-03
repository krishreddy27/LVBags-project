const express = require('express');
const authRouter = express.Router();
const Users = require('../models/Users')

authRouter.get('/', async (req, res) => {
    try {
        res.send(await Users.find()).status(200)
    } catch (e) {
        res.send("No users Found").status(400)
    }
})

//For postman to register a user directly
authRouter.post("/register", async (req, res) => {
    const methodName = "Register from postman"
    console.log("Entering into", methodName)
    try {
        let emailFlag = false;
        const existedUser = await Users.find({ email: req.body.email })
        console.log(existedUser);
        emailFlag = existedUser.length > 0 ? true : false;
        if (emailFlag === false) {
            const newUser = new Users({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                status: req.body.status,
                membershipStatus: req.body.membershipStatus,
                address: req.body.address,
                likedPosts: req.body.likedPosts,
                wallet: req.body.wallet,
                triggered_date: req.body.triggered_date
            })

            newUser ?
                newUser.save()
                    .then(response => {
                        res.send("User Registered Successfully").status(200)
                    })
                    .catch(err => console.log("Error Occured while Regestering User", err))
                : res.send("User not Added, check the request once")
        } else {
            res.send("User already Existed, PLease try with new Email-id");
        }
    } catch (err) {
        console.log(err);
        res.send("Some thing went wrong please try again later").status(400)
    }
    console.log("Exiting from ", methodName)
})

//Register User from UI Side
authRouter.post("/registerUser", async (req, res) => {
    const methodName = "Register User from ForntEnd"
    try {
        console.log("Entering into", methodName)
        let emailFlag = false;
        const existedUser = await Users.find({ email: req.body.email })
        console.log(existedUser);
        emailFlag = existedUser.length > 0 ? true : false;
        console.log(emailFlag)
        const date = new Date();
        console.log(date)
        if (emailFlag !== true) {
            const newUser = new Users({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                status: "active",
                membershipStatus: "inactive",
                address: req.body.address,
                likedPosts: req.body.likedPosts,
                wallet: req.body.wallet,
                triggered_date: date
            })

            newUser ?
                newUser.save()
                    .then(response => {
                        res.send("User Registered Successfully").status(200)
                    })
                    .catch(err => console.log("Error Occured while Regestering User", err))
                : res.send("User not Added, check the request once")
        } else {
            res.send("User already Existed, PLease try with new Email-id");
        }
    } catch (err) {
        console.log(err);
        res.send("Some thing went wrong please try again later").status(400)
    }
    console.log("Exiting from ", methodName)
})




module.exports = authRouter;

