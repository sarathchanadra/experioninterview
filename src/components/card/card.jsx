import React from "react";
import "../card/cardstyle.scss";

const Card = (item) => {
  return (
    <div className="card-container" key={item.item.name}>
      <div className="card-img-container">
        <img src={item.item.image} />
      </div>
      <div className="card-details">
        <p>{item.item.name}</p>
        <p>{item.item.description}</p>
        <p>{item.item.price}</p>
      </div>
      <div className="btn-container">
        <button className="cart-button"> Add to Cart</button>
      </div>
    </div>
  );
};
export default Card;
