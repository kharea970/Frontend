import React,{useEffect, useState} from "react";
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
const SeeReview = () =>{
    const navigate = useNavigate();
    const [rdata,setRdata] = useState({})
    const location = useLocation();
    const a = location.state;
    useEffect(()=>{
        
        axios.get(`http://localhost:8081/getreviewsbymobileid/${a.id.id}`).then((res)=>{
            setRdata(res.data)
        }).catch((err)=>{
            console.log(err.message)
        })
    },[])

    {/* {JSON.stringify(rdata)} */}
    if(rdata==={} || Object.keys(rdata).length === 0){
        return(<div className="order">
        <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">

<div class="col-lg-8 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Ratings</h4>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Rating</th>
                          <th>Text</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td rowSpan={4}>No reviews yet</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
            </div>
              </div>
            </div>
            <button className="btn btn-outline-dark mt-auto" style={{marginLeft:"650px"}} onClick={()=>navigate('/addreview',{state:{id:a.id.id}})}>Give Review</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
     </div>)
    }
    return(<div className="order">
    <div class="page-content page-container" id="page-content">
<div class="padding">
    <div class="row container d-flex justify-content-center">

<div class="col-lg-8 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Ratings</h4>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Rating</th>
                      <th>Comment</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {rdata.map((item,index)=>{
                      return(
                        <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.rating}</td>
                        <td>{item.text}</td>
                        
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
        <button className="btn btn-outline-dark mt-auto" style={{marginLeft:"650px"}} onClick={()=>navigate('/addreview',{state:{id:a.id.id}})}>Give Review</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


 </div>)
}
export default SeeReview;