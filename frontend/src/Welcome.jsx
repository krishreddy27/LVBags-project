import React from 'react';
import Register from "./auth/Register";
import './auth/authcss/register.css'
import welcomeVideo from '../src/images/welcomeVideo.mp4'

function Welcome(){
    return(
        <div className="video-container">
            <video autoPlay muted loop id="player" className="welcome-video">
                <source src={welcomeVideo} type="video/mp4"/>
            </video>
            <div className="welcome-heading">
            <h1 className="main-heading">Welcome to LVBags</h1>
                <Register/>
            </div>
        </div>
    )
}

export default Welcome;