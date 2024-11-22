import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./SocialCard.css";

const SocialCard = () => {
  return (
   
    <div className="social-bar">
    
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        title="GitHub"
      >
        <BsGithub />
      </a>
      
      <a
        href="https://linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        title="LinkedIn"
      >
      
     <BsLinkedin/>
      </a>
    </div>
  );
};

export default SocialCard;
