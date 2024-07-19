// Settings
import React from 'react';

// Conponents
import Navbar from './components/Navbar/Navbar.js';

// pages
import Home from './pages/Home/Home.js';

// Styles
import './App.css';



function App(){
  return (
    <div className="App">
      <Navbar />
      <div className='App-title'>
        <Home />
      </div>
    </div>
  );
}


export default App;
