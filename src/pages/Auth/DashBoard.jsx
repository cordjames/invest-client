import React from "react";
import CardContainer from "../../components/Cards/CardContainer";
import Info from "../../components/Info";
import DashNavBar from "../../components/DashNavBar";
import { Link } from "react-router-dom";
// import "../assets/theme.css";

// const data = [
//   { header: "Account Holder", text: "Alex Ludwig Hinks" },
//   { header: "Date Of Birth:", text: "03 Jan 1968" },
//   { header: "Country:", text: "USA" },
//   { header: "State:", text: "Texas" },
//   { header: "Next of Kin:", text: "Monica A. Hinks" },
//   { header: "Mother maiden name:", text: "Sylvester" },
//   { header: "Accounting Opening Date:", text: "4/6/2000" },
//   { header: "Account type:", text: "E Checking" },
// ];

function DashBoard({ data }) {
  const {
    account_number,
    account_type,
    country,
    email,
    first_name,
    full_name,
    gender,
    favorite_color,
    last_name,
    maiden_name,
    next_of_kin,
    opening_amount,
    opening_date,
    pet_name,
    present_amount,
    profile_photo,
    state,
    username,
  } = data;

  const descData = [
    { header: "State", text: state },
    { header: "Country", text: country },
    { header: " Email", text: email },
    { header: "First name", text: first_name },
    { header: "Full name", text: full_name },
    { header: "Gender", text: gender },
    { header: "Favorite Color", text: favorite_color },
    { header: "Last Name", text: last_name },
    { header: "Maiden Name", text: maiden_name },
    { header: "Next of kin", text: next_of_kin },
    { header: "Header", text: opening_date },
  ];

  const cardData = [
    { header: "Account status", text: account_type },
    { header: "Account number", text: account_number },
    { header: "OPening Amount", text: `$ ${opening_amount}` },
    { header: "Current Amount", text: `$ ${present_amount}` },
  ];
  const NavData = [username, profile_photo];

  return (
    <div id="db-wrapper">
      {/* <!-- Page content --> */}
      {data && (
        <div id="page-content">
          {/* <!-- Container fluid --> */}
          <DashNavBar data={NavData} />
          <div className="bg-primary pt-10 pb-21"></div>
          <div className="container-fluid mt-n22 px-6">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                {/* <!-- Page header --> */}
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="mb-2 mb-lg-0">
                      <h3 className="mb-0 fw-bold text-white">Projects</h3>
                    </div>
                    <div>
                      <Link to="/" className="btn btn-white">
                        Logout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <CardContainer data={cardData} />
              <Info data={descData} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashBoard;
