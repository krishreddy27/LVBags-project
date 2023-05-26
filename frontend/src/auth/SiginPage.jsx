import React, { useState } from 'react'
import './authcss/singin.css'
import axios from 'axios'
import Home from '../components/Home'

function SiginPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        status: true
    })
    let status = "";
    const handleSignin = () => {
        console.log("Handle Signin method Entering")
        axios.post("/signin", user)
            .then(response => {
                status = response.data
                console.log(status)
            })
        if (status.match("successfully")) {
            return (
                <Home />
            )
        }
        console.log("Handle Signin method Exiting")
    }
    return (
        <div className='sigin-page'>
            {status &&
                <p style={{ color: "red" }}>{status}</p>
            }
            <form className='sigin-form'>
                <label className='label-signin'>
                    UserName/E-mail
                </label>
                <input type='email' name="email" placeholder='Enter your mail or username' />
                <label className='label-signin'>
                    Password
                </label>
                <input type='password' name='password' placeholder='Enter Your Password' />
                <center>
                    <div className='sigin-form-button' onClick={handleSignin}>SignIn</div>
                </center>
            </form>
        </div>
    )
}

export default SiginPage