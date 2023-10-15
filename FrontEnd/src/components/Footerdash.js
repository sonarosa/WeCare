import React from "react";
import "./Footerdash.css";
import  { ReactComponent as Logo } from "../images/cart.svg";
const Footerdash = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
          <h1>ShopSense</h1>
          
          </div>
          <div className="footer-social-media">
            <a href="https://twitter.com/shopsense" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://facebook.com/shopsense" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://instagram.com/shopsense" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
          <div className="footer-copyright">
            &copy; Shopsense 2023. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  export default Footerdash;