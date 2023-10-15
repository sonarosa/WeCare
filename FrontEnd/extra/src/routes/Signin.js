import React from "react";
import "./Signin.css";
import { Link } from 'react-router-dom';
const Signin=()=>{
    return(
        <div className="background-signin" style={{ overflow: "auto",
            background: "linear-gradient(315deg, rgb(84, 136, 197) 13%, rgba(207,182,229) 38%, rgb(76, 186, 102) 68%, rgba(249,240,194) 98%)",
            animation: "gradient 15s ease infinite",
           height: " 100%",
           animation: "wave 10s -3s ease in",
         
            
          }}>
       <div className="cover">
          <div className="form-body">
          <form>
        <h4>Login</h4>
        <div className="mb-3" id="username">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
    
        <div className="mb-3" id="password">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid" id="submitbtn">
          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </div>
          <Link to="/signup">
          <button className="sign-up">Forgot password?
          </button>
          </Link>
      </form>   
          </div>
       </div>
       </div>
    )
}
export default Signin;