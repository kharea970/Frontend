import React,{useContext, useState,useEffect} from "react";
import AuthContext from '../context/AuthProvider';
import { useAlert } from 'react-alert'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Orders.css'
const Orders = () =>{
  const [cardinfo,setCardinfo] = useState(null)
  const { auth } =useContext(AuthContext)
  const navigate = useNavigate();
  const gotobuying = ()=>{
    navigate('/')
  }
  const alert = useAlert()
  useEffect(()=>{
    axios.get(`http://localhost:8081/getordersbyuserid/${auth}`).then((res)=>{
	  setCardinfo(res.data)
}).catch((err)=>{
	alert.error(err.message)
})
  },[])
      if(cardinfo === null || Object.keys(cardinfo).length === 0){
        return(<>
              
        <div className="firstlogin">
        <h3 style={{marginLeft:"600px",marginTop:"30px",marginBottom:"20px"}}>Your cart is empty</h3>
        <button type="button" class="btn btn-dark" style={{marginLeft:"640px",marginTop:"30px",marginBottom:"5px"}} onClick={()=>gotobuying()}>Go to Buying Page</button> 
        <div>
      <img
        src="https://img.freepik.com/free-vector/no-time-concept-illustration_114360-4105.jpg?w=740&t=st=1669529191~exp=1669529791~hmac=d6f8771f203c46b1e32e1a76daa562317c6ccb6296017ad8ae7ea4ca4482bac2"
        alt="car"
        style={{marginLeft:"470px",marginTop:"20px",width:"500px"}}
      />
      </div>
        </div>
      
        </>)
      }
  
      return(<div className="order">
        <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">

<div class="col-lg-8 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Your Orders</h4>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Order Items - Quantity</th>
                          <th>Order ID</th>
                          <th>Placed On</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cardinfo.map((item,index)=>{
                          let a = ""
                          let b =""
                          for(let i=0;i<item.lineItems.length;i++){
                            a = a  +item.lineItems[i].title +" - "+item.lineItems[i].quantity+"\n"
                        }
                          return(
                            <tr key={index}>
                            <td>{a}</td>
                            <td>{item.order_id}</td>
                            <td>{item.date.substr(0,10)}</td>
                            <td>Shipping</td>
                        </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
            </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
     </div>)
    
}
export default Orders