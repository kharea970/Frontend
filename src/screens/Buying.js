import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import Home1 from "./Home1";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
const Buying = ()=>{
    const navigate = useNavigate();
    const location = useLocation();
    const a = location.state;
    const category = a.category;
    const [cardInfo,setCardInfo] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:8081/allcoversbycategory/${category}`).then((res)=>{
            setCardInfo(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[cardInfo])

    //rendercard


    return(
        <div className="App">
        <CartProvider>
          <Home1 cardInfo={cardInfo}/>
          <Cart />
        </CartProvider>
      </div>
    )
}
export default Buying;