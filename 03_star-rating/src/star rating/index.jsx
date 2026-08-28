import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import "./style.css";

export default function StarRating({noOfStars = 5}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(index) {
    setRating(index)
  }
  function handleMouseEnter(index) {
    setHover(index)
  }
  function handleMouseLeave() {
    setHover(rating)
  }



  return (
    <div className="star-rating">
      <h2>Star Rating</h2>
      {
        [...Array(noOfStars)].map((_, index) => {
            index += 1;

            return <FaStar 
            key={index}
            className = {index <= (hover|| rating) ? "star selected" : "star Not Selected"}
            onClick= {() => handleClick(index + 1)}
            onMouseEnter= {() => handleMouseEnter(index + 1)}
            onMouseLeave= {() => handleMouseLeave(index + 1)}
            size={40}
            />
        })
      }
    </div>
  )
}