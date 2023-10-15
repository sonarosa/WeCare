import React, { useState } from "react";
import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    // if (user.password !== user.confirmPassword) {
    //   window.alert("Passwords do not match.");
    //   return;
    // }

    const { email, password } = user;

    try {
      //const res = await fetch("https://ecommersebackend-elrk.onrender.com/api/v1/login", {
      const res = await fetch("http://localhost:4000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.status === 200) {
        window.alert("Login successful");
        navigate("/dashboard");
      } else {
        window.alert(data.message);
      }
    } catch (err) {
      console.error(err);
      window.alert("An error occurred.");
    }
  };

  return (
    <div
      className="background-signin"
      style={{
        overflow: "auto",
        background:
          "white",
        animation: "gradient 15s ease infinite",
        height: " 100%",
        animation: "wave 10s -3s ease in",
      }}
    >
      <div className="cover">
        <div className="form-body">
          <form method="POST" onSubmit={handleSubmit}>
            <h4>Login</h4>
            <div className="mb-3">
              <label>Email</label>
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

            {/* <div className="mb-3">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm password"
                id="confirmPassword"
                value={user.confirmPassword}
                onChange={handleInputs}
              />
            </div> */}

            <div className="d-grid">
              <button type="submit" className="btn-primary">
                LOGIN
              </button>
            </div>

            <Link to="/signup">
              <button className="sign-up">Forgot password?</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
