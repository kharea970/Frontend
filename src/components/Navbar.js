import React,{useEffect, useState,useContext} from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';
const Navbar = (props)=>{
  let authorize = false
  const [orderdata,setOrderdata] = useState(null)
  const { auth,setAuth } =useContext(AuthContext)
    if(auth === null || Object.keys(auth).length === 0){
      authorize=false
    }else{
      authorize=true
    }
    return(        
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"rgb(33,150,243)"}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img 
          src = "../assets/logo.png"
          height={16}
          alt="logo"
          loading='lazy'
          style = {{ marginTop:"-10px"}}
        />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/" style={{ color:"white" }}>HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about" style={{ color:"white" }}>ABOUT US</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/offer" style={{ color:"white" }}>OFFERS</Link>
          </li>
          <li className="nav-item">
            <Link hidden={!authorize} className="nav-link active" aria-current="page" to="/orders" style={{ color:"white" }}>YOUR ORDERS</Link>
          </li>
        </ul>
        <form className="d-flex">
              <div className="d-flex  justify-content-end">
                <div className="dropdown">
                  <i className="bi bi-person-circle dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:"30px",marginRight:"100px"}}>
                  </i>
                  <ul className="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuButton1">
                    <li hidden={authorize} style={{textAlign:"left"}}><Link className="dropdown-item " to="/login" id="login">Login</Link></li>
                    <li hidden={!authorize} style={{textAlign:"left"}}><Link className="dropdown-item" to="/login" id="logout" onClick={()=>setAuth(null)}>Logout</Link></li>
                    <li hidden={authorize} style={{textAlign:"left"}}><Link className="dropdown-item" to="/register" id="signup">SignUp</Link></li>
                  </ul>
                </div>
              </div>
          </form>
      </div>
    </div>
          </nav>)
}

export default Navbar;
