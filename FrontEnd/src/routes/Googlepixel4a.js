import ProductReviewChat from "../components/ProductReviewChat";
import Navbard from "../components/Navbard";
import Image1 from '../images/googlepixel4a-2.jpg';
import Image2 from '../images/googlepixel4a-1.jpg';
import Image3 from '../images/googlepixel4a-3.jpg';
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
  const productDescription = `Google Pixel 4a , 22,950 Rs . 1. Display: The Pixel 4a features a 5.81-inch OLED display with a resolution of 1080 x 2340 pixels and a pixel density of 443 pixels per inch. It has a 19.5:9 aspect ratio and a hole-punch cutout for the front camera.

  2. Processor: The Pixel 4a is powered by a Qualcomm Snapdragon 730G processor with 6GB of RAM. The processor is designed for gaming and offers smooth performance.
  
  Storage: The phone comes with a single storage option of 128GB, which is not expandable via a microSD card.
  Battery: The Pixel 4a has a 3,140mAh battery with support for 18W fast charging. It also supports USB Power Delivery 2.0.
  Camera: The phone has a 12.2-megapixel rear camera with an f/1.7 aperture, optical image stabilization (OIS), and dual pixel phase detection autofocus (PDAF). It can record 4K video at 30 frames per second (fps) and 1080p video at up to 120fps. The front-facing camera is an 8-megapixel sensor with an f/2.0 aperture.
  Software: The Pixel 4a runs on Android 11 out of the box and is eligible for at least three years of OS and security updates.
  Connectivity: The phone supports dual-band Wi-Fi, Bluetooth 5.0, GPS, NFC, and a USB Type-C port for charging and data transfer.
  Other features: The Pixel 4a has a rear-mounted fingerprint sensor, an accelerometer, a gyro sensor, a proximity sensor, and a compass. It also has stereo speakers and a 3.5mm headphone jack. `;

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
        <h1 className="product-name"> Google Pixel 4a</h1>
        <p className="product-price">22,950 Rs</p>
        <div className="product-description-text">
          <ul>
          <li>
          <p3>Display: The Pixel 4a features a 5.81-inch OLED display with a resolution of 1080 x 2340 pixels and a pixel density of 443 pixels per inch. It has a 19.5:9 aspect ratio and a hole-punch cutout for the front camera.</p3>
        </li>
        <li>
<p3>Processor: The Pixel 4a is powered by a Qualcomm Snapdragon 730G processor with 6GB of RAM. The processor is designed for gaming and offers smooth performance.</p3>
</li>
<li>
<p3>Storage: The phone comes with a single storage option of 128GB, which is not expandable via a microSD card.</p3>
</li>
<li>
<p3>Battery: The Pixel 4a has a 3,140mAh battery with support for 18W fast charging. It also supports USB Power Delivery 2.0.</p3>
</li>
<li>
<p3>Camera: The phone has a 12.2-megapixel rear camera with an f/1.7 aperture, optical image stabilization (OIS), and dual pixel phase detection autofocus (PDAF). It can record 4K video at 30 frames per second (fps) and 1080p video at up to 120fps. The front-facing camera is an 8-megapixel sensor with an f/2.0 aperture.</p3>
</li>
<li>
<p3>Software: The Pixel 4a runs on Android 11 out of the box and is eligible for at least three years of OS and security updates.</p3>
</li>
<li>
<p3>Connectivity: The phone supports dual-band Wi-Fi, Bluetooth 5.0, GPS, NFC, and a USB Type-C port for charging and data transfer.</p3>
</li>
<li>
<p3>Other features: The Pixel 4a has a rear-mounted fingerprint sensor, an accelerometer, a gyro sensor, a proximity
   sensor, and a compass. It also has stereo speakers and a 3.5mm headphone jack.</p3>
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