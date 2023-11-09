import React from 'react';

const Footer = () => {
  return (
    <div className="fixed-bottom" align="center">
      <footer className="bg-dark text-light py-3">
        <div className="footer">
          <div className="row">
            <div className="col-lg-4">
              <h4>Contact Us</h4>
              <address>
                <p>Email: info@todolist.com</p>
                <p>Phone: +123-456-7890</p>
              </address>
            </div>
            <div className="col-lg-4">
              <h4>Connect with Us</h4>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com" style={{ textDecoration: 'none' }}>
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.twitter.com" style={{ textDecoration: 'none' }}>
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com" style={{ textDecoration: 'none' }}>
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h4>Support</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/support" style={{ textDecoration: 'none' }}>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/contact" style={{ textDecoration: 'none' }}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <p>&copy; {new Date().getFullYear()} To-Do List. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;