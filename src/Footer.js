import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid footer">
          <div className="container">
            <div className="row">
              <div className="col-md-10 footer-list-">
                <div className="col-md-3 footer-list">
                  <ul>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Help</li>
                    <li>Press</li>
                  </ul>
                </div>
                <div className="col-md-3 footer-list">
                  <ul>
                    <li>Terms</li>
                    <li>Payment</li>
                    <li>Shipping</li>
                    <li>Contact</li>
                  </ul>
                </div>
                <div className="col-md-3 footer-list">
                  <ul>
                    <li>LightBook</li>
                    <li>ClassicBook</li>
                    <li>Premium Book</li>
                  </ul>
                </div>

                <div className="col-md-2 footer-icon">
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-bootstrap"></i>
                  <i class="fab fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <footer>
              © 2015 <span style={{ fontSize: "3rem" }}>P</span>HOTOBOOK. All
              rights reserved
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
