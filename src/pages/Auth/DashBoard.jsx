import React, { useRef } from "react";
import CardContainer from "../../components/Cards/CardContainer";
import Info from "../../components/Info";
import DashNavBar from "../../components/DashNavBar";
import { Link } from "react-router-dom";

import profile_photo from '../../assets/avatar.png'

function DashBoard({ data }) {
  let modal=useRef()
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
    state,
    username,
    account_status
  } = data;

  const descData = [
    { header: "Account type", text: account_type },
    { header: "Routing number", text: 200090319 },
    { header: "Country", text: country },
    { header: "State", text: state },
    { header: " Email", text: email },
    { header: "First name", text: first_name },
    { header: "Last Name", text: last_name },
    // { header: "Full name", text: full_name },
    { header: "Gender", text: gender },
    // { header: "Favorite Color", text: favorite_color },
    // { header: "Maiden Name", text: maiden_name },
    { header: "Next of kin", text: next_of_kin },
    { header: "Opening date", text: opening_date },
    // { header: "Pet name", text: pet_name },
  ];

  const cardData = [
    { header: "Account Status", text: "Active" },
    { header: "Account Number", text: account_number },
    { header: "Opening Balance", text: `$ ${opening_amount}` },
    { header: "Current Balance", text: `$ ${present_amount}` },
  ];
  const NavData = [username, profile_photo];

const handleClick =()=>{

  modal.current.classList.remove('hidden')
  setTimeout(() => {
    modal.current.classList.add('hidden')
  }, 2000);
  
}

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
                    <div className=" mb-lg-0">
                    <div className="btn btn-white" onClick={handleClick}>
                        Withdraw
                      </div>
                      <div className="text-white hidden" ref={modal}>Your account is inactive </div>
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
