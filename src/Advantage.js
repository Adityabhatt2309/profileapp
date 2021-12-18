import React from "react";
import "./Advantage.css";

class Advantage extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid advantage">
          <div className="container">
            <div className="advantage-heading">
              <h1>
                <span style={{ fontSize: "5rem" }}>A</span>DVANTAGE
              </h1>
            </div>
            <div className="advantage-item row">
              <div className="col-md-4 advantage-img-item">
                <img
                  src="https://media.istockphoto.com/photos/cartoon-hand-in-a-green-jacket-and-rubber-medical-glove-tied-in-a-picture-id1319427978?b=1&k=20&m=1319427978&s=170667a&w=0&h=rLhnZgd2myjZ5yW2fq-OCFNv5lipnAXeWcb7R5tg4IU="
                  alt=""
                />
                <h4>Photo Editing</h4>
                <h4>From Your Social Network</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  excepturi debitis iusto reprehenderit harum, sapiente
                  assumenda laborum sint modi repudiandae, non quisquam fugit,
                  voluptatum magni suscipit aut optio alias error?
                </p>
                <br />
              </div>
              <div className="col-md-4 advantage-img-item">
                <img
                  src="https://images.unsplash.com/photo-1610261041212-36cac535c7a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBob3RvJTIwZWRpdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <h4>Photo Editing</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  excepturi debitis iusto reprehenderit harum, sapiente
                  assumenda laborum sint modi repudiandae, non quisquam fugit,
                  voluptatum magni suscipit aut optio alias error?
                </p>
              </div>
              <div className="col-md-4 advantage-img-item">
                <img
                  src="https://images.unsplash.com/photo-1627543533866-44cc4468dea4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZSUyMGZ1bGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <h4>Templates</h4> <br />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  excepturi debitis iusto reprehenderit harum, sapiente
                  assumenda laborum sint modi repudiandae, non quisquam fugit,
                  voluptatum magni suscipit aut optio alias error?
                </p>
              </div>
            </div>
          </div>

          <button>MAKE YOUR PHOTOBOOK</button>
        </div>
      </div>
    );
  }
}

export default Advantage;
