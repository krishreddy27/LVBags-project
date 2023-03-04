import axios from 'axios'
import React, { useState } from 'react'
import '../index.css'

function Register() {
    const [register, setRegister] = useState({
        firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
    })
    const [button, setButton] = useState(true)
    const [registerError, setRegisterError] = useState("")
    const [result, setResult] = useState("")

    const handleChange = e => {
        const { name, value } = e.target
        console.log(name, value)
        setRegister(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
        if (register.firstName != undefined && register.lastName != undefined
            && register.email != undefined && register.password != undefined
            && register.confirmPassword != undefined) {
            setButton(false)
        }

    }
    function handleRegister() {
        console.log("Entering into hanldeRegister" + register)
        if (register) {
            if (register.email.match("@gmail.com")) {
                if (register.password === register.confirmPassword) {
                    console.log("Success")
                    axios.post("http://localhost:8000/users/registerUser", register)
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
    }
    return (
        <>
            <div className='container-register' style={{ alignContent: "center" }}>
                <div className="brand-title">SHOPIN</div>
                <p style={{ color: "black" }}>Note: Enter all fields</p>
                <h6 style={{ color: "red" }}>{registerError}</h6>
                <h5 style={{ color: "green" }}>{result}</h5>
                <div className='inputs'>
                    <label>FirstName</label>
                    <input type="text"
                        placeholder='Enter your FirstName'
                        onChange={handleChange}
                        name="firstName"
                    />
                    <label>LastName</label>
                    <input type="text"
                        placeholder='Enter your LastName'
                        onChange={handleChange}
                        name="lastName"
                    />
                    <label>Email</label>
                    <input type="email"
                        placeholder='Enter your Email'
                        onChange={handleChange}
                        name="email"
                    />
                    <label>Password</label>
                    <input type="password"
                        placeholder='Enter a new password'
                        onChange={handleChange}
                        name="password"
                    />
                    <label>Confirm Password</label>
                    <input type="password"
                        placeholder='confirm your password as you in above field'
                        onChange={handleChange}
                        name="confirmPassword"
                    />
                    <br />
                    <button type='submit' onClick={handleRegister} disabled={button}>Register</button>
                </div>
            </div>
        </>
    )
}

export default Register