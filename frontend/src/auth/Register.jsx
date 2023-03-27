import React, { useState } from 'react';
import './authcss/register.css';
import {Link} from "react-router-dom";
import axios from "axios";

function Register() {
    const [result, setResult] = useState();

    const [register, setRegister] = useState({
        firstName: "", lastName: "", email: "", password: "",
        middleName : "",
        mobileNumber : 0,
        address: [{
            addressLine1 : "",
            addressLine2 :"",
            city : "",
            state : "",
            country : "",
            pincode : 0
        }],
        cart: [{
            productName : "",
            productType : "",
            productPrice : 0,
            productQuantity : 0,
            totalPrice : 0,
            gst : ""
        }],
        updateTimeStamp: "",
        startTimeStamp: new Date()
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegister((prev) =>{
            return{
                ...prev,
                [name] : value
            }
        });
        console.log("Register Details",register);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add code here to handle form submission
    }

    /*function handleRegister() {
        console.log("Entering into hanldeRegister" + register)
        if (register) {
            if (register.email.match("@gmail.com")) {
                if (register.password === register.confirmPassword) {
                    console.log("Success")
                    axios.post("http://localhost:8000/users/register", register)
                        .then(response => {
                            setResult(response.data)
                        })
                        .catch(err => {
                            console.log(err)
                            setResult("Failed to Register")
                        })
                } else {
                    setRegisterError("Confirm password has not matched with password")
                    console.log(registerError)
                }
            } else {
                setRegisterError("Please enter valid E-mail ID")
                console.log(registerError)
            }
        }
        console.log("Exiting from handleRegister")
    }*/

    return (
        <div className="register-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit} className="register-form">
                <label className="label-register">
                    FirstName:
                    <input type="text" value={register.firstName} onChange={handleChange} name="firstName" />
                </label>
                <label className="label-register">
                    LastName:
                    <input type="text" value={register.lastName} onChange={handleChange} name="lastName" />
                </label>
                <label className="label-register">
                    MiddleName:
                    <input type="text" value={register.middleName} onChange={handleChange} name="lastName" />
                </label>
                <label className="label-register">
                    Email:
                    <input type="email" value={register.email} onChange={handleChange} name = "email" />
                </label>
                <label className="label-register">
                    Password:
                    <input type="password" value={register.password} onChange={handleChange} name = "password"/>
                </label>
                <label className="label-register">
                    mobileNumber:
                    <input type="tel" value={register.mobileNumber} onChange={handleChange} name = "mobileNumber" />
                </label>
                <label className="label-register">
                    addressLine1:
                    <input type="text" value={register.address.addressLine1} onChange={handleChange} name = "addressLine1" />
                </label>
                <label className="label-register">
                    AddressLine2:
                    <input type="text" value={register.address.addressLine2} onChange={handleChange} name = "addressLine2"/>
                </label>
                <label className="label-register">
                    city:
                    <input type="password" value={register.address.city} onChange={handleChange} name = "city"/>
                </label>


                <button type="submit">Register</button>
                <br/>
                <Link to="/login" >Login with OTP</Link>
            </form>
        </div>
    );
}

export default Register;
