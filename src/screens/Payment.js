import React,{useState,useEffect,useContext} from "react";
import './Payment.css'
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';
import { useAlert } from 'react-alert'
const Payment = ()=>{
    const navigate = useNavigate();
    const alert = useAlert()
    const { auth } =useContext(AuthContext)
    const location = useLocation();
    const a = location.state;
    const initialvalues ={
        name:"",
        cardNumber:"",
        expiry:"",
        cvv:"",
        coupon:""
    }
    const [formvalues,setFormvalues] = useState(initialvalues);
    const[formerrors,setFormerrors]=useState({})
    const [issubmit,setIssubmit] = useState(false)
    const handlechange = (e)=>{
        const {name,value} = e.target
        setFormvalues({ ...formvalues,[name]:value})
    }
    const handlesubmit = (e)=>{
        e.preventDefault()
        setFormerrors(validate(formvalues))
        setIssubmit(true)
    }
    const data = {}
    useEffect(()=>{
        if(Object.keys(formerrors).length===0 && issubmit){

            var z = a.lineItems.LineItems
            var data = {}
            data.userId = auth;
            data.shippingAddress=a.shippingAddress
            var data1={}
            data1.name = formvalues.name
            data1.cardNumber = formvalues.cardNumber
            data.paymentMethod=data1
            var data2 = []
            var sum = 0
            for(var i=0 ;i<z.length;i++){
                sum = sum + z[i].price
                var b = {}
                b.mobileId = z[i].id
                b.quantity = z[i].quantity
                b.title=z[i].title
                data2.push(b)
            }
            data.lineItems = data2
            data.subtotal = sum
            let dateObj = new Date()
            data.date = dateObj
            axios.post("http://localhost:8081/createorder",data).then((res)=>{
                    console.log(res.data)
                    alert.success("order placed")
                }).catch((err)=>{
                    alert.error(err.message)
                })

        }
    },[formerrors])
    const validate = (values)=>{
        const errors={}
        if(!values.name){
            errors.name = "name is required"
        }
        if(!values.cardNumber){
            errors.cardNumber = "Card Number is required"
        }
        if(!values.expiry){
            errors.expiry = "expiry date is required"
        }
        if(!values.cvv){
            errors.cvv = "cvv is required"
        }
        return errors;
    
    }
    return(
        <>
        <br></br>

    <div className="home">
<div class="container p-0">
        <div class="card px-4">
            <p class="h8 py-3">Payment Details</p>
            <form onSubmit={handlesubmit}>
            <div class="row gx-3">
                
                        <div class="col-12">
                            <div class="d-flex flex-column">
                                <p class="text mb-1">Person Name</p>
                                <input class="form-control mb-3" name="name" type="text" placeholder="Name" value={formvalues.name} onChange={handlechange}/>
                                <p style={{color:"red"}}>{formerrors.name}</p>
                                <br></br>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="d-flex flex-column">
                                <p class="text mb-1">Card Number</p>
                                <input class="form-control mb-3" name="cardNumber" type="text" placeholder="1234 5678 435678" value={formvalues.cardNumber} onChange={handlechange}/>
                                <p style={{color:"red"}}>{formerrors.cardNumber}</p>
                                <br></br>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex flex-column">
                                <p class="text mb-1">Expiry</p>
                                <input class="form-control mb-3" name="expiry" type="text" placeholder="MM/YYYY" value={formvalues.expiry} onChange={handlechange}/>
                                <p style={{color:"red"}}>{formerrors.expiry}</p>
                                <br></br>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex flex-column">
                                <p class="text mb-1">CVV/CVC</p>
                                <input class="form-control mb-3 pt-2 " name="cvv" type="password" placeholder="***" value={formvalues.cvv} onChange={handlechange}/>
                                <p style={{color:"red"}}>{formerrors.cvv}</p>
                            </div>
                        </div> 
                        <div class="col-6">
                            <div class="d-flex flex-column">
                                <p class="text mb-1">Have a coupon code?</p>
                                <input class="form-control mb-3 pt-2 " name="coupon" type="text" placeholder="Enter Coupon Code Here" value={formvalues.coupon} onChange={handlechange}/>
                            </div>
                        </div> 
                        <div class="col-12">
                            <button class="btn btn-primary mb-3">
                                <span class="ps-3">Pay</span>
                                <span class="fas fa-arrow-right"></span>
                            </button>
                        </div>
            </div>
            </form>

        </div>
    </div>
    </div>
    </>)
}
export default Payment;