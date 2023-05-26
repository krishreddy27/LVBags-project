import React from 'react';
import Register from "./auth/Register";
import './auth/authcss/register.css'
import welcomeVideo from '../src/images/welcomeVideo.mp4'
import axios from "axios";
import Login from './auth/Login';

function Welcome(){
    const handleClick = async () => {
        try {
            await axios
                .get(`https://apis.ccbp.in/book-store?title=india`)
                .then((response) => console.log("Books Data",response.data))
                .catch((err) => {
                    console.log('Error Occured', err);
                });
        } catch (e) {
            console.log(e);
        }
    };
    return(
        <div className="video-container">
            {/* <video autoPlay muted loop id="player" className="welcome-video">
                <source src={welcomeVideo} type="video/mp4"/>
            </video> */}
            <div className="welcome-heading">
            <Login/>
            </div>
        </div>
    )
}

export default Welcome;