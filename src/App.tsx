import React from 'react';
import './App.css';

function App() {
  const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
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
