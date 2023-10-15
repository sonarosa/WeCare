import React, { useState } from 'react';
import './ProductDescription.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaHeart, FaShare, FaCartPlus } from 'react-icons/fa';

const ProductDescription = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleAddToCartClick = () => {
    setIsAdded(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="product-description">
      <div className="product-images">
        <Slider {...settings}>
          <div>
            <img
              src="https://via.placeholder.com/500x500.png?text=Product+Image+1"
              alt="Product Image 1"
              className="product-image"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/500x500.png?text=Product+Image+2"
              alt="Product Image 2"
              className="product-image"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/500x500.png?text=Product+Image+3"
              alt="Product Image 3"
              className="product-image"
            />
          </div>
        </Slider>
      </div>
      <div className="product-info">
        <h1 className="product-name">Product Name</h1>
        <p className="product-price">$99.99</p>
        <p className="product-description-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="product-actions">
          <button className="like-button" onClick={handleLikeClick}>
            <FaHeart className={`like-icon ${isLiked ? 'liked' : ''}`} />
          </button>
          <button className="share-button">
            <FaShare className="share-icon" />
          </button>
          <button className="add-to-cart-button" onClick={handleAddToCartClick}>
            <FaCartPlus className="add-to-cart-icon" />
            {isAdded ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
