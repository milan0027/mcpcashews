import React from "react";
import Grid from '@mui/material/Grid';
import aboutusJPG from "../assets/AboutUs.jpg";

const About = () => {
    return (
        <>
        <div className="div-item" id="about">
            <h1>About Us</h1>
          
        <Grid className="about-text" container spacing={1}>
            <Grid item sm={12} md={6} xl={8}>
                <h2>
                Welcome to our esteemed cashew processing unit, where expertise meets tradition to bring forth the finest quality cashew products. With an illustrious 29-year journey in the industry, we have honed our craft to perfection. From humble beginnings to becoming a hallmark of quality and innovation, our unwavering commitment to excellence sets us apart.
                </h2> 

<h2>At our cashew processing unit, we pride ourselves on blending cutting-edge technology with time-honored techniques to deliver premium cashew kernels and derivatives. Nestled within our facility is a meticulous process that begins with hand-selecting the finest raw cashews and culminates in the creation of delectable cashew nut products that cater to global tastes and preferences.</h2> 
<h2>
Join us as we embark on a journey through the rich legacy and unparalleled expertise of our seasoned team, dedicated to delivering the finest cashew products to the world, where every nut is nurtured with care, ensuring excellence in every bite.
</h2>
            </Grid>
            <Grid item sm={12} md={6} xl={4}>
                <div className="about-img">
                <img src={aboutusJPG} alt="about"></img>
                </div>
            </Grid>
        </Grid>
        </div>
          
        </>
    )
}
export default About