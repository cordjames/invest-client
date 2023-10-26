import React from "react";
import { Link } from "react-router-dom";

function DashNavBar({ data }) {
  return (
    <div class="header @@classList !bg-primary">
      {/* <!-- navbar --> */}
      <nav class="navbar-classic navbar navbar-expand-lg !bg-primary pt-4">
        <a id="nav-toggle" href="#">
          <i data-feather="menu" class="nav-icon me-2 icon-xs"></i>
        </a>
        <div class="ms-lg-3 d-none d-md-none d-lg-block">
          {/* <!-- logo --> */}
          <Link to="/" className="flex items-center ">
            <span className="self-center text-4xl font-semibold whitespace-nowrap text-white">
              Asce
              <span className="text-blue-900">ntè</span>
            </span>
          </Link>
        </div>
        {/* <!--Navbar nav --> */}
        <ul class="navbar-nav navbar-right-wrap ms-auto d-flex nav-top-wrap">
          <li class="dropdown stopevent flex items-center">
            <a
              class="btn btn-light btn-icon rounded-circle indicator
          indicator-primary text-muted"
              href="#"
              role="button"
              id="dropdownNotification"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {/* <i class="icon-xs" data-feather="bell"></i> */}
              <img src={data[1]} alt="" srcset="" />
            </a>
            <h4 className="mb-0 text-white font-extrabold ml-3">{data[0]}</h4>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DashNavBar;
