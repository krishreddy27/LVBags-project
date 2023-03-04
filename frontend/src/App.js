import React from "react";
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Home from './components/Home.jsx';
import Cart from './components/Cart.js';
import Mobile from './components/Mobile.jsx';
import AddProducts from './components/AddProducts.jsx';
import Profile from './auth/Profile.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './index.css'
import Sellerpage from './sell/Sellerpage.jsx';
import Login from './auth/Login';
import { ProductScreen } from './screens/ProductScreen';
import Register from './auth/Register';
import './bootstrap.min.css';

function App(props) {
  const history = createBrowserHistory();
  return (
      <>
        <main>
          <Header />
          <Routes className="route">
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/mobiles' element={<Mobile />} />
            <Route path='/addProducts' element={<AddProducts />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/seller' element={<Sellerpage />} />
            {/*<Route path='/login' element={<Login/>} />*/}
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </>
  );
}

export default App;
