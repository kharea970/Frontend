import React,{useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import { useNavigate,useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';
const Home = (props)=>{
  const { auth } =useContext(AuthContext)
  console.log(auth)
    return (
      <> 
        <Carousel />
        <section>
        <center>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  Select Your Iphone
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <li><Link class="dropdown-item" to="/buying"  state={{category:"Iphone13"}}>Iphone13</Link></li>
                  <li><Link class="dropdown-item" to="/buying" state={{category:"Iphone13 pro"}}>Iphone13 pro</Link></li>
                  <li><Link class="dropdown-item" to="/buying" state={{category:"Iphone13 mini"}}>Iphone13 mini</Link></li>
                </ul>
              </div>
              <br />
        </center>
      </section>
      <br />
      <br />
      </>
    )
}
export default Home;
