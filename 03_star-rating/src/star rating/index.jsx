import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import "./style.css";

export default function StarRating({noOfStars = 5}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(getIndex) {
    setRating(getIndex)
  }
  function handleMouseEnter(getIndex) {
    setHover(getIndex)
  }
  function handleMouseLeave() {
    setHover(rating)
  }



  return (
    <div className="star-rating">
      <h2>Star Rating</h2>
      {
        [...Array(noOfStars)].map((_, index) => {
            index+=1;

            return <FaStar 
            key={index}
            className = {index <= (hover|| rating) ? "Selected" : "NotSelected"}
            onClick= {() => handleClick(index)}
            onMouseEnter= {() => handleMouseEnter(index)}
            onMouseLeave= {() => handleMouseLeave()}
            size={40}
            />
        })
      }
    </div>
  )
}