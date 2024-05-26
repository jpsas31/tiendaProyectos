import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="about-content text-center max-w-2xl mx-auto mt-5">
        <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content">About Us</h2>
        <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">
          Welcome to our platform! We are dedicated to providing a seamless experience for both service providers and customers. Whether you are here to offer your skills or find expert services, we are here to help you connect and succeed.
        </p>
        <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">
          Our mission is to create a vibrant marketplace where skills are valued and opportunities are abundant. Join us today to be part of this exciting journey!
        </p>
        <Link to="/contact" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5">Contact Us</Link>
      </div>
    </div>
  );
};

export default About;
