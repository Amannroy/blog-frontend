import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Project Info */}
        <div className="footer-info">
          <h2>Blog App Project</h2>
          <p>Explore diverse topics and share your thoughts with our community.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/write">Publish Post</Link></li>
            <li><Link to="/topblogs">Must-Read News</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h3>Follow Me</h3>
          <ul>
            <li><a href="https://www.linkedin.com/in/aman-roy-1b57801ba/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/Amannroy" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact Me</h3>
          <p>Email: royaman56456@gmail.com</p>
          <p>Phone: +91 7980905677</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Made by Aman Roy &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
