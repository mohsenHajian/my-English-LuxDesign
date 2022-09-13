import React from "react";
import "./footer.style.scss";
import logo from "../../assets/logo-removebg-preview.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="d-flex w-100 flex-column">
      <div className="footer d-flex justify-content-between w-100 footer-header">
        <div className="d-flex gap-5 footer-details">
        <div className="d-flex flex-column gap-2">
          <p className="footer-item">Online consultation and troubleshooting</p>
          <p className="footer-item">Request for cooperation with Lux Design</p>
          <p className="footer-item">Lux Design stores</p>
          <p className="footer-item">about us</p>
        </div>
        <div className="d-flex flex-column gap-2">
          <p className="footer-item">The latest Lux design products</p>
          <p className="footer-item">Suggested products</p>
          <p className="footer-item">Popular products</p>
          <p className="footer-item">documents</p>
        </div>  
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center align-items-center pt-5 pb-2 gap-3">
          <Icon icon="ph:instagram-logo-thin" color="#f6f6f6" width="40px" />
          <Icon icon="arcticons:twitter" color="#f6f6f6" width="40px" />
          <Icon icon="ph:telegram-logo-thin" color="#f6f6f6" width="40px" />
          <Icon icon="uit:facebook-f" color="#f6f6f6" width="40px" />
        </div>
        <p className="text-center">The largest clothing store with the most diverse new designs</p>
      </div>
    </footer>
  );
};

export default Footer;
