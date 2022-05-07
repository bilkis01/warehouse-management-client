import React from "react";
import logo from "../../../imges/logo5.png";

const Footer = () => {
  return (
    <footer
      className="container-fluid  fw-bolder"
      style={{
        background: "",
        minHeight: "300px",
      }}
    >
      <div
        className="row g-5 align-items-center "
        style={{ minHeight: "300px" }}
      >
        <div className="col-lg-4 col-md-4 col-12">
          {/* titlle here */}
          <div className=" d-flex align-items-center justify-content-center ">
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="fs-1 text-capitalize text-orangered">
              car manager
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <div className="text-center fs-3 mb-2 text-orangered">
            Contact Info
          </div>
          <ul className="list-unstyled text-center">
            <li>CarOne, 207th Ave, 9000, NewYork</li>
            <li>+1 123 456 786</li>
            <li>carmanager@gamil.com</li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <div className="text-center fs-3 mb-2 text-orangered">
            Opening Hours
          </div>
          <ul>
            <li className="d-flex justify-content-between">
              <span>Fri</span> <span>24/7</span>
            </li>
            <li className="d-flex justify-content-between">
              <span>Sun - Thu</span> <span>8:00am - 11:30pm</span>
            </li>
            <li className="d-flex justify-content-between">
              <span>Saturday</span> <span>Closed</span>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <code>Copyright 2022. All rights reserved by CAR MANAGER</code>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
