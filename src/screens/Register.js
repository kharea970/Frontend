import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAlert } from 'react-alert'
const Register =()=>{
	const alert = useAlert()
	const navigate = useNavigate();
	const initialvalues = {
		user_name:"",
		user_email:"",
		user_password:""
	};

	const [formvalues,setFormvalues] = useState(initialvalues)
	const [formerrors,setFormErrors] = useState({})
	const [isSubmit,setIsSubmit] = useState(false)
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormvalues({ ...formvalues, [name]: value });
	  };
	const handleSubmit =(event)=>{
		event.preventDefault();
		setFormErrors(validate(formvalues))
		setIsSubmit(true)
	}
	useEffect(()=>{
		console.log(formerrors)
		if(Object.keys(formerrors).length===0 && isSubmit){
			console.log(formvalues)
			axios.post("http://localhost:8081/registeruser",formvalues).then((res)=>{
				console.log(res.data)
				alert.success('account created')
				navigate("/login");
			}).catch((err)=>{
				alert.error('We are trying to solve the isssue please come back after some time')
			})
		}
	},[formerrors])
	const validate = (values)=>{
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.user_name) {
		  errors.user_name = "name is required!";
		}
		if (!values.user_email) {
		  errors.user_email = "Email is required!";
		} else if (!regex.test(values.user_email)) {
		  errors.user_email = "This is not a valid email format!";
		}
		if (!values.user_password) {
		  errors.user_password = "Password is required";
		} else if (values.user_password.length < 4) {
		  errors.user_password = "Password must be more than 4 characters";
		} else if (values.user_password.length > 10) {
		  errors.user_password = "Password cannot exceed more than 10 characters";
		}
		return errors;
	}

    return(<>
           	<section className="h-100" style={{marginBottom:"30px"}}>
		<div className="container h-100">
			<div className="row justify-content-sm-center h-100">
				<div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
					<div className="text-center my-5">
						<img src="../assets/logo.png" alt="logo" width="100" />
					</div>
					<div className="card shadow-lg">
						<div className="card-body p-5">
							<h1 className="fs-4 card-title fw-bold mb-4">Register</h1>
							<form onSubmit={handleSubmit} noValidate>
								<div className="mb-3">
									<label htmlfor="exampleFormControlInput2" className="form-label">Name</label>
									<input type="text" 
									className="form-control"  
									name="user_name"
									id="exampleFormControlInput2"  
									placeholder="your name" 
									value = {formvalues.user_name}
									onChange={handleChange}
									/>
								</div> 
								<p style={{color:"red"}}>{formerrors.user_name}</p>                       
								<div className="mb-3">
									<label htmlfor="exampleFormControlInput1" className="form-label">Email address</label>
									<input type="email" 
									className="form-control" 
									name="user_email"
									id="exampleFormControlInput1"  
									placeholder="name@example.com" 
									value={formvalues.user_email}
									onChange={handleChange}
									/>
								</div>
								<p style={{color:"red"}}>{formerrors.user_email}</p> 
								<div class="mb-3">
									<label htmlfor="inputPassword" className="form-label">Password</label>
									<input type="password" 
									class="form-control"  
									id="inputPassword" 
									name="user_password"
									value={formvalues.user_password}
									onChange={handleChange}
									/>
								</div>
								<p style={{color:"red"}}>{formerrors.user_password}</p> 
								<button  class="btn btn-primary ms-auto" style={{marginLeft:"120px"}}>
											Register
								</button>
							</form>	
						</div>
						<div className="card-footer py-2 border-0">
                        <div class="text-center">
								Already have an account <Link to="/login" class="text-dark">Login</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section> 
	<br></br>
    </>)
}
export default Register;