import React,{useState,useEffect,useContext} from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAlert } from 'react-alert'
import AuthContext from '../context/AuthProvider';

const Login = (props) =>{
	const { setAuth } =useContext(AuthContext)
	const alert = useAlert()
	const navigate = useNavigate();
	const initialvalues = {
		user_email:"",
		user_password:""
	};

	const [formvalues,setFormvalues] = useState(initialvalues);

	const handleChange = (e)=>{
		const {name,value} = e.target;
		setFormvalues({ ...formvalues,[name]:value});
	}
	const handleSubmit = (event)=>{
		event.preventDefault();
		axios.get(`http://localhost:8081/finduserbyemail/${formvalues.user_email}`).then((res)=>{
			if(res.data.user_password===formvalues.user_password){
				setAuth(res.data.user_id)
				navigate('/')
				alert.success("successfully logged in")
			}else{
				alert.info('wrong credentials')
			}
		}).catch((err)=>{
			alert.error(err.message)
		})
	}

    return(
    <>
       	<section className="h-100" style={{marginBottom:"120px"}}>
		<div className="container h-100">
			<div className="row justify-content-sm-center h-100">
				<div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
					<div className="text-center my-5">
						<img src="../assets/logo.png" alt="logo" width="100" />
					</div>
					<div className="card shadow-lg">
						<div className="card-body p-5">
							<h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                            <form onSubmit={handleSubmit}>
								<div className="mb-3">
									<label htmlfor="exampleFormControlInput1" className="form-label">Email address</label>
									<input type="email" 
									className="form-control" 
									id="exampleFormControlInput1"
									name="user_email"
									value={formvalues.user_email}
									onChange={handleChange}
									placeholder="name@example.com"/>
								</div>
								<div class="mb-3">
									<label htmlfor="inputPassword" className="form-label">Password</label>
									<input type="password" 
									class="form-control" 
									name="user_password"
									value={formvalues.user_password}
									onChange={handleChange}
									id="inputPassword"
									/>
								</div>
								<button class="btn btn-primary ms-auto" style={{marginLeft:"120px"}}>
											Login
								</button>
							</form>
						</div>
						<div className="card-footer py-3 border-0">
                        <div class="text-center">
								Don't have an account? <Link to="/register" class="text-dark">Create One</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section> 
    </>
    )
}
export default Login;