import React from "react";
import Grid from '@mui/material/Grid';
import contactSVG from "../assets/Contact us-bro.svg";
import { FaLocationDot, FaPhone, FaEnvelopeOpen } from "react-icons/fa6";
import ProfileIcons from "./ProfileIcons";

const Contact = () => {
    return (
        <>
        <div className="div-item" id="contact">
            <h1>Contact Us</h1>
          
        <Grid className="contact-items" container spacing={1}>
          <Grid item sm={12} md={4}>
            <div className="contact-img">
              <img src={contactSVG} alt="contact"></img>
            </div>
          </Grid>
          <Grid item sm={12} md={8}>
            <div className="contact-item">
              <h2>Reach out to us and place your order!</h2>
              <div>
                <p>
                  <FaLocationDot />
                  <span>Karanjia, Odisha</span>
                </p>
                <p>
                  <FaPhone />
                  <span>+91-9556666433</span>
                </p>
                <p>
                  <FaEnvelopeOpen />
                  <span>xxxx@gmail.com</span>
                </p>
              </div>
              <ProfileIcons />
            </div>
          </Grid>
        </Grid>
            
            
        </div>
          
        </>
    )
}
export default Contact