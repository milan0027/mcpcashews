import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
// import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Products/>
      {/* <About/> */}
      <Contact/>
      <Footer/>
    </>
  );
};

export default LandingPage;