import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "./UserContext";

const Signup = () => {

  const navigate = useNavigate();
  const { setUserCon } = useUserContext();
  const [user,setUser] = useState({
    name: "",
    email: "",
    password: "",
    conpassword: "",
  });

  let name,value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value})
  }

  const handleSubmit = async (e) => {
    console.log("submit has pressed");
    e.preventDefault();
    

    const { name, email, password, conpassword } = user;
    // const res = await fetch("https://ecommersebackend-elrk.onrender.com/api/v1/register", {
      const res = await fetch("http://localhost:4000/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
        conpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 500 ||!data) {
      window.alert("Invalid registration");
      window.alert(res.statusText)
      console.log("Invalid registration");
    } else {
      console.log(data)
      window.alert("Registration successful");
      localStorage.setItem("user", JSON.stringify(user));
      console.log("Registration successful");
      setUserCon(user);
      navigate("/Signin");
    }
    // return axios.post("http://localhost:4000/api/v1/register")
  };

  return (
    <div
      className="signup-body"
    >
      <div className="cover">
        <div className="form-body">
          <form method = "POST" onSubmit={handleSubmit} className="formsetting"> 
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
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                id="cpassword"
                name="conpassword"
                value={user.conpassword}
                onChange={handleInputs}
              />
            </div>
            <div className="d-grid">
              <button
                type="submit"
                className="btn-primary-signup"
                id="signupbtn"
              >
                SUBMIT
              </button>
            </div>
            <p className="forgot-password text-right">
              <Link to="/signin">
                <button className="sign-in">
                  Already registered sign in?
                </button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
