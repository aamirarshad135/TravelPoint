import React from 'react';
import person from "../assets/images/person.png";
import { NavLink } from "react-router-dom";

const BookingInfo = () => {
  return (
    <div className="row g-0 mt-4 ms-4" style={{ marginRight: "15%" }}>
      <div className="container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/personal-info"
            >
              Personal Information
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/travel-log"
            >
              Travel Log
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/booking-info"
            >
              Booking Information
            </NavLink>
          </li>
        </ul>
        <div className="card shadow-lg" style={{ backgroundColor: "#EFF2FB" }}>
          <div className="card-body m-2">
            <div className="d-flex align-items-center mb-3">
              <div class="me-3">
                <img
                  src={person}
                  className="img-rounded-circle"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <div>
                <h5 className="card-title mb-0 fw-bold fs-4">Ms. Perera</h5>
                <a href="#" className="text-decoration-none">
                  Traveller ID #1254852
                </a>
              </div>
            </div>
            {/* Add content for Booking Information here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;
