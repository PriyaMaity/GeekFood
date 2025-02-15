import React from "react";
import "./Card.css";
import image from "../../assets/hotel.jpg";

export default function Card() {
  return (
    <div className="card-container">
      <img className="hotel-img" src={image} alt="" />
      <div className="card-content">
        <h1 className="card-heading">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          debitis.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          molestiae! Quidem est esse numquam odio deleniti, beatae, magni
          dolores provident quaerat totam eos, aperiam architecto eius quis
          quibusdam fugiat dicta.
        </p>
        <button className="card-btn">Get in Touch</button>
      </div>
    </div>
  );
}
