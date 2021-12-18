import React from "react";
import "./Solutions.css";
class Solutions extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid solutions">
          <div className="container text-center">
            <h1>
              <span style={{ fontSize: "5rem" }}>R</span>EADY SOLUTIONS
            </h1>
            <h5 className="bestseller">BESTSELLER</h5>
            <div className="row">
              <div className="col-md-4">
                <div className="card container">
                  <h3>
                    <span style={{ fontSize: "3rem" }}>L</span>IGHT BOOK
                  </h3>
                  <ul>
                    <li>✅ 15*10</li>
                    <li>✅ 12pages</li>
                    <li>✅ binding on the clip</li>
                    <li>
                      <br />
                      <br />
                      <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>
                        $129
                      </h3>
                    </li>
                  </ul>
                  <h4>Make Your Light Book</h4>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card container">
                  <h3>
                    <span style={{ fontSize: "3rem" }}>C</span>LASSIC BOOK
                  </h3>
                  <ul>
                    <li>✅ 30*21</li>
                    <li>✅ 36pages</li>
                    <li>✅ binding on the spring</li>
                    <li>✅ fabric cover</li>
                    <li>
                      <br />
                      <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>
                        $239
                      </h3>
                    </li>
                  </ul>
                  <h4>Make Your Classic Book</h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card container">
                  <h3>
                    <span style={{ fontSize: "3rem" }}>P</span>REMIUM BOOK
                  </h3>
                  <ul>
                    <li>✅ 40*50</li>
                    <li>✅ 50pages</li>
                    <li>✅ hardcover</li>
                    <li>✅ leather cover</li>
                    <li>✅ free shipping</li>
                    <li>
                      <br />
                      <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>
                        $759
                      </h3>
                    </li>
                  </ul>
                  <h4>Make Your Classic Book</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Solutions;
