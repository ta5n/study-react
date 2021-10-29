import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

let visibility = false;

function Visibility() {
  return (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggle}>{visibility ? 'Hide Details' : 'Show Details'}</button>
      {visibility && (
        <div>
          <p>Hey These are some details you can now see!</p>
        </div>
      )}
    </div>
  );
}

const toggle = () => {
  visibility = !visibility;
  renderToggle();
};

const renderToggle = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Visibility />
    </React.StrictMode>,

    document.getElementById('root')
  );
};

export default Visibility;
