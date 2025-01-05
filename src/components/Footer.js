import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

/**
 * Footer component for displaying the footer content
 * @returns {JSX.Element} The rendered component
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About KeyNest</h5>
            <p>
              KeyNest is your trusted partner in finding the perfect property. Whether you're looking for a house or a flat, we provide detailed listings to help you make the best decision.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Us</h5>
            <ul className="list-unstyled mb-0">
              <li><strong>Tel:</strong> +94 740813285</li>
              <li><strong>Email:</strong> lakindumuthsanda123@gmail.com</li>
              <li><strong>Address:</strong> Colombo, Sri Lanka</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Follow Us</h5>
            <div className="social-icons">
              {/* Social media links */}
              <a href="https://www.facebook.com" className="me-3 text-white">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com" className="me-3 text-white">
                <FaInstagram />
              </a>
              <a href="https://www.twitter.com" className="me-3 text-white">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com" className="me-3 text-white">
                <FaLinkedin />
              </a>
              <a href="https://www.youtube.com" className="me-3 text-white">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        &copy; 2025 KeyNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
