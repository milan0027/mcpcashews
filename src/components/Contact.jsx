import React from "react";
import Grid from '@mui/material/Grid';
import contactSVG from "../assets/Contact us-bro.svg";
import { FaLocationDot, FaPhone, FaEnvelopeOpen, FaUser } from "react-icons/fa6";
import ProfileIcons from "./ProfileIcons";

const Contact = () => {
    return (
        <>
        <div className="div-item" id="contact">
            <h1>Contact Us</h1>
          
        <Grid className="contact-items" container spacing={4}>
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
                  <FaUser />
                  <span>Rajan Verma</span>
                </p>
                
                <p>
                  <FaPhone />
                  <span>+91-8018445539</span>
                </p>
                <p>
                  <FaEnvelopeOpen />
                  <span> mcpkaju@gmail.com</span>
                </p>
                <p>
                  <FaLocationDot />
                  <span><a href="https://maps.app.goo.gl/R7SH2zHVvbDmrDeA6" target="__blank">Karanjia, Odisha</a></span>
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