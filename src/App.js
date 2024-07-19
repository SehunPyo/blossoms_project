// Settings
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Conponents
import Navbar from './components/Navbar/Navbar.js';
import Login from './components/Login/Login.js';

// pages
import Home from './pages/Home/Home';
// import Mypage from './pages/MyPage/My_page.js';

// Styles
import './App.css';



function App(){
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/mypage" element={<Mypage />} /> */}
        {/* 다른 라우트를 여기에 추가할 수 있습니다. */}
      </Routes>
    </div>
  );
}




export default App;
