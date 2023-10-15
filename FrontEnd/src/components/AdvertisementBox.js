import React from 'react';
import './AdvertisementBox.css';
import adImage1 from '../images/Ad1.jpg';
import adImage2 from '../images/Ad2.jpg';
import adImage3 from '../images/Ad3.jpg';
const AdvertisementBox = () => {
  return (
    <div className="advertisement-box">
      <div className="advertisement-slider">
        <div className="advertisement-slide">
        <img src={adImage1} alt="Advertisement" />
        </div>
        <div className="advertisement-slide">
        <img src={adImage2} alt="Advertisement" />
        </div>
        <div className="advertisement-slide">
        <img src={adImage3} alt="Advertisement" />
        </div>
      </div>
      <div className="advertisement-dots">
        <span className="advertisement-dot"></span>
        <span className="advertisement-dot"></span>
        <span className="advertisement-dot"></span>
      </div>
    </div>
  );
};

export default AdvertisementBox;