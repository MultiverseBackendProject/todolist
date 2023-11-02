import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="footer">
        <div className="row">
          <div className="col-lg-4">
            <h3>Contact Us</h3>
            <address>
              <p>Email: info@todolist.com</p>
              <p>Phone: +123-456-7890</p>
            </address>
          </div>
          <div className="col-lg-4">
            <h3>Connect with Us</h3>
            <ul className="list-unstyled">
              <li>
                <a href="www.facebook.com">Facebook</a>
              </li>
              <li>
                <a href="www.twitter.com">Twitter</a>
              </li>
              <li>
                <a href="instagram.com">Instagram</a>
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
  );
};

export default Footer;