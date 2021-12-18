import React from "react";
import "./Testimonial.css";
class Testimonial extends React.Component {
  render() {
    return (
      <div>
        <div class="container-fluid testimonial">
          <div class="container"></div>
          <div class="row">
            <div className="col-md-6 container">
              <h1>
                <span>T</span>ESTIMONIAL
              </h1>
              <div className="container user-img">
                <img
                  class="testimonial-user-img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div>
                  <h1>John Doe</h1>
                  <h4>Designer & Creator</h4>
                </div>
              </div>
              <p style={{ padding: "20px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio aspernatur minima eveniet eius nam sint quasi
                obcaecati eos, ullam voluptatem magnam nobis odit aut iusto
                repellat dicta modi. Quia aliquam excepturi voluptatibus
                consectetur quidem aspernatur eum maiores eos molestias laborum,
                omnis repellat. Nisi, iste optio adipisci nemo accusamus
                consectetur, nesciunt sed harum id architecto sit numquam ipsum
                explicabo, dolores commodi atque ex impedit. Quisquam corrupti
                ad nihil optio molestias. Voluptatem
              </p>
              <p className="text-right next-testimonial">
                Next testimonial <i class="fas fa-arrow-right"></i>
              </p>
              <button class="testimonial-btn">MAKE YOUR PHOTOBOOK</button>
            </div>
            <div className="col-md-6 container testimonial-image">
              <img
                src="https://media.istockphoto.com/photos/school-picture-id1016131800?b=1&k=20&m=1016131800&s=170667a&w=0&h=imifkJTvS-4b8cvOhVNlCqqvZlwI4S-xCKZ6Oxbla4Q="
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
