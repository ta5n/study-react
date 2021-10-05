import React from 'react';
import './App.css';

let count: number = 0;
const addOne = () => {
  console.log('addOne called');
};
const minusOne = () => {
  console.log('minusOne called');
};

function Count() {
  const someId = 'myID';
  const element = (
    <div className="App">
      <header className="App-header">
        <h1>Count: {count}</h1>
        <button id={someId + '+1'} className="button" onClick={addOne}>
          +1
        </button>
        <button id={someId + '-1'} className="button" onClick={minusOne}>
          -1
        </button>
      </header>
    </div>
  );
  console.log(element);
  return element;
}

export default Count;
