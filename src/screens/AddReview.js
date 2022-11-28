import React,{useEffect, useState,useContext} from "react";
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import {FaStar} from 'react-icons/fa';
import AuthContext from '../context/AuthProvider';
import { useAlert } from 'react-alert'

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

const AddReview = ()=>{
    const alert = useAlert()
    const data = {}
    const location = useLocation();
    const a = location.state;
    data.mobileId = a.id
    const { auth } =useContext(AuthContext)
    data.userId = auth
    const [name,setName] = useState("")
    const [text,setText] = useState("")
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)
  

    const handleClick = value => {
      setCurrentValue(value)
    }
  
    const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
    };
  
    const handleMouseLeave = () => {
      setHoverValue(undefined)
    }
  
    const handleChange1 = (e)=>{
        setName(e.target.value)
    }

    const handleChange2 = (e)=>{
        setText(e.target.value)
    }

    const callsubmit = ()=>{
        if(auth === null || Object.keys(auth).length === 0){
            alert.error("please login first to give a review")
          }else{
        data.rating=currentValue
        data.text = text
        data.name = name
        
        axios.post("http://localhost:8081/createreview",data).then((res)=>{
            alert.success("review recieved")
        }).catch(err=>alert.error("please try again"))
    }}

    return(<div style={styles.container}>
        <h2>Give Your Rating</h2>
        <br></br>
            <div className="mb-4">
                <input type="text" 
                    className="form-control"  
                    name="user_name"
                    id="exampleFormControlInput2"  
                    placeholder="your name" 
                    value = {name}
                    onChange={handleChange1}
                />
			</div> 
        <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
        </div>
        <textarea
        placeholder="Explain in detail?"
        style={styles.textarea}
        value={text}
        onChange={handleChange2}
      />
    <button
        style={styles.button}
        onClick={()=>callsubmit()}
      >
        Submit
      </button>
    </div>)
}

const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom:"350px",
      marginTop:"20px"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300
    },
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      padding: 10,
    }
  
  };

export default AddReview