import React from "react";
import SocialContact from "../social-contact/social-contact";
import "./contact.styles.scss";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">Md. Mahmudur Rahman</span>.<br /> I made
          this ecommerce webapp with Ract JS. <br />
          The authentication is done with Firebase and payment is handled with
          Stripe API.
        </div>
        <div className="about-photo">
          <img
            alt="dev"
            src={require("../../assets/circle-cropped.png").default}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
