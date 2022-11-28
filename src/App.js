import './App.css';
import React, { useState } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './screens/Home';
import Aboutus from './screens/Aboutus';
import Offer from './screens/Offer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Orders from './screens/Orders';
import Login from './screens/Login';
import Register from './screens/Register';
import Buying from './screens/Buying';
import Checkout from './screens/Checkout';
import Payment from './screens/Payment';
import Cart from './screens/Cart';
import Order1 from './screens/Order1';
import SeeReview from './screens/SeeReview';
import AddReview from './screens/AddReview';
import { CartProvider} from "react-use-cart";
function App() {
  
  
  return (
    <CartProvider>
      <BrowserRouter>
      <Navbar />
            <Routes>
              <Route exact path="/"         element={ <Home /> }/>
              <Route exact path='/about'    element={< Aboutus/>}/>
              <Route exact path='/offer'    element={< Offer/>}/>
              <Route exact path='/orders'   element={< Orders/>}/>
              <Route exact path='/login'    element={< Login/>}/>
              <Route exact path='/register' element={< Register/>}/>
              <Route exact path='/checkout' element={< Checkout/>}/>
              <Route exact path='/payment'  element={< Payment/>}/>
              <Route exact path='/buying'   element={< Buying/>}/>
              <Route exact path='/cart'     element={< Cart/>}/>
              <Route exact path='/order1'     element={< Order1/>}/>
              <Route exact path='/seereview'     element={< SeeReview/>}/>
              <Route exact path='/addreview'     element={< AddReview/>}/>
            </Routes>
          <Footer />
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;