
import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        {/* <div className="row">
          Column1
          <div className="col">
            <h4>عنوان المكتب</h4>
            <h1 className="list-unstyled">
              <li>059-060-757</li>
              <li>Nablus, Salem</li>
              <li>School Girle Streeet</li>
            </h1>
          </div>
          Column2
          <div className="col">
            <h4>Address</h4>
            <h1 className="list-unstyled">
              <li>059-060-757</li>
              <li>نابلس-سالم</li>
              <li>شارع مدرسة االبنات</li>
            </h1>
          </div>
          Column3
          <div className="col">
            <h4>Owner</h4>
            <h1 className="list-unstyled">
              <li>Hosny ishtaya</li>
              <li></li>
              <li></li>
            </h1>
          </div>
        </div>
        <hr /> */}
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Hosny ishtaya | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
