// filepath: src/components/Footer.jsx
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="contact-section">
          <h2>Contact Me</h2>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" required />
            </div>            <div className="form-group">
              <textarea name="message" rows="5" placeholder="Your Message" required style={{ resize: "none" }}></textarea>
            </div>
            <button type="submit" className="btn primary-btn">Send Message</button>
          </form>
        </div>
        
        <div className="footer-info">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <ul>
              <li>
                <span className="info-icon">📧</span>
                <span>flameblade@gmail.com</span>
              </li>
              <li>
                <span className="info-icon">📱</span>
                <span>Discord: .flameblaade</span>
              </li>              
            </ul>
          </div>
            <div className="social-links">
            <h3>Connect With Me</h3>
            <div className="social-icons">
              <a href="https://www.youtube.com/@Flamebladee" target="_blank" rel="noopener noreferrer" className="social-icon">YouTube</a>
              <a href="https://github.com/Flameblaade" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
            </div>
          </div>
          
          <div className="youtube-info">
            <h3>Check Out My YouTube</h3>
            <p>Subscribe to my channel for awesome content!</p>
            <a href="https://www.youtube.com/@Flamebladee" target="_blank" rel="noopener noreferrer" className="btn secondary-btn youtube-btn">
              SUB TO FLAMEBLADE
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Flameblade. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
