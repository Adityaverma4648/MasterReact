import React from 'react';
import ReactDOM from 'react-dom/client';
// index.css are for the index.js
import './index.css';
//  imported the Components
import App from './App';
import Clock from './Clock'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name ='Aliza' />
  </React.StrictMode>
);
const clock = ReactDOM.createRoot(document.getElementById('clock'));
clock.render(
    <React.StrictMode>
        <Clock />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
