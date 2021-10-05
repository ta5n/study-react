import React from 'react';
import './App.css';

function App() {
  const appData = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: ['One', 'Two'],
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>{appData.title}</h1>
        {appData.subtitle && <p>{appData.subtitle}</p>}
        {appData.options.length > 0 ? 'Here are your options' : 'No options'}
        <ol>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ol>
      </header>
    </div>
  );
}

export default App;
