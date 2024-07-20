import React from 'react';
import {Link} from 'react-router-dom'

import './Navbar.css';

// image
// import logo from 'assets/images/nav-logo.png';

function Navbar() {
  return (
    <div id="Navbar">
      <div className='Nav-background'>

        {/* 로고 */}
        <div className='Nav-01'> 
          {/* 블로그 이름 클릭하면 메인화면으로 */}
          <Link to="/home" className='Nav-title'>🅱️BloSSoms.</Link>
        </div>
        
        {/* Nav Menu */}
        <div className='Nav-02'>
          {/* 실시간 인기글 보기 */}
          <Link to="/home" className='Nav-up'>인기 글</Link>

          {/* 실시간 최신글 보기 */}
          <Link to="/home" className='Nav-now'>최근 글</Link>

          {/* 이웃 글 보기 */}
          <Link to="/home" className='Nav-friends'>이웃의 글</Link>

          {/* 내 블로그  */}
          <Link to="/mypage" className='Nav-mypage'>내 블로그</Link>
        </div>
        
        <div className='Nav-03'>
          {/* 글 작성  */}
          <a href='../../App.js' className='Nav-write'>글 작성</a>
          {/* 로그인/회원가입 */}
          <Link to="/login" className='Nav-login'>LOG IN</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
