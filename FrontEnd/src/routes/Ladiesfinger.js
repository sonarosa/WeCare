import ProductReviewChat from "../components/ProductReviewChat";
import Navbard from "../components/Navbard";
import Image1 from '../images/ladiesfinger-1.jpg';
import Image2 from '../images/ladiesfinger-2.jpg';
import Image3 from '../images/ladiesfinger-2.jpg';
import "./Googlepixel4a.css";
import Footerdash from "../components/Footerdash"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React, { useState,useEffect  } from "react";
import { useColor } from '../routes/ColorContext'; // Adjust the path based on your actual folder structure
const Ladiesfinger= () => {
  const { backgroundColor } = useColor();
  const [isLiked, setIsLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isDescriptionActivated, setIsDescriptionActivated] = useState(false);
  const Navigate = useNavigate();
  const [isSpeakingDescription, setIsSpeakingDescription] = useState(false); // New state
  let utterance = null; // Added variable to store utterance instance


  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleAddToCartClick = () => {
    setIsAdded(true);
  };
  const handleBuyNowClick = () => {
    Navigate("/otp");
    //return otpgenerated;

  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const productDescription = `Ladies finger,50 Rupees, Ladies finger also known as okra or bhindi, is a green, elongated vegetable with a mild taste and a slightly slippery texture when cooked. It is commonly used in various cuisines around the world, particularly in Indian, Middle Eastern, and Southern U.S. cooking. `;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleSpeakDescription = () => {
    if ('speechSynthesis' in window) {
      utterance = new SpeechSynthesisUtterance(productDescription);
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
  const handleKeyDown = (event) => {
    if (event.code === "Digit0") {
      setIsDescriptionActivated(true);
      setIsSpeakingDescription(true);
      handleSpeakDescription();
    } else if (event.code === "Digit1") {
      setIsDescriptionActivated(false);
      setIsSpeakingDescription(false);
      handlePauseDescription();
    } else if (event.code === "Digit2") {
      handleBuyNowClick();
    } else if (event.code === "Digit3") {
      handleLikeClick();
    }
  };
  return (
    <div className="Googlepixel" style={{ backgroundColor }}>
      <Navbard/>
    <div className="product-description">
      <div className="product-images">
        <Slider {...settings}>
          <div>
          <img src={Image1} alt="ProductImage1" className="product-image" />

          </div>
          <div>
          <img src={Image2} alt="ProductImage2" className="product-image" />

          </div>
          <div>
          <img src={Image3} alt="ProductImage3" className="product-image" />
          </div>
        </Slider>
      </div>
      <div className="product-info">
        <h1 className="product-name">Ladies Finger</h1>
        <p className="product-price">50Rs</p>
        <div className="product-description-text">
          <ul>
          <li>
        <p3>Ladies finger, also known as okra or bhindi, is a green, elongated vegetable with a mild taste and a slightly slippery texture when cooked. </p3>
        </li>
        <li>
<p3>It is commonly used in various cuisines around the world, particularly in Indian, Middle Eastern, and Southern U.S. cooking.</p3>
</li>

   </ul>
        </div>
        <div className="product-actions">
          <button className="like-button" onClick={handleLikeClick}>
            <FaHeart className={`like-icon ${isLiked ? "liked" : ""}`} />
          </button>
          <button
            className="add-to-cart-button"
            onClick={handleAddToCartClick}
          >
            <FaCartPlus className="add-to-cart-icon" />
            {isAdded ? "Added to Cart" : "Add to Cart"}
          </button>
          <button className="buy-now-button" onClick={handleBuyNowClick}>
            Buy Now
          </button>
          <button
              className={`speak-description-button ${
                isDescriptionActivated ? "activated" : ""
              } ${isSpeakingDescription ? "speaking" : ""}`}
              onClick={handleSpeakDescription}
            >
              <i className="fa fa-volume-up" aria-hidden="true"></i>
            </button>
        </div>
        {isDescriptionActivated && (
            <p className="product-description-text">{productDescription}</p>
          )}
      </div>
    </div>
    <div className="product-review-box">
    <ProductReviewChat/>
    </div>
  <Footerdash/>
    </div>
  );
};
export default Ladiesfinger;