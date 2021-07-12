import React from "react";
import { SocialData } from "./social";
import "./social-contact.scss";
function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-icon-div">
              <img alt='icon' src={item.icon} className="social-icon" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
