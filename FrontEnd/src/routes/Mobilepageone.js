import React, { useState } from "react";
import "./Mobilepageone.css";
import { Link, useNavigate } from "react-router-dom";
import PageScroller from "../components/PageScroller";
import MobileImage1 from '../images/googlepixel4a-2.jpg';
import MobileImage2 from '../images/googlepixel4a-1.jpg';
import MobileImage3 from '../images/googlepixel4a-3.jpg';
import Navbard from "../components/Navbard";
import { useColor } from '../routes/ColorContext';

const Mobilepageone = () => {
  // sample product data
  const { backgroundColor } = useColor();
  const [spokenText, setSpokenText] = useState("");
  let utterance = null;
  const handleSpeakDescription = (text) => {
    if ('speechSynthesis' in window) {
      utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      console.log("Speech synthesis is not supported in this browser.");
    }
  };
  
  const handlePauseDescription = () => {
    if ('speechSynthesis' in window && utterance) {
      speechSynthesis.pause();
    }
  };
  return (
    <div style={{backgroundColor}}>
         <Navbard/>
      <div className="product-cards-container">
        <div className="product-card">
          <div className="product-images-container">
          <img src={MobileImage1} alt="Product 1" className="product-image"id="image1"/>
            <img src={MobileImage2} alt="Product 2" className="product-image" id="image2"/>
            <img src={MobileImage3} alt="Product 3" className="product-image"id="image3"/>
          </div>
         
          <div className="product-details">
            <h3>Google Pixel 4a</h3>
            <h2>22,950 Rs</h2>
            <p1 className="product-description">Budget-friendly smartphone with a 5.81-inch OLED display, Snapdragon 730G processor, 6GB of RAM, 128GB of storage, and a 12.2-megapixel rear camera. It also features a headphone jack, a fingerprint sensor, and runs on Android 10.</p1>
            <div className="product-icons">
              <span className="product-icon-heart"><i className="fas fa-heart"></i></span>
              <span className="product-icon-cart"><i className="fas fa-shopping-cart"></i></span>
              <Link to="/Googlepixel4a"><button className="buy-now-btn">Buy Now{" >"}</button></Link>
        <button
      className={`speak-description-button`}
      onClick={() => {
        setSpokenText("Google Pixel 4a.22950 rupees. Budget-friendly smartphone with a 5.81-inch OLED display, Snapdragon 730G processor, 6GB of RAM, 128GB of storage, and a 12.2-megapixel rear camera. It also features a headphone jack, a fingerprint sensor, and runs on Android 10.");
        handleSpeakDescription(spokenText);
      }}><i className="fas fa-volume-up"></i>
    </button>
            </div>
          </div>
        </div>
        <div className="product-card">
          <div className="product-images-container">
            <img src="../images/redmi11pro-1.jpg" alt="Product 2" className="product-image" id="image1"/>
            <img src="../images/redmi11pro-2.jpg" alt="Product 2" className="product-image" id="image2"/>
            <img src="../images/redmi11pro-3.jpg" alt="Product 2" className="product-image"id="image3"/>
            </div>
         
          <div className="product-details">
            <h3>Redmi 11 </h3>
            <h2>11,542 Rs</h2>
            <p className="product-description">A Smartphone from Xiaomi with a 6.55-inch IPS LCD display, MediaTek Helio G25 processor, 4GB or 6GB of RAM, 64GB or 128GB of storage, and a 50-megapixel rear camera. It also features a 5,000mAh battery, a side-mounted fingerprint sensor, and runs on MIUI 12 based on Android 11.</p>
            <div className="product-icons">
              <span className="product-icon-heart"><i className="fas fa-heart"></i></span>
              <span className="product-icon-cart"><i className="fas fa-shopping-cart"></i></span>
              <button className="buy-now-btn">Buy Now{" >"}</button>
              <button
      className={`speak-description-button`}
      onClick={() => {
        setSpokenText("Redmi 11. 11542 rupees.A Smartphone from Xiaomi with a 6.55-inch IPS LCD display, MediaTek Helio G25 processor, 4GB or 6GB of RAM, 64GB or 128GB of storage, and a 50-megapixel rear camera. It also features a 5,000mAh battery, a side-mounted fingerprint sensor, and runs on MIUI 12 based on Android 11.");
        handleSpeakDescription(spokenText);
      }}><i className="fas fa-volume-up"></i>
    </button>
            </div>
          </div>
        </div>
        <div className="product-card">
          <div className="product-images-container">
            <img src="../images/redmi11pro-1.jpg" alt="Product 2" className="product-image" id="image1"/>
            <img src="../images/redmi11pro-2.jpg" alt="Product 2" className="product-image" id="image2"/>
            <img src="../images/redmi11pro-3.jpg" alt="Product 2" className="product-image"id="image3"/>
          </div>
      
          <div className="product-details">
            <h3>Samsung F26</h3>
            <p className="product-description">Product description</p>
            <div className="product-icons">
              <span className="product-icon-heart"><i className="fas fa-heart"></i></span>
              <span className="product-icon-cart"><i className="fas fa-shopping-cart"></i></span>
              <button className="buy-now-btn">Buy Now{" >"}</button>
              <span className="product-icon-volume"><i className="fas fa-volume-up"></i></span>
            </div>
          </div>
        </div>
        </div>
      <PageScroller/>
    </div>
  );
};

export default Mobilepageone;
