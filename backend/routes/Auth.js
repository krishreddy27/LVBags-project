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
        console.log("Request eamil", req.body.email)
        const existedUser = await Users.find({ email: req.body.email })
        emailFlag = existedUser.length >= 1;
        console.log("emailFlag", emailFlag)
        if (emailFlag === false) {
            const newUser = new Users({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                middleName: req.body.middleName,
                email: req.body.email,
                password: req.body.password,
                mobile: req.body.mobile,
                address: req.body.address,
                cart: req.body.cart,
                updateTimeStamp: req.body.updateTimeStamp,
                startTimeStamp: req.body.startTimeStamp
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

authRouter.post("/signin", async (req, res) => {
    const log = "Checking User Credentials"
    console.log(log);
    let userStatus = false;
    const credentials = {
        email: req.body.email,
        password: req.body.password
    }
    console.log("Credentials", credentials)
    const validUser = await Users.find({ email: credentials.email })
    console.log("valid User", validUser)
    if (validUser) {
        userStatus = validUser.map( user => {
            if(user.email === credentials.email && user.password ===  credentials.password){
                return true;
            }
        })
        console.log(userStatus)
        if (userStatus) {
            res.send("Logged in Successfully").status(200)
        } else {
            res.send("Email and Password not valid").status(401)
        }
    }
    console.log("Credentials checking completed")
})

authRouter.get("/search/?", (req,res) =>{
    const param = req.query.user
    console.log(" Search Param", param);
    try{
        const user = Users.find({ firstName: { $search: param } })
        console.log("User with FirstName Fetched Successfully ", user)
        if(user){
            res.send(user).status(200)
        }else{
            res.send("No details Found").status(200);
        }
    }catch(err){
        console.log('Error occurred while fetching user FirstName via search', err);
        res.status(400);
    }
    
})

//Register User from UI Side
/*
authRouter.post("/registerUser", async (req, res) => {
    const methodName = "Register User from ForntEnd"
    try {
        console.log("Entering into", methodName)
        let emailFlag = false;
        const existedUser = await Users.find({ email: req.body.email })
        console.log(existedUser);
        emailFlag = existedUser.length > 0;
        console.log(emailFlag)
        const date = new Date();
        console.log(date)
        if (emailFlag !== true) {
            const newUser = new Users({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                middleName : req.body.middleName,
                email: req.body.email,
                password: req.body.password,
                mobile: req.body.mobile,
                address: req.body.address,
                cart: req.body.cart,
                updateTimeStamp: req.body.updateTimeStamp,
                startTimeStamp: req.body.startTimeStamp
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

*/



module.exports = authRouter;

