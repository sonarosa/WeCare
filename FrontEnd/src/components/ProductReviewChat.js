import React, { useState } from "react";
import "./ProductReviewChat.css";
import EmojiPicker from "emoji-picker-react";
import StarRatings from "react-star-ratings";

const likeIcons = {
  liked: "\u2665",    // Solid heart for liked reviews
  notLiked: "\u2661" // Empty heart for not liked reviews
};
function ProductReviewChat() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [likedReviews, setLikedReviews] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [rating, setRating] = useState(0);

  function handleRatingChange(event) {
    setRating(Number(event.target.value));
  }
  function handleReviewSubmit(event) {
    event.preventDefault();
    setReviews([...reviews, {
      user: event.target.userName.value,
      message: newReview,
      images: event.target.images.files
    }]);
    setNewReview("");
  }

  function handleInputChange(event) {
    setNewReview(event.target.value);
  }

  function handleLike(index) {
    setLikedReviews([...likedReviews, index]);
  }

  function handleEmojiClick(emojiObject) {
    setNewReview(newReview + emojiObject.emoji);
    setShowEmojiPicker(false);
  }

  return (
    <div className="product-review-chat">
      <h10>Product Reviews</h10>
      {reviews.length === 0 ? (
        <p>No reviews yet</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className={`review ${review.user === "You" ? "self" : ""}`}>
            <div className="user-info">
    {review.user !== "You" && <img src="path/to/user-icon.png" alt="User Icon" />}
    <p className={`reviewer-name ${review.user === "You" ? "self" : ""}`}>{review.user}</p>
  </div>
  <p className="review-message">{review.message}</p>
  <div className="images">
    {review.images &&
      [...review.images].map((image, i) => (
        <img key={i} src={URL.createObjectURL(image)} alt="Product Image" />
      ))}
  </div>
  <div className="rating">
    <label htmlFor={`rating-${index}`}>Rating:</label>
    <StarRatings
                rating={rating}
                starRatedColor="orange"
                changeRating={newRating => setRating(newRating)}
                numberOfStars={5}
                starDimension="20px"
                starSpacing="2px"
                name={`rating-${index}`}
              />
  </div>
  <div className="like-button">
              <button
                onClick={() => handleLike(index)}
                className={likedReviews.includes(index) ? "liked" : ""}
              >
                {likedReviews.includes(index) ? likeIcons.liked : likeIcons.notLiked}
              </button>
              <span className="like-count">
                {likedReviews.filter((i) => i === index).length}
              </span>
            </div>
</div>
        ))
      )}
      <form onSubmit={handleReviewSubmit}>
        <input type="text" name="userName" placeholder="Your Name" />
        <textarea
          id="review-input"
          value={newReview}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
        <button type="button" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
          {showEmojiPicker ? "Hide" : "Show"} Emoji Picker
        </button>
        <input type="file" name="images" accept="image/*" multiple />
        <button type="submit">Send</button>
      </form>
    </div>

  );
    }

export default ProductReviewChat;
