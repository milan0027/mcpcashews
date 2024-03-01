import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
const ProfileIcons = () => {
  return (
    <ul className="icons-list">
     
      
      <li>
        <a href="mailto:xxxx@gmail.com" className="icon-button email">
          <FaEnvelope />
        </a>
      </li>
      <li>
        <a
          href="https://wa.me/+919556666433"
          target="__blank"
          className="icon-button whatsapp"
        >
          <FaWhatsapp />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/milan.mundhra.5"
          target="__blank"
          className="icon-button facebook"
        >
          <FaFacebookF />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/milan_miles_1/"
          target="__blank"
          className="icon-button instagram"
        >
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
};

export default ProfileIcons;