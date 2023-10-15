import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h6>WeCare</h6>
        <p1>We're committed to making online shopping accessible .</p1>
      </div>
      <div className="footer-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-social">
        <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
        <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
        <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
