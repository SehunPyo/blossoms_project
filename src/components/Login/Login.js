import React, { useState } from 'react';
import {Link} from 'react-router-dom'

import './Login.css';

function Login() {
    return (
      <div id="Login">
        <div className='Login-Logo'>
          <div className='Login-Text'> 
            {/* 블로그 이름 클릭하면 메인화면으로 */}
            <Link to="/home" className='Login-title'>🅱️BloSSoms.</Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;