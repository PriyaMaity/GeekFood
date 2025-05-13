import React from "react";
import Navbar from "../NavbarComponent/Navbar";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-page">
        <div className="contact-content">
          {/* Left Column */}
          <div className="contact-info">
            <h5>Contact Us</h5>
            <h1>Get in Touch With Us</h1>
            <p className="intro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam quis nostrud.
            </p>

            <div className="info-group">
              <FaHome className="icon" />
              <div>
                <h4>Our Location</h4>
                <p>
                  99 S.t Jomblo Park Pekanbaru 28292.
                  <br />
                  Indonesia
                </p>
              </div>
            </div>

            <div className="info-group">
              <FaPhone className="icon" />
              <div>
                <h4>Phone Number</h4>
                <p>(+62)81 414 257 9980</p>
              </div>
            </div>

            <div className="info-group">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email Address</h4>
                <p>contact@geekfood.com</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="contact-form-wrap">
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Your Phone" />
              <textarea placeholder="Your Message" rows="6"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
