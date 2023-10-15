import React,{useState} from "react";
import "./Vegetablesone.css";
import { Link } from "react-router-dom";
import MobileImage1 from '../images/googlepixel4a-2.jpg';
import Navbard from "../components/Navbard";
import { useColor } from '../routes/ColorContext';

const Vegetablesone = () => {
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
      <Navbard />
      <div className="product-cards-container">
        <div className="product-card">
          <div className="product-images-container">
            <img src={MobileImage1} alt="Product 1" className="product-image" />
          </div>
          <div className="product-details">
            <h3 >Carrot</h3>
            <h2>50 Rs per kg</h2>
            <p className="product-description">Carrot is a root vegetable known for its vibrant orange color, although it can also come in other colors like purple, red, yellow, and white.</p>
            <div className="product-icons">
              <span className="product-icon-heart"><i className="fas fa-heart"></i></span>
              <span className="product-icon-cart"><i className="fas fa-shopping-cart"></i></span>
              <Link to="/carrot"><button className="buy-now-btn">Buy Now{" >"}</button></Link>
              <button
      className={`speak-description-button`}
      onClick={() => {
        setSpokenText("Carrot. 50 Ruppees per kg. Carrot is a root vegetable known for its vibrant orange color, although it can also come in other colors like purple, red, yellow, and white.");
        handleSpeakDescription(spokenText);
      }}
    ><i className="fas fa-volume-up"></i>   </button>
            </div>
          </div>
        </div>
        <div className="product-card">
          <div className="product-images-container">
            <img src={MobileImage1} alt="Product 1" className="product-image" />
          </div>
          <div className="product-details">
            <h3>Ladies Finger</h3>
            <h2>37 Rs per kg </h2>
            <p className="product-description">Ladies finger, also known as okra or bhindi, is a green, elongated vegetable with a mild taste and a slightly slippery texture when cooked.</p>
            <div className="product-icons">
              <span className="product-icon-heart"><i className="fas fa-heart"></i></span>
              <span className="product-icon-cart"><i className="fas fa-shopping-cart"></i></span>
              <Link to="/ladiesfinger"><button className="buy-now-btn">Buy Now{" >"}</button></Link>
              <button
      className={`speak-description-button`}
      onClick={() => {
        setSpokenText("Ladies finger,37 per kg .Ladies finger also known as okra or bhindi, is a green, elongated vegetable with a mild taste and a slightly slippery texture when cooked.");
        handleSpeakDescription(spokenText);
      }}
    ><i className="fas fa-volume-up"></i>   </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vegetablesone;
