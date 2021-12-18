import React from "react";
import "./Terms.css";
class Terms extends React.Component {
  render() {
    return (
      <div>
        <div className="Container Terms">
          <div className="row">
            <div className="col-md-4 terms-div">
              <h3>
                <span style={{ fontSize: "40px" }}>T</span>ERMS
              </h3>
              <div className="terms-text">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Totam cupiditate similique sit et vitae a repudiandae error
                  rem. Maiores enim dolor qui aliquid, in hic ipsa iste repellat
                  laudantium quidem? Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
            </div>
            <div
              className="col-md-4 text-center terms-div"
              style={{ textAlign: "center" }}
            >
              <h3>
                <span style={{ fontSize: "40px" }}>P</span>AYMENT
              </h3>
              <div className="terms-text">
                <ul style={{ listStyleType: "none" }}>
                  <p>Payments Methods:</p>
                  <li>• VISA</li>
                  <li>• Master Card</li>
                  <li>• PayPal</li>
                  <li>• American Express</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 terms-div">
              <h3>
                <span style={{ fontSize: "40px" }}>S</span>HIPPING
              </h3>
              <div className="terms-text">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Totam cupiditate similique sit et vitae a repudiandae error
                  rem. Maiores enim dolor qui aliquid, in hic ipsa is
                </p>
                <span
                  style={{ color: "red", fontWeight: "bold", fontSize: "16px" }}
                >
                  Free Shipping for <br />
                  Premium Book
                </span>
              </div>
            </div>
          </div>
          <div className="button text-center">
            <button>MAKE YOUR PHOTOBOOK</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Terms;
