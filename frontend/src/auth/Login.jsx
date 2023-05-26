import React from 'react'
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import './authcss/login.css'
import Home from "../components/Home";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

const Login = ({ msg }) => {
    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: (response) => {
                        onSignup();
                    },
                    "expired-callback": () => { },
                },
                auth
            );
        }
    }

    function onSignup() {
        setLoading(true);
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;

        const formatPh = "+" + ph;

        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setLoading(false);
                setShowOTP(true);
                toast.success("OTP sended successfully!");
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }

    function onOTPVerify() {
        setLoading(true);
        window.confirmationResult
            .confirm(otp)
            .then(async (res) => {
                console.log(res);
                setUser(res.user);
                setLoading(false);
                dispatch("LOGIN");
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
        if (user != null) {
            return (
                { msg }
            )
        }
    }

    return (
        <>
            <section div="login-page">
                <div>
                    <Toaster toastOptions={{ duration: 4000 }} />
                    <div id="recaptcha-container"></div>
                    {user ? (
                        <h2 className="text-center text-white font-medium text-2xl">
                            👍Login Success
                        </h2>
                    ) : (
                        <div className="otp-page">
                            {showOTP ? (
                                <>
                                    <div className="otp-input">
                                        <BsFillShieldLockFill size={30} />
                                    </div>
                                    <label
                                        htmlFor="otp"
                                        className="font-bold text-xl text-white text-center"
                                    >
                                        Enter your OTP
                                    </label>
                                    <OtpInput
                                        value={otp}
                                        onChange={setOtp}
                                        OTPLength={6}
                                        otpType="number"
                                        disabled={false}
                                        autoFocus
                                        className="opt-container "
                                    ></OtpInput>
                                    <br />
                                    <div
                                        onClick={onOTPVerify}
                                        className="verify-otp-button"
                                    >
                                        {loading && (
                                            <CgSpinner size={20} className="mt-1 animate-spin" />
                                        )}
                                        <span>Verify OTP</span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h6><span>Please Sigin with your Number</span></h6>
                                    <PhoneInput country={"in"} value={ph} onChange={setPh}  />
                                    <div onClick={onSignup} className="button-send-code">
                                        {loading && (
                                            <CgSpinner size={20} className="mt-1 animate-spin" />
                                        )}
                                        <span>Send code via SMS</span>
                                    </div>
                                    <br />
                                    <span className='signin-link' >If you have already account, <Link to='/signin' className='link-signin'>click here to signin</Link></span>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Login;