import React from 'react'

const Footer = ()=>{
    return(
        <footer className="page-footer font-small blue pt-4" style={{ backgroundColor:"rgb(33,150,243)" }}>
        <div className="container-fluid text-center text-md-left">
        <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h4 className="text-uppercase" style={{ color:"white"}}><img src="../assets/logo.png" style={{width:"30%"}} alt=""/></h4>
          <p style={{ color:"white" }}>We try to provide our customers with best Covers for their devices</p>
        </div>
        <hr className="clearfix w-100 d-md-none pb-3" />
        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Mobile Brands</h5>
          <ul className="list-unstyled" >
            <li>
              <a href="buying.html" style={{color:"black",textDecoration:"none",fontFamily:"Merriweather"}}>Iphone</a>
            </li>
            <li>
              <a href="buying.html" style={{color:"black",textDecoration:"none",fontFamily:"Merriweather"}}>Google Pixel</a>
            </li>
            <li>
              <a href="buying.html" style={{color:"black",textDecoration:"none",fontFamily:"Merriweather"}}>Xiaomi</a>
            </li>
            <li>
              <a href="buying.html" style={{color:"black",textDecoration:"none",fontFamily:"Merriweather"}}>OnePlus</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 mb-md-0 mb-3">
          <ul className="list-unstyled" >
            <li>
              <a href="landing.html" style={{color:"greenYellow",textDecoration:"none",fontFamily:"Merriweather"}}>FANBOOK</a>
            </li>
            <li>
              <a href="offers.html" style={{color:"greenYellow",textDecoration:"none",fontFamily:"Merriweather"}}>OFFER</a>
            </li>
            <li>
              <a href="feedback.html" style={{color:"greenYellow",textDecoration:"none",fontFamily:"Merriweather"}}>Review</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright text-center py-s3">© 2020 Copyright:
    </div>
  </footer>
    )
}
export default Footer