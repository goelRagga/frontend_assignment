"use client";

import { useState } from "react";

const StarRating = ({ totalStars, initialRating }) => {
  const [rating, setRating] = useState(initialRating || 0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index + 1)}
          style={{
            cursor: "pointer",
            fontSize: "25px",
            color: index < rating ? `#a8620a` : "gray",
          }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
