import React from "react";
import "./Footer.css";
import logo from "../../assets/OBJECTS.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-caption">
          <div className="footer-logo">
            <img src={logo} alt="" />
            <p>
              EduBridge
              <span>Empower your Future</span>
            </p>
          </div>
          <h4>
            Top educational experiences that cultivate talent globally
          </h4>
          <div className="links">
            <a href=""> <i class="fa-brands fa-instagram"></i> </a>
            <a href=""><i class="fa-brands fa-twitter"></i> </a>
            <a href=""> <i class="fa-brands fa-facebook"></i></a>
            <a href=""> <i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <div className="product-link">
            <h5>Product</h5>
            <p>Pricing</p>
            <p>Overview</p>
            <p>Features</p>
            <p>Solutions</p>
            <p>Tutorials</p>
          </div>
          <div className="Company-link">
          <h5>Company</h5>
            <p>About As </p>
            <p>Testimonials</p>
            <p>Community</p>
            <p>Services</p>
          </div>
          <div className="Support-link">
          <h5>Support</h5>
            <p>Help Centre</p>
            <p>Feedbacks</p>
          </div>
        </div>
      </div>
      <h2>Copyright © 2024 EduBridge. All rights reserved.</h2>
    </div>
  );
}
