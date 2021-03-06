import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
// import Indecision from './Indecision';
// import Count from './Count';
// import User from './User';
import reportWebVitals from './reportWebVitals'
import ES6Arrow from './playground/es6-arrow'
// import Visibility from './playground/toggle-visibility';

// sum of three numbers
const sum = (a: number, b: number, c: number) => a + b + c

ReactDOM.render(
  <React.StrictMode>
    {/* <Indecision /> */}
    {/* <App /> */}
    {/* <Count /> */}
    {/* <User /> */}
    <ES6Arrow />
    {/* <Visibility /> */}
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
