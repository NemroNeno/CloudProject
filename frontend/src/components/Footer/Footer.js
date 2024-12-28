// Footer.js

import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaStackOverflow,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted border-top">
      {/* Section: Social media */}
      <section className="container d-flex justify-content-center justify-content-lg-between p-4">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="#" className="me-4 text-reset">
            <FaFacebook />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaTwitter />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaInstagram />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaLinkedin />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaGithub />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaStackOverflow />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links  */}
      <section>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Video Storage & Streaming
              </h6>
              <p>
              Our Video Gallery App is a cloud-native, microservices-driven platform developed as part of our Cloud Engineering semester project. 
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="/gallery" className="text-reset">Video Storage</a>
              </p>
              <p>
                <a href="/gallery" className="text-reset">Streaming</a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Help</a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2023 Copyright: BESE-13-B
      </div>
      {/* Copyright */}
    </footer>
  );
}