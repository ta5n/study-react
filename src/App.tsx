import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const onFormSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const target = e.target as typeof e.target & {
    option: { value: string };
  };
  const optionEntered = target.option.value;
  appData.options.push(optionEntered);
  console.log('optionEntered :>> ', optionEntered);
};

const appData = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: [3],
};

function App() {
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
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </header>
    </div>
  );
}

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

export default App;
