import React from "react";
import "./Home.css";
import Advantage from "./Advantage";
import Solutions from "./Solutions";
import Testimonial from "./Testimonial";
function Home() {
  return (
    <div className="Home">
      <nav className="navbar bg-info  navbarfull ">
        <div className="container-fluid">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <span className="firstletter">P</span>HOTOBOOK
              </a>
            </div>
            <ul className="nav navbar-nav"></ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">
                  <span className="glyphicon glyphicon-user"></span> Sign Up
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="glyphicon glyphicon-log-in"></span> Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="headingpage">
        <div className="heading-image">
          <img
            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="uploading"
          />
        </div>
        <div className="heading-text">
          <h1>
            <span className="firstletter">C</span>REATE YOUR OWN PHOTOSTORY
          </h1>
          <p>Make your photobook online</p>
          <button>MAKE YOUR PHOTOBOOK</button>
        </div>
      </div>
      {/* features page */}
      <div className="features-page">
        <div className="container">
          <div className="row feature-item">
            <div className="col-md3 feature-1">
              <i class="fas fa-cloud-download-alt"></i>
              <p>-----</p>
            </div>
            <div className="col-md3 feature-1">
              <i class="fas fa-icons"></i>
              <p>-----</p>
            </div>
            <div className="col-md3 feature-1">
              <i class="fas fa-hand-holding-usd"></i>
              <p>-----</p>
            </div>
            <div className="col-md3 feature-1">
              <i class="fas fa-luggage-cart"></i>
            </div>
          </div>
        </div>
      </div>

      <Advantage />
      <Solutions />
      <Testimonial />
    </div>
  );
}

export default Home;
