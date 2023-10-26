// import { Briefcase } from "bootstrap-icons-react";
import React from "react";

function Card({ header, text }) {
  return (
    <div className="col-xl-3 col-lg-6 col-md-12 col-12 mt-6">
      {/* <!-- card --> */}
      <div className="card rounded-3">
        {/* <!-- card body --> */}
        <div className="card-body">
          {/* <!-- heading --> */}
          <div
            className="d-flex justify-content-between align-items-center
                    mb-3"
          >
            <div>
              <h4 className="mb-0">{header}</h4>
            </div>
            <div
              className="icon-shape icon-md bg-light-primary text-primary
                      rounded-1"
            >
              {/* <Briefcase /> */}
              <i className="bi bi-briefcase fs-4"></i>
            </div>
          </div>
          <div>
            <h1 className="fw-bold">{text}</h1>
            {/* <p className="mb-0">
              <span className="text-dark me-2">2</span>Completed
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
