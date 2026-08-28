import {Fastar} form 'react-icons/fa';
import { useState } from 'react';

export default function StarRating({noOfStars = 5}) {
  return (
    <div className="star-rating">
      <h2>Star Rating</h2>
      {
        [...Array(noOfStars)].map((_, index) => {
            return <Fastar 
            key={index}
            onClick= {}
            onMouseLeave= {}
            size={40}
            />
        })
      }
    </div>
  )
}