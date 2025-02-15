import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="content">
        <h1 className="first-heading">Let us find your</h1>
        <h1 className="second-heading">Forever Food.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
          pharetra ligula. Nam cursus, risus et sagittis scelerisque, odio nulla
          maximus orci, id aliquet justo turpis in lectus.
        </p>
        <div className="btns">
          <button className="btn-1">Search Now</button>
          <button className="btn-2">Know More</button>
        </div>
      </div>
    </div>
  );
}
