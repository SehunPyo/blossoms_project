// Settings
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Conponents
import Navbar from './components/Navbar/Navbar.js';
import Login from './components/Login/Login.js';
// import MyPage from './components/MyPage/My_page.js';

// pages
import Home from './pages/Home/Home.js';
import Mypage from './pages/MyPage/My_page.js'

// Styles
import './App.css';

function App(){
  const location = useLocation();
  return (
    <div className="App">
    {/* 현재 경로가 '/login'이 아닐 때만 Navbar 렌더링 */}
    {location.pathname !== '/login' && location.pathname !== '/mypage' && <Navbar />}
    {/* {location.pathname !== '/login' && location.pathname !== '/MyPage' && <Navbar />} */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </div>
  );
}




export default App;
