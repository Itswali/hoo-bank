import React from "react";
import headimg from "../../assets/robot.png";

export default function Header() {
  return (
    <div className="header-background">
      <div className="header-container">
        <div className="header-text">
          <button className="header-button" type="button">
            20% DISCOUNT FOR 1 MONTH ACCOUNT
          </button>
          <h1 className="header-text-fff">The Next </h1>
          <h1 className="header-text-ggg">Generation</h1>
          <h1 className="header-text-fff">Payment Method.</h1>
          <p>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <div className="header-img">
          {" "}
          <img src={headimg} alt="head-logo" />
        </div>
      </div>
      <div className="header-users">
        <h2 className="users-head"> 3800+</h2>
        <h2 className="users-body">USER ACTIVE</h2>
        <span className="horizontal-divider"></span>

        <h2 className="users-head"> 230+</h2>
        <h2 className="users-body">TRUSTED BY COMPANY</h2>
        <span className="horizontal-divider"></span>
        
        <h2 className="users-head"> $230M+</h2>
        <h2 className="users-body">TRANSACTION</h2>
      </div>
    </div>
  );
}
