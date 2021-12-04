import React from "react";

/**
 * Using react component based on function
 */
export const Card = ({ name, picture, price, isActive }) => {
  return (
    <div
      className={isActive === "true" ? "card" : "card inactive"}
      tabIndex={isActive ? "0" : "-1"}
    >
      <div className="card-header">
        <p className="card-title">{name}</p>
        <span className="material-icons card-favorite">favorite_border</span>
      </div>
      <img className="card-img" src={picture} alt={name} />
      <div className="card-bottom">
        <p className="price">$ {price}</p>
      </div>
    </div>
  );
};
