import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
const ProfileIcons = () => {
  return (
    <ul className="icons-list">
     
      
      <li>
        <a href="mailto: mcpkaju@gmail.com" className="icon-button email">
          <FaEnvelope />
        </a>
      </li>
      <li>
        <a
          href="https://wa.me/+918018445539"
          target="__blank"
          className="icon-button whatsapp"
        >
          <FaWhatsapp />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/mcp_cashew?igsh=OGk2YjBmYjU2Z2tu"
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