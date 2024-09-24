import React from 'react';
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <h3>Code <span style={{ color: 'orange' }}>kivy</span></h3>
        <p style={{ fontSize: '20px' }}>Heaven for Python Beginners</p>
        
        <div className="social-links d-flex justify-content-center">
          <a href="https://www.instagram.com/reel/C-mO4qHBjHi/?utm_source=ig_web_copy_link" target="_blank" rel="noopener noreferrer">
          <GrInstagram />
          </a>
          <a href="https://www.linkedin.com/company/code-kivy/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />

          </a>
        </div>

        <div className="container">
          <div className="copyright">
            <span>Copyright </span> <strong className="px-1 sitename">CodeKivy,</strong> <span>All Rights Reserved</span>
          </div>
          <div className="credits">
            Designed with ❤️‍🔥 by <a href="https://siddhu.vercel.app" target="_blank" rel="noopener noreferrer">Siddhu From Srikakulam</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
