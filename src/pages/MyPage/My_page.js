import React, { useState } from 'react';
import {Link} from 'react-router-dom'

import './My_page.css';

function Mypage() {
    return (
        <div>
            My Page
        <Link to="/home" className='Login-title'>🅱️BloSSoms.</Link>
        </div>
    );
}

export default Mypage;