import React, { useEffect, useState } from "react";
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Cart from './components/Cart.js';
import Mobile from './components/Mobile.jsx';
import AddProducts from './components/AddProducts.jsx';
import Profile from './auth/Profile.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './index.css'
import Sellerpage from './sell/Sellerpage.jsx';
import Login from './auth/Login.jsx';
import { ProductScreen } from './screens/ProductScreen';
import Register from './auth/Register.jsx';
import './bootstrap.min.css';
import { auth } from "./auth/firebase.js";
import Home from "./components/Home.jsx";
import Welcome from "./Welcome";
import { useSelector } from "react-redux";
import SiginPage from "./auth/SiginPage";
import Navbar from "./components/Navbar1.jsx";


function App(props) {
  const history = createBrowserHistory();
  console.log("App Component Rendered")
  const loggedin = useSelector(state => state.isLoggedIn)
  const [loggedInUser, setLoggedInUser] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.isAuthenticated) {
        setLoggedInUser(user.isAuthenticated);
        console.log("User Logged in Details" + user, loggedInUser)
        console.log("Loggedin", loggedin)
      } else {
        setLoggedInUser(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, loggedin)

  return (
    <>
      {loggedInUser ? <Header /> : ""}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/mobiles' element={<Mobile />} />
          <Route path='/addProducts' element={<AddProducts />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/seller' element={<Sellerpage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<ProductScreen />} />
          <Route path='/home' element={<Home />} />
          <Route path="/signin" element={<SiginPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
