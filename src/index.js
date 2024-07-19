// 기본
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 메인화면
import App from './App.js';


// index.html의 id가 "root"인 div 요소를 찾습니다.
const root = ReactDOM.createRoot(document.getElementById('root'));

// App 컴포넌트를 root div에 렌더링합니다
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();