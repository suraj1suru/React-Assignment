import React, { useState } from 'react';
import '../App.css';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (event) => {
    const selectedRating = Number(event.target.value);
    setRating(selectedRating);
  };

  return (
    <div className='Ali'>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={handleClick}
          value={star}
          style={{ color: rating >= star ? 'red' : 'black' }}
        >
          &#9733;
        </button>
      ))}
    </div>
  );
};

export default StarRating;