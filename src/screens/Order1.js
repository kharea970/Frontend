import React,{useContext, useState,useEffect} from "react";
import AuthContext from '../context/AuthProvider';
import { useAlert } from 'react-alert'
import { useNavigate } from "react-router-dom";

const Order1 = () =>{
  const { auth } =useContext(AuthContext)
  const navigate = useNavigate();
  const alert = useAlert()

      return(<>
        <section id="myOrders" style={{marginBottom:"180px"}}>
   <div className="container p-5">
     <div  className="m-auto">
       <h1 className="text-center display-3 mt-5">
         <i className="fa fa-spinner fa-spin"></i>
       </h1>
     </div>
     <h3  className="display-2 text-center mt-5">My Orders is Empty</h3>
     <div  className="row">
       <div className="col">
         <h4 className="display-4">My Orders</h4>
         <div className="row">
           <div className="offset-10 col-2 d-none d-md-block">
             <p>
               <small style={{marginLeft:"1000px"}} className="text-muted">Status</small>
             </p>
           </div>
         </div>
         <hr className="mt-0"/>
         <div  className="order">
           <div className="row">
             
             <div className="col-5 col-md-8">
               <h5>
                 <a href="/">Order</a>
                 <p className="m-0">
                   <small className="text-muted">Total:</small>
                 </p>
               </h5>
             </div>
             <div className="col-2">
               <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Processing  </h6>
             </div>
           </div>
           <hr/>
         </div>
       </div>
     </div>
   </div>
 </section> 
 <br/>
     </>)
    
}
export default Order1