import React from 'react'
import headimg from '../../assets/robot.png';

export default function Header() {
  return (
    <div className="header-container">
     
      <div className="header-text"> 
        <button className="header-button" type="button">20% DISCOUNT FOR 1 MONTH ACCOUNT</button>
        <h1 className="header-text-fff">The Next </h1>
        <h1 className="header-text-ggg">Generation</h1>
        <h1 className="header-text-fff">Payment Method.</h1>
      </div>
      <div className="header-img"> <img src={headimg} alt="head-logo"/></div>
      
    </div>
  )
}
