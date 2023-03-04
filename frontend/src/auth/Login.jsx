// import React, { useState } from 'react';
// import firebase from 'firebase/app';
// import './authcss/login.css'
// const Login = () => {
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [verificationId, setVerificationId] = useState('');
//     const [otp, setOtp] = useState('');

//     const handleGenerateOtp = async () => {
//         try {
//             const confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber);  
//             setVerificationId(confirmationResult.verificationId);
//         } catch (error) {
//             console.log(error);
//             console.log('Exception Occured');
//         }
//     };

//     const handleVerifyOtp = async () => {
//         try {
//             const credential = firebase.auth.PhoneAuthProvider.credential(
//                 verificationId,
//                 otp
//             );
//             await firebase.auth().signInWithCredential(credential);
//             console.log('OTP verified successfully');
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <>
//             <div className='login-page'>
//                 <center><h1>Login</h1></center>
//                 <label>PhoneNumber</label>
//                 <input type="text" name="phoneNumber"
//                     placeholder="Enter phone number" 
//                     value={phoneNumber} 
//                     onChange={(e) => setPhoneNumber(e.target.value)} />
//                 <br />
//                 <button onClick={handleGenerateOtp}>Generate OTP</button>
//             </div>
//             {verificationId && (
//                 <div className='otp-page'>
//                     <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
//                     <button onClick={handleVerifyOtp}>Verify OTP</button>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Login;
