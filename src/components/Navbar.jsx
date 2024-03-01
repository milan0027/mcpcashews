import React, {useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  

  return (
    <div className="navbar">
      <header>
        <h3>
          <span className="nav-logo">M.C.P. Cashews</span>
        </h3>
        <nav ref={navRef}>
          <ul>
            <li>
              <a href="#products" onClick={() => showNavbar()}>
                Our Products
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => showNavbar()}>
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => showNavbar()}>
                Contact Us
              </a>
            </li>
          </ul>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
};

export default Navbar;