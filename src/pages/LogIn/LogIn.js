import React, { useState } from 'react';
import {Link} from 'react-router-dom'

import './Login.css';

import HorizonLine from '../../components/HorizontalLine/HorizontalLine.js';
import KakaoLogin from '../../components/KakaoLogin/KakaoLogin.js';

function Login() {
    return (
      <div className="Login">

        <div className='title'>
          {/* 블로그 이름 클릭하면 메인화면으로 */}
          <Link to="/home" className='Login_Title'>🅱️BloSSoms.</Link> 
          <p className='Login_Text'>안녕하세요. 글을 피우는 공간, BloSSoms 입니다.</p>
        </div>

        <div className='Login_Box'>
          <input placeholder="아이디" className='Login_ID'/>
          <input type="password" placeholder="비밀번호" className='Login_PW'/>
          <button className='Login_btn'>로그인</button>
        </div>

        <HorizonLine text="OR" className='HorizonLine'/>

        <div className='Login_Other'>
          <Link to="/home" className='Login_LostPw'>ID/PW 찾기</Link>
          |
          <Link to="/home" className='Login_SignUp'>회원가입</Link>
        </div>

        <div className='Social_Login'>
          <KakaoLogin />
        </div>
      </div>
    );
  }
  
  export default Login;