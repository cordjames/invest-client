import React from "react";

function Info({ data }) {
  return (
    <div className="col-12 my-6">
      {/* <!-- card  --> */}
      <div className="card">
        {/* <!-- card header  --> */}
        <div className="card-header p-4 bg-white">
          <h4 className="mb-0">Personal Information</h4>
        </div>
        {/* <!-- card body  --> */}
        <div className="card-body">
          <div className="row align-items-center">
            {data.map((item, index) => {
              return (
                <>
                  <div
                    className={
                      "col-lg-6 col-md-12 col-12 mb-4 mb-lg-0 " +
                      (index % 2 != 0 ? "d-flex" : " ")
                    }
                    key={index}
                  >
                    <div className="mb-3 mb-lg-0">
                      <HeaderAndText header={item.header} text={item.text} />
                    </div>
                  </div>
                  {/* <hr /> */}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderAndText({ header, text }) {
  return (
    <div className="mb-2">
      <span
        className="d-block text-dark
                                  fw-bold"
      >
        {header}
      </span>
      <span
        className="d-block text-primary-hover
                                  fw-medium fs-4"
      >
        {text}
      </span>
    </div>
  );
}

export default Info;
