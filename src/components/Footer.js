import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="site-info">
              <h2>
                <span>Shopy</span>
                <span>Me</span>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="helpful-links">
              <h2>Helpful Links</h2>
              <div className="row">
                <div className="col">
                  <ul className="list-unstyled">
                    <li>
                      <i class="fas fa-home"></i> Home
                    </li>
                    <li>
                      <i class="fab fa-speakap"></i> Category
                    </li>
                    <li>
                      <i class="fas fa-address-card"></i> About
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="list-unstyled">
                    <li>FAQ</li>
                    <li>Benfites</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact">
              <h2>Contact us</h2>
              <ul className="list-unstyled">
                <li>
                  <i class="fas fa-map-marker-alt"></i> Cairo, Egypt
                </li>
                <li>
                  <i class="fas fa-phone"></i> Phone: 01062530292
                </li>
                <li>
                  <i class="fas fa-envelope-square"></i> Email:{" "}
                  <a href="mailto:shopyme@gmailcom?subject=Contact">
                    shopyme@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
