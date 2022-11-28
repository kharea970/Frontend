import React,{useState,useEffect,useContext} from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';
import { useAlert } from 'react-alert'

const Checkout = ()=>{
    const navigate = useNavigate();
    const alert = useAlert()
    const { auth } =useContext(AuthContext)
    const location = useLocation();
    const a = location.state;
    //console.log(a.LineItems)

    const initailValues = {
        "firstname": "",
        "lastname": "",
        "address": "",
        "address2": "",
        "country": "",
        "state": "",
        "zip": ""
    }
    const [formvalues,setFormvalues] = useState(initailValues)
    const [formerrors,setFormerrors] = useState({})
    const [issubmit,setIssubmit] = useState(false)
    const handlechange = (e)=>{
        const {name,value} = e.target
        setFormvalues({ ...formvalues,[name]:value})
    }
    const handlesubmit = (e)=>{
        e.preventDefault();
        if(auth===null || Object.keys(auth).length === 0){
            alert.error("please login first")
        }else{
            console.log(auth)
            setFormerrors(validate(formvalues))
            setIssubmit(true)
        }

    }
    useEffect(()=>{
        console.log(formerrors)
        if(Object.keys(formerrors).length === 0 &&issubmit){
            console.log(formvalues)
            navigate('/payment',{state:{lineItems:a,shippingAddress:formvalues}})
        }
    },[formerrors])
    const validate = (values)=>{
        const errors = {}
        if(!values.firstname){
            errors.firstname = "firstname is required!"
        }
        if(!values.lastname){
            errors.lastname = "lastname is required!"
        }
        if(!values.address){
            errors.address = "address is required!"
        }
        if(!values.country){
            errors.country = "country is required!"
        }
        if(!values.state){
            errors.state = "state is required!"
        }
        if(!values.zip){
            errors.zip = "zip is required!"
        }
        return errors
    }
    return(
    <>
        <div className="container">
            <div className="py-5 text-center" style={{marginLeft:"330px"}}>
                <div className="row">
            <div className="col-md-8 order-md-1">
                <h3 className="mb-3">Address For Shipping</h3>
                <hr className="mb-4"/>
                <form onSubmit={handlesubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlfor="firstName1" className='form-label'>First name</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="firstname1" 
                            name="firstname" 
                            placeholder="" 
                            value={formvalues.firstname} 
                            onChange={handlechange}/>
                            <p style={{color:"red"}}>{formerrors.firstname}</p>
                        </div>
                        
                        <div className="col-md-6 mb-3">
                            <label htmlfor="lastName1" className='form-label'>Last name</label>
                            <input type="text" 
                            className="form-control" 
                            name="lastname" 
                            id="lastname1" 
                            placeholder="lastname" 
                            value={formvalues.lastname} 
                            onChange={handlechange}/>
                            <p style={{color:"red"}}>{formerrors.lastname}</p>
                        </div>
                        
                    </div>
                    <div className="mb-3">
                        <label htmlfor="addressa" className='form-label'>Address</label>
                        <input type="text" 
                        className="form-control" 
                        name="address" 
                        id="adderssa"
                        placeholder="1234 Main St" 
                        value={formvalues.address} 
                        onChange={handlechange}/>
                        <p style={{color:"red"}}>{formerrors.address}</p>
                    </div>
                    
                    <div className="mb-3">
                        <label htmlfor="address2a" className='form-label'>Address 2 <span className="form-label">(Optional)</span></label>
                        <input type="text" className="form-control" id="adderss2a" name="address2" placeholder="Apartment or suite" value={formvalues.address2} onChange={handlechange}/>
                    </div>
                    <div className="row">
                        <div className="col-md-5 mb-3">
                            <label htmlfor="country1" className='form-label'>Country</label>
                            <input type="text" className="form-control w-100" id="country1" name="country"  value={formvalues.country} onChange={handlechange}/>
                            <p style={{color:"red"}}>{formerrors.country}</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlfor="state1" className='form-label'>State</label>
                            <input type="text" className="form-control d-block w-100" id="state1" name="state"  value={formvalues.state} onChange={handlechange}/>
                            <p style={{color:"red"}}>{formerrors.state}</p>
                        </div>
                        
                        <div className="col-md-3 mb-3">
                            <label htmlfor="zip1" className='form-label'>Zip</label>
                            <input type="text" className="form-control" id="zip1" name="zip" placeholder="" value={formvalues.zip} onChange={handlechange}/>
                            <p style={{color:"red"}}>{formerrors.zip}</p>
                        </div>
                    </div>
                    <hr className="mb-4"/>
                    <button className="btn btn-primary btn-lg btn-block">Continue to checkout</button>
                </form>



            </div>
        </div>
            </div>
        </div>
        <br></br>
    </>
    )
}
export default Checkout