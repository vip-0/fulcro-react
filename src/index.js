import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/owl.carousel.min.css';
import './css/simplebar.css';
// import './scripts/jquery.min.js';
// import './scripts/lazyload.js';
// import './scripts/main.js';
// import './scripts/owl.carousel.min.js';
// import './scripts/simplebar.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
