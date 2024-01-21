import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const followUsContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundImage: `url("/contactPhoto6.jpg")`, // Assuming the image is in the public folder
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "400px",
    marginTop: "10%",
  };
  return (
    <div style={followUsContainerStyle} className="follow-us-container">
      <h2 className="follow-us-heading">FOLLOW US ON SOCIAL</h2>
      <h4 className="username">@cappuccino_anytime</h4>
      <div className="social-icons">
        <a href="#" className="social-icon">
          <AiOutlineInstagram fontSize={40} />
        </a>
        <a href="#" className="social-icon">
          <AiOutlineTwitter fontSize={40} />
        </a>
        <a href="#" className="social-icon">
          <FaFacebook fontSize={40} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
