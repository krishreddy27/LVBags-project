import {initializeApp} from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import App from "../App";
import React from 'react'

const firebaseConfig = {
    apiKey: "AIzaSyDwsHbH2zu9ePuKwGo2bs-K_u3ulGE8SHI",
    authDomain: "lvbags-d6902.firebaseapp.com",
    projectId: "lvbags-d6902",
    storageBucket: "lvbags-d6902.appspot.com",
    messagingSenderId: "233184818800",
    appId: "1:233184818800:web:7a24883514623bbc6766b5",
    measurementId: "G-8ZDDCEW691"
};
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
onAuthStateChanged(auth, user =>{
    if(user != null){
        console.log("User Login");
        return(
        <App user = "true"/>
        )
    }else{
        console.log("User Not Loggedin")
    }

})




