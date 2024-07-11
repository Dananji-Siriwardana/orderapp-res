import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from "../images/C&C Logo.png";

function Footer() {
  return (
    <footer className="bg-dark text-center text-white py-2 ">
      <div className="container ">
        <div className="row">
          <div className="col-sm-12 text-center">
          <ul className="list-inline">
          <li className="list-inline-item">
            <a href="https://www.twitter.com/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
            </ul>
            <p class="fs-3">Contact Us</p>
            <p class="fw-bold">
            Email: support@C&C.com</p>
            <p>Phone: +1 (0) 000 0000 001</p>
            <p>Fax: +1 (0) 000 0000 002</p> 
            <img src={logo} alt="Logo" width={150} height={50} /> 
          </div>
        </div>
      </div>
    </footer>
    

  );
}

export default Footer;
