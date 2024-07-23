import React from 'react';
import twitter from "../../assets/images/twitter.png";
import telegram from "../../assets/images/telegram.png";
import './Footer.scss'; 

function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-left">
        <div className="footer-brand">DOGS</div>
        <div className="footer-rights">All Rights Reserved, 2024</div>
      </div>
      <div className="footer-center">
        <a href="#" className="footer-link">Terms of use</a>
        <a href="#" className="footer-link">Documentations</a>
      </div>
      <div className="footer-right">
        <a href="#" className="footer-icon">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="#" className="footer-icon">
          <img src={telegram} alt="Telegram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
