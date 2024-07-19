import React from 'react';
import './Navbar.css';

// image
// import logo from 'assets/images/nav-logo.png';

function Navbar() {
  return (
    <div id="Navbar">
      <div className='Nav-background'>
        {/* 로고 */}
        <div className='Nav-01'> 
          <h4 className='Nav-title'>
            BLOSSOMS
          </h4>
        </div>
        {/* Nav Menu */}
        <div className='Nav-02'>
          2구역
        </div>
        {/* 로그인/회원가입 */}
        <div className='Nav-03'>
          3구역
        </div>
      </div>
    </div>
  );
}

export default Navbar;
