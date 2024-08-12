import React, { useState } from 'react';
import {Link} from 'react-router-dom'

import './Login.css';

import HorizonLine from '../../components/HorizontalLine/HorizontalLine.js';
import KakaoLogin from '../../components/KakaoLogin/KakaoLogin.js';

import Logo from '../../assets/images/Logo/Logo.png';



function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (id === '' || password === '') {
      setErrorMessage('아이디와 비밀번호가 입력되지 않았습니다.');
    } else {
      setErrorMessage('');
      // 로그인 로직 추가 (예: API 호출)
      // 성공 시 메인 화면으로 이동
    }
  }
    return (
      <div className="Login">

        <div className='title'>
          {/* 블로그 이름 클릭하면 메인화면으로 */}
          <div className='Logo'>
            <img src={Logo} alt="Logo" style={{ width: '27px', height: '27px', marginRight: '8px' }} />
            <span><Link to="/home" className='Login_Title'>BloSSoms.</Link> </span>
          </div>
          
          <p className='Login_Text'>안녕하세요. 글로 피우는 공간, BloSSoms 입니다.</p>
        </div>

        <div className='Login_Box'>
          <input 
            placeholder="아이디" 
            className='Login_ID'
            value={id} 
            onChange={(e) => setId(e.target.value)} 
          />
          <input type="password" 
            placeholder="비밀번호"
            className='Login_PW'
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          {/* <Link to="/home" onClick={handleLogin} className='Login_btn'>로그인</Link> */}
          <button onClick={handleLogin} className='Login_btn'>로그인</button>
          {errorMessage && <p className="error">{errorMessage}</p>}
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