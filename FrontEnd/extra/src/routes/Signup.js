import React,{useState} from "react";
import "./Signup.css";

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup=()=>{
  const navigate = useNavigate();
  const [user,setUser]=useState({
    name:"", email:"", password:"", conpassword:""
  });

  let name,value;
  const handleInputs=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
  }
  
  const postdata=async(e)=>{
     e.preventDefault();
     const{name,email,password,conpassword}=user;
      const res = await fetch("/",{method:"POST",
      headers:{
      "Content-Type":"/json"
      },
      body:JSON.stringify({
        name,email,password,conpassword
      })

    });
    const data =await res.json();
    if(res.status(422)||!data){
      window.alert("Invalid registration");
      console.log("Invalid registration");
    }else{
      window.alert("Registration successfull");
      console.log("Registration successfull");
      navigate("/login");
    }
  }
    return(
        <div className="signup-body" style={{background:"linear-gradient(90deg, #ee6352, purple, #ee6352)",
           animation: "gradient 15s ease infinite",
           height: "300%",}}>
       <div className="cover">
          <div className="form-body">
          <form method="POST">
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            name="name" 
            className="form-control"
            id="uname"
            placeholder="Username"
            value={user.name}
            onChange={handleInputs}
          />
        </div>
        <div className="mb-3">
          <label>Email </label>
          <input
            type="email"
            name="email" 
            className="form-control"
            placeholder="Enter email"
            id="email"
            value={user.email}
            onChange={handleInputs}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            id="password"
            value={user.password}
            onChange={handleInputs}
          />
        </div>
        <div className="mb-3">
          <label>Confirm password</label>
          <input type="password" className="form-control" placeholder="Confirm password"
          id="cpassword"
          name="conpassword"
          value={user.conpassword}
          onChange={handleInputs} />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" id="signupbtn" onClick={postdata}>
            SUBMIT
          </button>
        </div>
        <p className="forgot-password text-right">
          <Link to="/signin">
          <button className="sign-in">Already registered sign in?
          </button>
          </Link>
        </p>
      </form>   
          </div>
       </div>
       </div>
    );
    
}

export default Signup;