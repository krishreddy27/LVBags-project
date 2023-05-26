import React, {useEffect, useState} from 'react';
import {auth} from "./firebase";
import App from "../App";
import Login from "./Login";
import Register from "./Register";

export function Session(){
    const [loggedInUser, setLoggedInUser] = useState(null);
    const success = () =>{
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user && user.isAuthenticated) {
                setLoggedInUser(user.isAuthenticated);
                console.log("User Logged in Details"+user, loggedInUser)
            } else {
                setLoggedInUser(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }
    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user && user.isAuthenticated) {
                setLoggedInUser(user.isAuthenticated);
                console.log("User Logged in Details"+user, loggedInUser)
            } else {
                setLoggedInUser(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [])
    if(loggedInUser != null && loggedInUser === true){
        return(
            <App/>
        )
    }else{
        return (
            /*<Login msg = {success} />*/
            <Register/>
        )
    }


}

export default Session;