import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const formSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const target = e.target as typeof e.target & {
    option: { value: string };
  };
  const optionEntered = target.option.value;

  if (optionEntered) {
    appData.options.push(optionEntered);
    target.option.value = '';
  }
  renderApp();
};

const appData: { title: string; subTitle: string; options: string[] } = {
  title: 'Indecision App',
  subTitle: 'This is some info',
  options: [],
};

const removeAll = () => {
  appData.options.length = 0;
  renderApp();
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{appData.title}</h1>
        {appData.subTitle && <p>{appData.subTitle}</p>}
        {appData.options.length > 0 ? 'Here are your options' : 'No options'}
        <p>{appData.options.length}</p>
        <button onClick={removeAll}>Remove All</button>
        <ol>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ol>
        <form onSubmit={formSubmit}>
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
