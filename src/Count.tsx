import React from 'react';
import ReactDOM from 'react-dom';

let count: number = 0;
const addOne = () => {
  // console.log('addOne called');
  count++;
  renderCounter();
};
const minusOne = () => {
  // console.log('minusOne called');
  count > 0 && count--;
  renderCounter();
};
const reset = () => {
  // console.log('reset');
  count = 0;
  renderCounter();
};

function Count() {
  const someId = 'myID';
  return (
    <div className="App">
      <header className="App-header">
        <h1>Count: {count}</h1>
        <button id={someId + '+1'} className="button" onClick={addOne}>
          +1
        </button>
        <button id={someId + '-1'} className="button" onClick={minusOne}>
          -1
        </button>
        <button id={someId + 'R'} className="button" onClick={reset}>
          Reset
        </button>
      </header>
    </div>
  );
}
const renderCounter = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Count />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

export default Count;
