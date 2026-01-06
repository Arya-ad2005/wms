import React, { useState } from 'react';
import './Userfeed.css';
import { FaStar } from 'react-icons/fa'; // Make sure to install react-icons if you haven't: npm install react-icons
import Userside from './Userside';

function Userfeed() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hover, setHover] = useState(0);

  const handleSubmit = () => {
    alert(`Rating: ${rating} stars, Comment: "${comment}"`);
    // Here you would typically send this data to a backend server
    clearForm();
  };

  const clearForm = () => {
    setRating(0);
    setComment('');
    setHover(0);
  };

  return (
    <div className="user-feedback-container">
        <Userside />
      <h2>Rate Our Service</h2>

      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                className="star"
                size={30}
                color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(0)}
              />
            </label>
          );
        })}
      </div>

      <div className="comment-section">
        <label htmlFor="comment">Your Comments:</label>
        <textarea
          id="comment"
          placeholder="Share your thoughts..."
          rows="5"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>

      <div className="feedback-buttons">
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
        <button className="clear-button" onClick={clearForm}>Clear</button>
      </div>
    </div>
  );
}

export default Userfeed;