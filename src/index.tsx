import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Count from './Count';
// import User from './User';
import reportWebVitals from './reportWebVitals';
// import ES6Arrow from './playground/es6-arrow';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Count /> */}
    {/* <User /> */}
    {/* <ES6Arrow /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
